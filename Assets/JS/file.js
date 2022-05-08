let menu_btn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu_btn.addEventListener("click", () => {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');

if(window.scrollY > 0)
{
    header.classList.add('active');
}

else
{
    header.classList.remove('active');
}
}