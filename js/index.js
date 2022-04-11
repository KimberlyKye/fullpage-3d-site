const burger = document.querySelector('.burger');
const container = document.querySelector('.container');

burger.addEventListener('click', () => {
  container.classList.toggle('active');
});
