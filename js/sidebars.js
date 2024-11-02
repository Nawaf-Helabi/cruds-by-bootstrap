/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

// my style
if (localStorage.getItem("isSmall") === "yes") {
  sidebarId.classList.add("smallsidebar");
} else {
  sidebarId.classList.remove("smallsidebar");
}

const sidebarfun = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    sidebarId.classList.remove("smallsidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    sidebarId.classList.add("smallsidebar");
  }
};
