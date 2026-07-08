(() => {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- Preloader ---------------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('is-hidden'), 400);
  });
  // Safety fallback in case 'load' fires slowly / assets missing
  setTimeout(() => preloader.classList.add('is-hidden'), 3000);

  /* ---------------- Custom cursor ---------------- */
  const cursor = document.getElementById('cursor');
  const hasFinePointer = window.matchMedia('(pointer:fine)').matches;
  if (hasFinePointer) {
    const dot = cursor.querySelector('.cursor__dot');
    const ring = cursor.querySelector('.cursor__ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function loop(){
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, input, select, textarea, .accordion__q').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  } else {
    cursor.style.display = 'none';
  }

  /* ---------------- Sticky header ---------------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  };
  document.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- Mobile nav ---------------- */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------------- Animated counters ---------------- */
  const counters = document.querySelectorAll('[data-count], [data-decimal]');
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countIo.unobserve(el);
      const isDecimal = el.hasAttribute('data-decimal');
      const target = parseFloat(el.dataset.count ?? el.dataset.decimal);
      const suffix = el.dataset.suffix ?? '';
      const duration = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = target * eased;
        el.textContent = isDecimal ? value.toFixed(1) : Math.round(value) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => countIo.observe(el));

  /* ---------------- Accordion ---------------- */
  document.querySelectorAll('.accordion__item').forEach(item => {
    const q = item.querySelector('.accordion__q');
    const a = item.querySelector('.accordion__a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.accordion__item').forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.accordion__a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('is-open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------------- Toast ---------------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message){
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
  }

  /* ---------------- Booking form -> Telegram ---------------- */
  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    const lines = [
      'Здравствуйте! Хочу забронировать Abay Dacha.',
      `Имя: ${data.name}`,
      `Телефон: ${data.phone}`,
      `Заезд: ${data.checkin || '—'}`,
      `Выезд: ${data.checkout || '—'}`,
      `Гостей: ${data.guests}`,
      data.comment ? `Комментарий: ${data.comment}` : null
    ].filter(Boolean).join('\n');

    const url = 'https://t.me/timenub?text=' + encodeURIComponent(lines);
    showToast('Открываем Telegram с готовой заявкой…');
    window.open(url, '_blank', 'noopener');
    form.reset();
  });

  /* ---------------- Back to top ---------------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------- Hero float parallax ---------------- */
  const floats = document.querySelectorAll('.hero__float');
  const hero = document.getElementById('hero');
  if (hasFinePointer && hero) {
    hero.addEventListener('mousemove', (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 18;
      const y = (e.clientY / h - 0.5) * 18;
      floats.forEach((el, i) => {
        const factor = i % 2 === 0 ? 1 : -1;
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }

  /* ---------------- Min checkout date follows checkin ---------------- */
  const checkin = document.getElementById('f-checkin');
  const checkout = document.getElementById('f-checkout');
  const today = new Date().toISOString().split('T')[0];
  checkin.min = today;
  checkin.addEventListener('change', () => {
    checkout.min = checkin.value;
    if (checkout.value && checkout.value < checkin.value) checkout.value = checkin.value;
  });
})();
