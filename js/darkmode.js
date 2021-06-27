let darkmode = localStorage.getItem('darkmode') === 'enabled';

const toggleDarkmode = () => {
  darkmode = !darkmode;
  localStorage.setItem('darkmode', darkmode ? 'enabled' : 'disabled');

  updateDarkmode();
};

const updateDarkmode = () => {
  const classList = document.documentElement.classList;

  if (darkmode) classList.add('dark-mode');
  else classList.remove('dark-mode');
};

updateDarkmode();
