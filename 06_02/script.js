// Find all sub-menus.
const subMenus = document.querySelectorAll(".main-nav ul ul");
// Find all sub-menu trigger buttons. */
const menuTriggers = document.querySelectorAll(".menu-trigger");

// Hide all sub-menus.
subMenus.forEach((subMenu) => {
  subMenu.classList.add("hide");
});

/**
 * Toggle sub-menu open/closed.
 * @param {DOM node} parent
 * @param {boolean} status
 */
const toggleMenu = (parent, status) => {
  const trigger = parent.querySelector("button");
  const subMenu = parent.querySelector("ul");
  if (status == "false") {
    parent.classList.add("open");
    subMenu.classList.remove("hide");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close news menu.");
  } else {
    parent.classList.remove("open");
    subMenu.classList.add("hide");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
  }
};

// For each trigger button:
// - add a down-arrow
// - set aria attributes
// - add event listener
menuTriggers.forEach((trigger) => {
  trigger.classList.add("sub");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-label", "Open news menu.");
  trigger.addEventListener("click", function () {
    const parent = trigger.parentElement;
    const status = trigger.getAttribute("aria-expanded");
    toggleMenu(parent, status);
  });
});

// Close sub-menus when user tabs outside menu.
document.addEventListener("focusin", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});

// Close sub-menus when user clicks outside menu.
document.addEventListener("click", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});
