// Dark and Light Theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const light = document.body.classList.toggle("light");

  document.documentElement.style.setProperty(
    "--bg", light ? "#f5f5ff" : "#10101d"
  );

  document.documentElement.style.setProperty(
    "--card", light ? "#ffffff" : "#1c1b2d"
  );

  document.documentElement.style.setProperty(
    "--text", light ? "#202033" : "#ffffff"
  );

  themeBtn.textContent = light ? "🌙" : "☀️";
});

// Scroll Animations
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Contact Form Demo
document.getElementById("contactForm")
.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message form is working.");
  this.reset();
});
