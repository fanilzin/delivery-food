const cartButton = document.querySelector('#cart-button-js');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', function (even) {
	modal.classList.add("is-open");
});

close.addEventListener('click', function (even) {
	modal.classList.remove("is-open");
});

new WOW().init();