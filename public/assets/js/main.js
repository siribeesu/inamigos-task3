document.addEventListener('DOMContentLoaded', () => {
  // --- Loading Screen ---
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000); // Wait 1 second before fading out
  }

  // --- Sticky Navbar ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Dark Mode Toggle ---
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Check local storage or system preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '☀️';
      }
    });
    // Set initial icon
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      themeToggle.innerHTML = '☀️';
    } else {
      themeToggle.innerHTML = '🌙';
    }
  }

  // --- Back to Top Button & Scroll Progress ---
  const backToTopBtn = document.getElementById('backToTop');
  const scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    // Back to top visibility
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('active');
    } else {
      backToTopBtn?.classList.remove('active');
    }

    // Scroll Progress bar
    if (scrollProgress) {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (window.scrollY / scrollTotal) * 100;
      scrollProgress.style.width = scrollPercentage + '%';
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Animated Counters ---
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      // Intersection Observer to trigger when visible
      const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
          updateCount();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }
  
  if(counters.length > 0) {
    animateCounters();
  }
});
