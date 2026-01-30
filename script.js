const toggle = document.querySelector(".theme-toggle");
const heroImage = document.querySelector(".hero-image");

// Load saved theme (if any)
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  toggle.textContent = theme === "dark" ? "☀" : "☾";

  if (heroImage?.dataset?.light && heroImage?.dataset?.dark) {
    heroImage.src = theme === "dark"
      ? heroImage.dataset.dark
      : heroImage.dataset.light;
  }
}

toggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);

  applyTheme(newTheme);
});
