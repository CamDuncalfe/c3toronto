"use client";

import { useEffect, useRef, useCallback } from "react";

interface WebflowPageProps {
  bodyClass: string;
  wfPage: string;
  headStyles: string;
  bodyHtml: string;
  pageScripts: string;
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
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const scriptEls = useRef<HTMLScriptElement[]>([]);

  // Activate inline scripts: dangerouslySetInnerHTML renders <script> as
  // inert text nodes. We must clone each one into a fresh <script> element
  // so the browser actually evaluates it.
  const activateScripts = useCallback(() => {
    if (!containerRef.current) return;

    const inertScripts = containerRef.current.querySelectorAll("script");
    inertScripts.forEach((old) => {
      const fresh = document.createElement("script");

      // Copy every attribute (src, type, id, etc.)
      Array.from(old.attributes).forEach((attr) => {
        fresh.setAttribute(attr.name, attr.value);
      });

      // Copy inline code
      if (old.textContent) {
        fresh.textContent = old.textContent;
      }

      // Replace in-place so DOM position is preserved
      old.parentNode?.replaceChild(fresh, old);
      scriptEls.current.push(fresh);
    });
  }, []);

  // 1. Set body / html attributes
  useEffect(() => {
    document.body.className = bodyClass;
    document.documentElement.setAttribute("data-wf-page", wfPage);
    document.documentElement.setAttribute(
      "data-wf-site",
      "644dc19729bd36f5c52be3e0"
    );

    // Webflow feature-detection classes
    const root = document.documentElement;
    if (!root.classList.contains("w-mod-js")) {
      root.classList.add("w-mod-js");
    }
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
    styleRef.current = el;

    return () => {
      el.remove();
      styleRef.current = null;
    };
  }, [headStyles]);

  // 3. After first render, activate all inline scripts then re-init Webflow
  useEffect(() => {
    if (scriptsRan.current) return;
    scriptsRan.current = true;

    // Wait a tick so the DOM from dangerouslySetInnerHTML is fully painted
    const timer = setTimeout(() => {
      // Activate scripts embedded in the body HTML
      activateScripts();

      // Run any additional page-level scripts
      if (pageScripts) {
        const el = document.createElement("script");
        el.textContent = pageScripts;
        document.body.appendChild(el);
        scriptEls.current.push(el);
      }

      // Re-initialize Webflow interactions after scripts are active
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
    }, 100);

    return () => clearTimeout(timer);
  }, [activateScripts, pageScripts]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
