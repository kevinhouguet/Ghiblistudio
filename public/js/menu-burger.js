const menuBurgerElem = document.body.querySelector('#menu-burger');
menuBurgerElem.addEventListener('click', (event) => {
  const menuContentElem = document.body.querySelector(".main-menu");
  menuContentElem.classList.toggle('disable');
});
