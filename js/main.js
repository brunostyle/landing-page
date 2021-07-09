// MENU
let menu = document.getElementById('menu'),
    btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', () =>  {
    menu.classList.toggle('active');
});

let list = document.querySelectorAll('.header__item');
list.forEach(item => {
    item.addEventListener('click', () => {
        list.forEach(element => {
            element.classList.remove('active');
            item.classList.add('active');
            menu.classList.remove('active');
        });
    })
});

// TESTIMONIALS

let swiper = new Swiper('.testimonials__container', {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: true,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      510: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3
      }
    }
});

// DARK MODE 
let btnTheme = document.getElementById('switch');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    btnTheme.classList.toggle('active');

    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('light-mode', 'true');
    } else {
        localStorage.setItem('light-mode', 'false');
    }
    menu.classList.remove('active');
});

if (localStorage.getItem('light-mode') === 'true') {
    document.body.classList.add('light-theme');
    btnTheme.classList.add('active');
} else {
    document.body.classList.remove('light-theme');
    btnTheme.classList.remove('active');
}

