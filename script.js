const toggle = document.querySelector(".theme-toggle");
const heroImage = document.querySelector(".hero-image");

function applyTheme(theme) {
  // Set the attribute your CSS is using
  document.documentElement.dataset.theme = theme;

  // Button icon
  toggle.textContent = theme === "dark" ? "☀" : "☾";

  // Swap hero image (only if it exists on this page)
  if (heroImage?.dataset?.light && heroImage?.dataset?.dark) {
    heroImage.src = theme === "dark"
      ? heroImage.dataset.dark
      : heroImage.dataset.light;
  }
}

// Load saved theme (if any)
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  // User has made a choice — respect it
  applyTheme(savedTheme);
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme); // Save to memory
});
