// toggle_dark.js
(function () {
  const ready = fn => (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);

  ready(() => {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;

    // Resolve preference: stored choice wins, otherwise follow OS
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = saved === 'dark' || (saved === null && prefersDark);

    if (useDark) {
      document.body.classList.add('changeTheme');
      btn.classList.remove('fa-moon');
      btn.classList.add('fa-sun');
    } else {
      document.body.classList.remove('changeTheme');
      btn.classList.remove('fa-sun');
      btn.classList.add('fa-moon');
    }

    // Toggle + persist on click
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('changeTheme');
      btn.classList.toggle('fa-sun', isDark);
      btn.classList.toggle('fa-moon', !isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
})();
