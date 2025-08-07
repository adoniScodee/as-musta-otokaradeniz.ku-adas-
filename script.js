// Sayfa yüklendiğinde scroll animasyonu
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
