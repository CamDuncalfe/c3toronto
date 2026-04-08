"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    // Set body class and wf attributes
    document.body.className = bodyClass;
    document.documentElement.setAttribute("data-wf-page", wfPage);
    document.documentElement.setAttribute(
      "data-wf-site",
      "644dc19729bd36f5c52be3e0"
    );

    // Add w-mod-js class
    document.documentElement.className = document.documentElement.className
      .replace(/ ?w-mod-js/g, "")
      .concat(" w-mod-js");
    if ("ontouchstart" in window) {
      document.documentElement.className += " w-mod-touch";
    }

    return () => {
      document.body.className = "";
    };
  }, [bodyClass, wfPage]);

  useEffect(() => {
    // Inject head styles
    if (headStyles) {
      const styleEl = document.createElement("style");
      styleEl.setAttribute("data-page-styles", "true");
      styleEl.textContent = headStyles;
      document.head.appendChild(styleEl);

      return () => {
        styleEl.remove();
      };
    }
  }, [headStyles]);

  useEffect(() => {
    if (!containerRef.current || scriptsRan.current) return;
    scriptsRan.current = true;

    // Find and execute inline scripts within the rendered HTML
    const scripts = containerRef.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      // Copy attributes
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });

    // Run page-specific scripts
    if (pageScripts) {
      const scriptEl = document.createElement("script");
      scriptEl.textContent = pageScripts;
      document.body.appendChild(scriptEl);
    }

    // Re-init Webflow if available
    if (typeof window !== "undefined" && (window as any).Webflow) {
      try {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        (window as any).Webflow.require("ix2")?.init();
      } catch (e) {
        // Webflow re-init may fail on some pages, that's ok
      }
    }
  }, [pageScripts]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
