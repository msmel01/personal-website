const toggle = document.querySelector(".toggle");
const nav = document.getElementById("nav");
 
toggle.addEventListener('click', function() {
    if (nav.className.match(/\bopen\b/)) {
        nav.classList.remove('open');
        toggle.style.transform = 'rotate(0deg)';
    } else {
        console.log('here');
        nav.classList.add('open');
        toggle.style.transform = 'rotate(90deg)';
    }
});

function resize() {
    // ensure that collapsed menu style is not applied when window is resized
    nav.classList.remove('open');
    toggle.style.transform = 'rotate(0deg)';
}
window.onresize = resize;
