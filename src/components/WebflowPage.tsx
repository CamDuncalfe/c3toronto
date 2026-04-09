"use client";

import { useEffect, useRef } from "react";

interface WebflowPageProps {
  bodyClass: string;
  wfPage: string;
  headStyles: string;
  bodyHtml: string;
  inlineScripts: string[];
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${src}"], script[data-src="${src}"]`
    );
    if (existing) {
      resolve();
      return;
    }
    const el = document.createElement("script");
    el.src = src;
    el.setAttribute("data-src", src);
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed: ${src}`));
    document.body.appendChild(el);
  });
}

function runScript(code: string) {
  // Unwrap DOMContentLoaded callbacks into IIFEs
  const patched = code.replace(
    /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\s*\)\s*\{/g,
    "(function() {"
  );
  const el = document.createElement("script");
  el.textContent = patched;
  document.body.appendChild(el);
}

export function WebflowPage({
  bodyClass,
  wfPage,
  headStyles,
  bodyHtml,
  inlineScripts,
}: WebflowPageProps) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    // 1. Set attributes on <html> and <body>
    const root = document.documentElement;
    root.setAttribute("data-wf-page", wfPage);
    root.setAttribute("data-wf-site", "644dc19729bd36f5c52be3e0");
    root.setAttribute("data-wf-domain", "c3toronto.com");
    if (!root.classList.contains("w-mod-js")) root.classList.add("w-mod-js");
    if ("ontouchstart" in window && !root.classList.contains("w-mod-touch")) {
      root.classList.add("w-mod-touch");
    }
    document.body.className = bodyClass;

    // 2. Inject head styles
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-page-styles", "true");
    styleEl.textContent = headStyles;
    document.head.appendChild(styleEl);

    // 3. Load deps in order, then run inline scripts
    (async () => {
      try {
        await loadScript("/js/jquery.min.js");
        await loadScript("/js/webflow.chunk1.js");
        await loadScript("/js/webflow.chunk2.js");
        await loadScript("/js/webflow.main.js");
        await loadScript("/js/splide.min.js");

        // Run each extracted inline script
        for (const code of inlineScripts) {
          runScript(code);
        }

        // Re-init Webflow IX2
        const w = (window as any).Webflow;
        if (w) {
          try {
            w.destroy();
            w.ready();
            w.require?.("ix2")?.init();
          } catch {
            // ok
          }
        }
      } catch (err) {
        console.error("[WebflowPage] Error:", err);
      }
    })();

    return () => {
      document.body.className = "";
      styleEl.remove();
    };
  }, [bodyClass, wfPage, headStyles, inlineScripts]);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
