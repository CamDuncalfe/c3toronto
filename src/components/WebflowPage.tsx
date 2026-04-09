"use client";

import { useEffect, useRef } from "react";

interface WebflowPageProps {
  bodyClass: string;
  wfPage: string;
  headStyles: string;
  bodyHtml: string;
  pageScripts: string;
}

/**
 * Wait until jQuery and Splide are both available on window,
 * then call the callback. Polls every 50ms, gives up after 10s.
 */
function whenReady(cb: () => void) {
  const w = window as any;
  if (w.jQuery && w.Splide) {
    cb();
    return;
  }
  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed += 50;
    if (w.jQuery && w.Splide) {
      clearInterval(interval);
      cb();
    } else if (elapsed > 10000) {
      clearInterval(interval);
      // Run anyway — some pages don't need Splide
      cb();
    }
  }, 50);
}

export function WebflowPage({
  bodyClass,
  wfPage,
  headStyles,
  bodyHtml,
  pageScripts,
}: WebflowPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsRan = useRef(false);

  // 1. Set body / html attributes on mount
  useEffect(() => {
    document.body.className = bodyClass;
    document.documentElement.setAttribute("data-wf-page", wfPage);
    document.documentElement.setAttribute(
      "data-wf-site",
      "644dc19729bd36f5c52be3e0"
    );

    const root = document.documentElement;
    if (!root.classList.contains("w-mod-js")) root.classList.add("w-mod-js");
    if ("ontouchstart" in window && !root.classList.contains("w-mod-touch")) {
      root.classList.add("w-mod-touch");
    }

    return () => {
      document.body.className = "";
    };
  }, [bodyClass, wfPage]);

  // 2. Inject page-level <style> into <head>
  useEffect(() => {
    if (!headStyles) return;
    const el = document.createElement("style");
    el.setAttribute("data-page-styles", "true");
    el.textContent = headStyles;
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, [headStyles]);

  // 3. Activate inline scripts after deps are ready
  useEffect(() => {
    if (scriptsRan.current || !containerRef.current) return;
    scriptsRan.current = true;

    whenReady(() => {
      const container = containerRef.current;
      if (!container) return;

      // Clone every inert <script> into a live one.
      // dangerouslySetInnerHTML creates script DOM nodes that the browser
      // won't execute. Replacing them with fresh elements triggers execution.
      const inertScripts = container.querySelectorAll("script");
      inertScripts.forEach((old) => {
        const fresh = document.createElement("script");
        Array.from(old.attributes).forEach((attr) => {
          fresh.setAttribute(attr.name, attr.value);
        });

        if (old.textContent) {
          let code = old.textContent;

          // DOMContentLoaded has already fired in an SPA. Unwrap those
          // callbacks so they execute immediately.
          code = code.replace(
            /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\s*\)\s*\{/g,
            "(function() {"
          );

          fresh.textContent = code;
        }

        old.parentNode?.replaceChild(fresh, old);
      });

      // Run additional page-level scripts
      if (pageScripts) {
        let code = pageScripts;
        code = code.replace(
          /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\s*\)\s*\{/g,
          "(function() {"
        );
        const el = document.createElement("script");
        el.textContent = code;
        document.body.appendChild(el);
      }

      // Re-init Webflow interactions
      const w = (window as any).Webflow;
      if (w) {
        try {
          w.destroy();
          w.ready();
          w.require?.("ix2")?.init();
        } catch {
          // Some pages don't use ix2
        }
      }
    });
  }, [pageScripts]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
