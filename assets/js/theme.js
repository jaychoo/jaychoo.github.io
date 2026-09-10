// Wires up the nav's day/night toggle button. Pairs with the blocking
// inline script in <head> that applies the saved/system theme before
// first paint (see the snippet duplicated at the top of each page).
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
