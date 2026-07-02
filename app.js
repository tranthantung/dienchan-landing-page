/* ====================================================
   DIỆN CHẨN – app.js
   Interactions: Navbar, Accordion, Filter, Tabs,
                 Countdown, Scroll Reveal, Form, Counter
   ==================================================== */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initScrollReveal();
  initCounterAnimation();
  initSymptomFilter();
  initCurriculumAccordion();
  initDemoTabs();
  initCountdown();
  initForm();
  initNewsletterForm();
  initScrollTop();
  initSmoothNavClose();
});

/* ══════════════════════════════════════════════
   1. NAVBAR – Glassmorphism on scroll
══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ══════════════════════════════════════════════
   2. HAMBURGER – Mobile menu
══════════════════════════════════════════════ */
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}

/* Close mobile nav when clicking a link inside it */
function initSmoothNavClose() {
  const mobileNav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger-btn');
  if (!mobileNav || !btn) return;

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ══════════════════════════════════════════════
   3. SCROLL REVEAL – Intersection Observer
══════════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   4. COUNTER ANIMATION – Hero metrics
══════════════════════════════════════════════ */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000; // ms
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(easeOut(progress) * target);

      // Format with thousand separator
      el.textContent = value >= 1000
        ? (value / 1000).toFixed(1).replace('.0', '') + 'K+'
        : value.toString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target >= 1000
          ? (target / 1000).toFixed(0) + ',000+' // 15,000+
          : target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   5. SYMPTOM FILTER BAR
══════════════════════════════════════════════ */
function initSymptomFilter() {
  const filterBar = document.getElementById('symptom-filter');
  const modules = document.querySelectorAll('#curriculum-list .curriculum-item');
  if (!filterBar || !modules.length) return;

  filterBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    // Update active chip
    filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const target = chip.dataset.target;

    modules.forEach(module => {
      const symptoms = module.dataset.symptoms || '';
      const matches = target === 'all' || symptoms.includes(target);

      // Animate in/out
      if (matches) {
        module.style.display = '';
        module.classList.remove('highlighted');
        setTimeout(() => module.classList.add('highlighted'), 10);
        setTimeout(() => module.classList.remove('highlighted'), 2500);
      } else {
        module.style.opacity = '0.35';
        module.style.transform = 'scale(0.98)';
      }

      if (matches) {
        module.style.opacity = '';
        module.style.transform = '';
      }
    });

    // Scroll to curriculum section (offset for sticky elements)
    if (target !== 'all') {
      const currSection = document.getElementById('curriculum');
      if (currSection) {
        const offset = currSection.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  });
}

/* ══════════════════════════════════════════════
   6. CURRICULUM ACCORDION
══════════════════════════════════════════════ */
function initCurriculumAccordion() {
  const items = document.querySelectorAll('.curriculum-item');
  if (!items.length) return;

  items.forEach(item => {
    const header = item.querySelector('.curriculum-header');
    const body = item.querySelector('.curriculum-body');
    const chevronIcon = item.querySelector('.curriculum-chevron');

    if (!header || !body) return;

    const toggle = () => {
      const isOpen = item.classList.contains('open');

      // Close all others first (optional: true accordion behavior)
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherHeader = other.querySelector('.curriculum-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle this one
      item.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    };

    header.addEventListener('click', toggle);

    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/* ══════════════════════════════════════════════
   7. DEMO TABS
══════════════════════════════════════════════ */
function initDemoTabs() {
  const tabs = document.querySelectorAll('.demo-tab');
  const contents = document.querySelectorAll('.demo-content');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      // Update tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update content panels
      contents.forEach(content => {
        content.classList.remove('active');
      });
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

/* ══════════════════════════════════════════════
   8. COUNTDOWN TIMER
══════════════════════════════════════════════ */
function initCountdown() {
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');
  if (!hoursEl || !minsEl || !secsEl) return;

  // Store deadline in sessionStorage so it persists on page refresh but resets per session
  const STORAGE_KEY = 'dc_countdown_end';
  let endTime = sessionStorage.getItem(STORAGE_KEY);

  if (!endTime) {
    // Set 23 hours 59 minutes from now
    endTime = Date.now() + (23 * 3600 + 59 * 60) * 1000;
    sessionStorage.setItem(STORAGE_KEY, endTime);
  }

  const pad = n => String(n).padStart(2, '0');

  const tick = () => {
    const remaining = Math.max(0, endTime - Date.now());

    const totalSecs = Math.floor(remaining / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);

    if (remaining === 0) {
      // Reset countdown for demo
      sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════
   9. REGISTRATION FORM VALIDATION
══════════════════════════════════════════════ */
function initForm() {
  const form = document.getElementById('register-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const phoneInput = document.getElementById('form-phone');
  const emailInput = document.getElementById('form-email');
  const modal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Helpers
  const showError = (input, errId) => {
    input.classList.add('error');
    input.classList.remove('success');
    const errEl = document.getElementById(errId);
    if (errEl) errEl.classList.add('show');
  };

  const clearError = (input, errId) => {
    input.classList.remove('error');
    input.classList.add('success');
    const errEl = document.getElementById(errId);
    if (errEl) errEl.classList.remove('show');
  };

  const validateName = () => {
    const val = nameInput.value.trim();
    if (val.length < 2) { showError(nameInput, 'error-name'); return false; }
    clearError(nameInput, 'error-name');
    return true;
  };

  const validatePhone = () => {
    const val = phoneInput.value.trim().replace(/\s/g, '');
    const phoneRegex = /^(0|\+84)[3-9]\d{8}$/;
    if (!phoneRegex.test(val)) { showError(phoneInput, 'error-phone'); return false; }
    clearError(phoneInput, 'error-phone');
    return true;
  };

  const validateEmail = () => {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) { showError(emailInput, 'error-email'); return false; }
    clearError(emailInput, 'error-email');
    return true;
  };

  // Live validation on blur
  nameInput.addEventListener('blur', validateName);
  phoneInput.addEventListener('blur', validatePhone);
  emailInput.addEventListener('blur', validateEmail);

  // Clear error on input
  [nameInput, phoneInput, emailInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameOk = validateName();
    const phoneOk = validatePhone();
    const emailOk = validateEmail();

    if (!nameOk || !phoneOk || !emailOk) {
      // Scroll to first error
      const firstError = form.querySelector('.form-input.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // Success
    showSuccessModal();
    form.reset();
    [nameInput, phoneInput, emailInput].forEach(input => {
      input.classList.remove('success', 'error');
    });
  });

  // Modal
  function showSuccessModal() {
    if (!modal) return;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function hideSuccessModal() {
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', hideSuccessModal);
  }

  // Close on overlay click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) hideSuccessModal();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
      hideSuccessModal();
    }
  });
}

/* ══════════════════════════════════════════════
   10. NEWSLETTER FORM
══════════════════════════════════════════════ */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  const emailInput = document.getElementById('newsletter-email');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(val)) {
      emailInput.style.borderColor = '#E07A5F';
      emailInput.focus();
      return;
    }

    // Simulate success
    emailInput.style.borderColor = '#4A7C59';
    emailInput.value = '';
    const btn = form.querySelector('.newsletter-btn');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i>';
      btn.style.background = '#4A7C59';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
        btn.style.background = '';
        emailInput.style.borderColor = '';
      }, 3000);
    }
  });
}

/* ══════════════════════════════════════════════
   11. SCROLL TO TOP
══════════════════════════════════════════════ */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
