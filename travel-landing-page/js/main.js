(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if ( window.pageYOffset > 50 ) {
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    };
}());