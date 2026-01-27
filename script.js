const toggleButton = document.querySelector(".theme-toggle");
const heroImage = document.querySelector(".hero-image");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  toggleButton.textContent = isDark ? "☀" : "☾";

  // Swap hero image
  heroImage.src = isDark
    ? heroImage.dataset.dark
    : heroImage.dataset.light;
});
