const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        function easeOutCubic(t) {
          return 1 - Math.pow(1 - t, 3);
        }

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = easeOutCubic(Math.min(timeElapsed / duration, 1)) * distance + startPosition;
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
      }
    }
  });
});


// --- Các nút member mở profile ---
document.getElementById("Duong").addEventListener("click", () => {
  window.location.href = "../../public/page/profile/Duong/index.html";
});
document.getElementById("Hau").addEventListener("click", () => {
  window.location.href = "../../public/page/profile/Hau/index.html";
});
document.getElementById("Vinh").addEventListener("click", () => {
  window.location.href = "../../public/page/profile/Vinh/index.html";
});


// --- Hiệu ứng hiện dần khi cuộn tới ---
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Nếu chỉ muốn chạy 1 lần:
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // Hiện dần khi phần tử xuất hiện 20% trong khung nhìn
});

reveals.forEach(r => observer.observe(r));
