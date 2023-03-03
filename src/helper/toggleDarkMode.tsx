const toggleDarkMode = () => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark');
  console.log('clicked');
};

export default toggleDarkMode;
