let navEnabled = false;

const toggleNav = () => {
  navEnabled = !navEnabled;

  const nav = document.querySelector('main-nav');
  const classList = nav.classList;

  if (navEnabled) classList.add('enabled');
  else classList.remove('enabled');
};
