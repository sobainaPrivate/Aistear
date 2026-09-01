document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
  }

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fade/slide cards in as they scroll into view (stagger delay is set inline per element).
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
    // Safety net: force-reveal anything the observer hasn't caught after 2s
    // (e.g. an element the browser never reports as intersecting).
    window.setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }, 2000);
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Count the stat numbers up from 0 once their card scrolls into view.
  var countEls = document.querySelectorAll('.stat-count[data-target]');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    var duration = 1200;
    var start = null;
    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    window.requestAnimationFrame(step);
  }
  if (countEls.length && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    countEls.forEach(function (el) { countObserver.observe(el); });
  } else {
    countEls.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
  }

  // One-shot "confetti" burst of falling Arabic letters when the Programs section
  // scrolls into view — like the glitter-drop on a congratulations email.
  var arabicLayer = document.querySelector('[data-arabic-fall]');
  if (arabicLayer && !prefersReducedMotion && 'IntersectionObserver' in window) {
    var arabicLetters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
    var arabicColors = ['#FB8629', '#1B3B5A', '#E07016', '#24507A', '#F4A950', '#3E6690'];

    function spawnArabicFall(container) {
      var count = 26;
      var containerHeight = container.offsetHeight || 400;
      for (var i = 0; i < count; i++) {
        var span = document.createElement('span');
        span.className = 'arabic-letter';
        span.textContent = arabicLetters[Math.floor(Math.random() * arabicLetters.length)];

        var duration = 2.2 + Math.random() * 1.6;
        var delay = Math.random() * 0.9;
        var fallDistance = containerHeight * (0.5 + Math.random() * 0.6);
        var rotEnd = Math.round(Math.random() * 260 - 130);
        var peakOpacity = (0.5 + Math.random() * 0.35).toFixed(2);

        span.style.left = (Math.random() * 96).toFixed(1) + '%';
        span.style.fontSize = Math.round(16 + Math.random() * 20) + 'px';
        span.style.color = arabicColors[Math.floor(Math.random() * arabicColors.length)];
        span.style.setProperty('--fall-distance', fallDistance.toFixed(0) + 'px');
        span.style.setProperty('--rot-end', rotEnd + 'deg');
        span.style.setProperty('--peak-opacity', peakOpacity);
        span.style.animationDuration = duration.toFixed(2) + 's';
        span.style.animationDelay = delay.toFixed(2) + 's';

        container.appendChild(span);
        window.setTimeout(function (el) {
          return function () { el.remove(); };
        }(span), (duration + delay) * 1000 + 300);
      }
    }

    var arabicObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spawnArabicFall(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    arabicObserver.observe(arabicLayer);
  }
});
