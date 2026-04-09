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
 * Load an external script and return a promise that resolves when done.
 */
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Skip if already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement("script");
    el.src = src;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

export function WebflowPage({
  bodyClass,
  wfPage,
  headStyles,
  bodyHtml,
  pageScripts,
}: WebflowPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // --- STEP 1: Set HTML + body attributes (before any JS loads) ---
    const root = document.documentElement;
    root.setAttribute("data-wf-page", wfPage);
    root.setAttribute("data-wf-site", "644dc19729bd36f5c52be3e0");
    root.setAttribute("data-wf-domain", "c3toronto.com");
    if (!root.classList.contains("w-mod-js")) root.classList.add("w-mod-js");
    if ("ontouchstart" in window && !root.classList.contains("w-mod-touch")) {
      root.classList.add("w-mod-touch");
    }
    document.body.className = bodyClass;

    // --- STEP 2: Inject page-specific <style> into <head> ---
    let styleEl: HTMLStyleElement | null = null;
    if (headStyles) {
      styleEl = document.createElement("style");
      styleEl.setAttribute("data-page-styles", "true");
      styleEl.textContent = headStyles;
      document.head.appendChild(styleEl);
    }

    // --- STEP 3: Load scripts in order, then activate inline scripts ---
    (async () => {
      try {
        // jQuery first (many things depend on it)
        await loadScript("/js/jquery.min.js");

        // Webflow JS (reads data-wf-page, initializes IX2 interactions)
        await loadScript("/js/webflow.chunk1.js");
        await loadScript("/js/webflow.chunk2.js");
        await loadScript("/js/webflow.main.js");

        // Splide (carousel library)
        await loadScript("/js/splide.min.js");

        // --- STEP 4: Activate inline scripts from body HTML ---
        // dangerouslySetInnerHTML renders <script> as inert DOM nodes.
        // We clone each into a fresh <script> so the browser executes it.
        if (containerRef.current) {
          const inertScripts = containerRef.current.querySelectorAll("script");
          inertScripts.forEach((old) => {
            const fresh = document.createElement("script");
            Array.from(old.attributes).forEach((attr) => {
              fresh.setAttribute(attr.name, attr.value);
            });
            if (old.textContent) {
              let code = old.textContent;
              // DOMContentLoaded has already fired. Unwrap those callbacks
              // into IIFEs so they run immediately.
              code = code.replace(
                /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\s*\)\s*\{/g,
                "(function() {"
              );
              fresh.textContent = code;
            }
            old.parentNode?.replaceChild(fresh, old);
          });
        }

        // Run extra page-level scripts
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

        // --- STEP 5: Re-init Webflow ---
        const w = (window as any).Webflow;
        if (w) {
          try {
            w.destroy();
            w.ready();
            w.require?.("ix2")?.init();
          } catch {
            // Some pages don't use all modules
          }
        }
      } catch (err) {
        console.error("[WebflowPage] Script loading error:", err);
      }
    })();

    return () => {
      document.body.className = "";
      styleEl?.remove();
    };
  }, [bodyClass, wfPage, headStyles, pageScripts]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
