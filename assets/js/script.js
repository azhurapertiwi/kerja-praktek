function animateCounter(elementId, targetNumber, duration) {
  let counterElement = document.getElementById(elementId);
  let currentNumber = 0;
  let increment = Math.ceil(targetNumber / (duration / 10)); // Perkiraan kecepatan

  let interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber; // Pastikan tidak lebih dari target
      clearInterval(interval);
    }
    counterElement.innerText = currentNumber;
  }, 10); // Update setiap 10ms
}

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  animateCounter("counter1", 575, 2000); // Animasi hingga 575 dalam 2 detik
  animateCounter("counter2", 10, 20000);
  animateCounter("counter3", 27, 20000);
  animateCounter("counter4", 8, 20000);
});

// 2
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      element.classList.add("visible");
    }
  });
});

// 3
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInLeft");
        entry.target.classList.add("animate__animated");
      }
    });
  });

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => observer.observe(el));
});
