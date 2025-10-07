// --- Navbar smooth scroll ---
const navLinks = document.querySelectorAll(".navBar__home a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault(); // ngăn nhảy ngay lập tức
      const targetSection = document.querySelector(href);
      if (targetSection) {
        // scroll mượt với easing cubic
        const targetPosition =
          targetSection.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // thời gian scroll (ms)
        let start = null;

        function easeOutCubic(t) {
          return 1 - Math.pow(1 - t, 3);
        }

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run =
            easeOutCubic(Math.min(timeElapsed / duration, 1)) * distance +
            startPosition;
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
      }
    }
  });
});
