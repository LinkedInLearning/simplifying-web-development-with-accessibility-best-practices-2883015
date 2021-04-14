const nav = document.querySelector(".main-nav");
const trigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".main-nav ul");

// Hide menu on open.
menu.classList.add("hide");

// Toggle menu open/closed.
const toggleMenu = (status) => {
  if (status == "false") {
    menu.classList.remove("hide");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close news menu.");
  } else {
    menu.classList.add("hide");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
  }
};

// Set initial state for the button.
trigger.setAttribute("aria-expanded", "false");
trigger.setAttribute("aria-label", "Open news menu.");

// Listen for button click
trigger.addEventListener("click", function () {
  const status = trigger.getAttribute("aria-expanded");
  toggleMenu(status);
});

// Close menu when user tabs outside the menu.
document.addEventListener("focusin", (e) => {
  if (e.target.closest("nav") !== nav) {
    toggleMenu(true);
  }
});

// Close menu when user clicks outside the menu.
document.addEventListener("click", (e) => {
  if (e.target.closest("nav") !== nav) {
    toggleMenu(true);
  }
});
