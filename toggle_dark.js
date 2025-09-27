// toggle_dark.js
(function () {
  // Elements
  const ready = fn => (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);

  ready(() => {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;

    // 1) Apply saved preference on load
    const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
    if (saved === 'dark') {
      document.body.classList.add('changeTheme');
      btn.classList.remove('fa-moon');
      btn.classList.add('fa-sun');
    } else {
      document.body.classList.remove('changeTheme');
      btn.classList.remove('fa-sun');
      btn.classList.add('fa-moon');
    }

    // 2) Toggle + persist on click
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('changeTheme');
      btn.classList.toggle('fa-sun', isDark);
      btn.classList.toggle('fa-moon', !isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
})();
