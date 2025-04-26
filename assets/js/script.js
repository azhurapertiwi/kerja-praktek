document.addEventListener("DOMContentLoaded", function () {
  // Jalankan counter animasi
  animateCounter("counter1", 575, 2000);
  animateCounter("counter2", 10, 2000);
  animateCounter("counter3", 27, 2000);
  animateCounter("counter4", 8, 2000);

  // --- Counter Animation ---
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

  // Intersection Observer animasi biasa
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll fix
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
