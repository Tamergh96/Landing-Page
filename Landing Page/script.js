  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.navigation_list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
  });