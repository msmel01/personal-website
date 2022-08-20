// const toggle = document.querySelector(".toggle");
// const nav = document.getElementById("nav");
 
// toggle.addEventListener('click', function() {
//     if (nav.className.match(/\bopen\b/)) {
//         nav.classList.remove('open');
//         toggle.style.transform = 'rotate(0deg)';
//     } else {
//         console.log('here');
//         nav.classList.add('open');
//         toggle.style.transform = 'rotate(90deg)';
//     }
// });

// function resize() {
//     // ensure that collapsed menu style is not applied when window is resized
//     nav.classList.remove('open');
//     toggle.style.transform = 'rotate(0deg)';
// }
// window.onresize = resize;
console.clear();

const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();

