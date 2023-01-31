const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');




const handleNavMobile = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}

navBtn.addEventListener('click', handleNavMobile);

const bodyHidden = () => {
if (navMobile.classList.contains('nav-mobile--active'))
{
    body.style.overflow = 'hidden';}
    else if (!navMobile.classList.contains('nav-mobile--active')) {
        body.style.overflow = 'auto'
    }
}

navBtn.addEventListener('click', bodyHidden)

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();