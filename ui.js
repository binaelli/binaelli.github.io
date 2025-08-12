// ui.js
(function () {
  // C. Micro-prompts: enable tap to show hint on touch devices
  document.addEventListener('click', function (e) {
    const el = e.target.closest('.has-hint');
    if (!el) return;
    el.classList.add('hint-active');
    window.setTimeout(() => el.classList.remove('hint-active'), 1600);
  });

  // D. Breadcrumb: If scene name present, ensure current crumb reflects it
  const sceneName = document.body?.dataset?.scene || (document.querySelector('meta[name="scene-name"]')?.content);
  if (sceneName) {
    const current = document.querySelector('.crumbs .current');
    if (current) current.textContent = sceneName;
  }

  // G. All Scenes: expand-on-tap cards for details
  const cards = document.querySelectorAll('.scene-card');
  cards.forEach(card => {
    function toggle(open) {
      const isOpen = open ?? !card.classList.contains('open');
      card.classList.toggle('open', isOpen);
      card.setAttribute('aria-expanded', String(isOpen));
    }
    card.addEventListener('click', (e) => {
      // Don’t toggle when clicking the explicit link
      if (e.target.closest('.card-link')) return;
      toggle();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();
