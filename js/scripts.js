$(document).ready(() => {
    mobileMenuToggle();
});

const mobileMenuToggle = () => {
    $('.nav-toggle').click(() => {
        $('.main-nav').toggleClass('is--open');
        $('.hamburger').toggleClass('is--open');
    });
}