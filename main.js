const MENU_LINKS = document.querySelectorAll('.header__menu-link');

MENU_LINKS.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault();

    document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    })
}))

const HERO__DOTS = document.querySelectorAll('.hero__dot');
const HERO__IMAGE = document.querySelector('.hero__image');
const HERO__TITLE = document.querySelector('.hero__title');
const HERO__SUBTITLE = document.querySelector('.hero__subtitle');

const TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов',
];

const SUBTITLE = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов',
];


HERO__DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
    HERO__DOTS.forEach(item => {
        item.classList.remove('active');
    });
    dot.classList.add('active');

    HERO__IMAGE.src = 'assets/hero_' + (index+1) + '.jpg';
    HERO__TITLE.textContent = TITLES[index];
    HERO__SUBTITLE.textContent = SUBTITLE[index];

}) );