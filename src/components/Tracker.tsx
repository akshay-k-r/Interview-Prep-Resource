"use client";

import { useEffect } from "react";

export function SidebarTracker() {
  useEffect(() => {
    const injectCheckboxes = () => {
      const links = document.querySelectorAll<HTMLElement>("aside a");
      links.forEach((link) => {
        if (link.querySelector(".tracker-checkbox")) return;

        const href = link.getAttribute("href");
        if (!href) return;

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.className = "tracker-checkbox ml-2 shrink-0 w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer";
        
        cb.addEventListener("click", (e) => {
          e.stopPropagation();
        });

        const stateKey = "tracker_" + href;
        if (localStorage.getItem(stateKey) === "true") {
          cb.checked = true;
        }

        cb.addEventListener("change", (e) => {
          localStorage.setItem(stateKey, (e.target as HTMLInputElement).checked ? "true" : "false");
        });

        link.style.display = "flex";
        link.style.justifyContent = "space-between";
        link.style.alignItems = "center";
        link.appendChild(cb);
      });
    };

    // Use timeout to let Nextra hydration finish rendering sidebar
    setTimeout(injectCheckboxes, 100);

    const observer = new MutationObserver(() => {
      injectCheckboxes();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
