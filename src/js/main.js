window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ===================== UTILITIES =====================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// ===================== NAVBAR: shrink on scroll + position indicator =====================
const nav = $('#navbar');
const links = $$('.nav-link');
const sections = ['#hero', '#why-vectorfind', '#how-it-works', '#use-cases', '#capabilities', '#demo', '#contact']
  .map(id => $(id))
  .filter(Boolean);
let lastActive = null;

function updateNavResize() {
  if (!nav) return;
  const shrink = window.scrollY > 8;
  nav.classList.toggle('shrink', shrink);
}


function updateActiveLink() {
  if (!nav || sections.length === 0) return;
  // We set active based on the section just below the bottom of the nav bar.
  const navBottom = nav.getBoundingClientRect().bottom + window.scrollY;
  let active = sections[0].id;

  const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

  if (isAtBottom) {
    active = sections[sections.length - 1].id;
  } else {
    for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (top <= navBottom + 4) {
          active = sec.id;
        }
      }
  }

  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
  lastActive = active;
}

function onScroll() {
  updateNavResize();
  updateActiveLink();
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', () => {
  // set current year
  $('#year').textContent = new Date().getFullYear();
  onScroll();
});

// ===================== SMOOTH SCROLLING (for browsers without CSS smooth) =====================
links.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = $(a.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===================== CAROUSEL =====================
let currentSlide = 0;
const totalSlides = 3;

// Make changeSlide globally accessible
window.changeSlide = function(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  const slidesContainer = document.getElementById('carouselSlides');
  if (slidesContainer) {
    slidesContainer.style.transform = `translateX(-${currentSlide * 33.333}%)`;
  }
}

// ===================== MODALS =====================
function openModal(el) {
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(el) {
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$$('[data-modal]').forEach(el => {
  el.addEventListener('click', () => {
    const modal = $(el.getAttribute('data-modal'));
    if (modal) openModal(modal);
  });
});

$$('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
      closeModal(modal);
    }
    if (e.key === 'Escape') closeModal(modal);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    $$('.modal.open').forEach(closeModal);
  }
});
