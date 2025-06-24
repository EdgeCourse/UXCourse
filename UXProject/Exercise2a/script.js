document.addEventListener("DOMContentLoaded", function () {
  // Create theme toggle button
  const toggle = document.createElement("button");
  toggle.innerText = "Toggle Theme";
  toggle.setAttribute("aria-label", "Toggle light/dark mode");
  toggle.style.position = "fixed";
  toggle.style.top = "1rem";
  toggle.style.right = "1rem";
  toggle.style.padding = "0.5rem 1rem";
  toggle.style.zIndex = "999";

  // Insert at top of body
  document.body.appendChild(toggle);

  // Toggle dark mode
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerText = document.body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
  });

  // Show outline for keyboard users
  document.addEventListener("keyup", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  const bp = document.createElement('div');
  bp.textContent = window.innerWidth + "px";
  bp.style.position = "fixed";
  bp.style.bottom = "0";
  bp.style.right = "0";
  bp.style.background = "#000";
  bp.style.color = "#fff";
  bp.style.padding = "4px";
  bp.style.zIndex = "9999";
  document.body.appendChild(bp);
  window.addEventListener('resize', () => {
    bp.textContent = window.innerWidth + "px";
  });

});
