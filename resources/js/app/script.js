import jquery from "jquery";
import Flickity from 'flickity';
import ScrollReveal from 'scrollreveal';
import 'flickity/dist/flickity.css';
import IMask from 'imask';

window.jQuery = window.$ = jquery;

require('jquery-viewport-checker');
require('@fancyapps/fancybox');


(function () {

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        $(this).toggleClass('active');
        menu.slideToggle().css('display', 'flex');
    });

    /**
     * Scroll
     */
    $(".scroll-link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        if (id.length > 1) {
            var top = ($(id).offset().top - $('#app-header').height());

            $('body,html').animate({
                scrollTop: top
            }, 500);
        }
    });

    /**
     * Phone mask
     * @type {*|jQuery.fn.init|jQuery|HTMLElement}
     */
    const phones = $('[type="tel"]');
    Array.from(phones).forEach(phone => {
        new IMask(phone, {
            mask: '+{1} (000) 000-0000'
        });
    });

    /**
     * Modal
     */
    var connectModal = $('.custom-modal--connect');
    var closeModal = $('.close-modal');
    var modalMask = $('.modal-mask');

    $('.open-connect').on('click', function (e) {
        e.preventDefault();
        $(connectModal).addClass('active');
        $(modalMask).addClass('active');
    });

    $(closeModal).on('click', function () {
        $(connectModal).removeClass('active');
        $(modalMask).removeClass('active');
    });

    $(modalMask).on('click', function () {
        $(connectModal).removeClass('active');
        $(modalMask).removeClass('active');
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode === 27) {
            if ($(connectModal).lenght > 0) {
                $(connectModal).removeClass('active');
                $(orderModal).removeClass('active');
                $(modalMask).removeClass('active');
            }
        }
    });

    /**
     * Sliders
     */
    if ($('.portfolio-slider--main')) {

        let elem1 = document.querySelector('.portfolio-slider--main');
        if (elem1) {

            const flkty1 = new Flickity(elem1, {
                prevNextButtons: false,
                pageDots: false,
                contain: true,
                draggable: false,
                wrapAround: true,
                autoPlay: 5000,
                pauseAutoPlayOnHover: true,
                on: {
                    change: function (index) {
                        document.querySelector('.slider-count-index--portfolioMain').innerHTML = `0${index + 1}`.slice(-2);
                    }
                }
            });

            let prevArrowIntro = document.querySelector('.slider-nav-arrow-item--prev--portfolioMain');

            prevArrowIntro.addEventListener('click', function () {
                flkty1.previous(false, false);
            });

            let nextArrowIntro = document.querySelector('.slider-nav-arrow-item--next--portfolioMain');

            nextArrowIntro.addEventListener('click', function () {
                flkty1.next(false, false);
            });


            document.querySelector('.slider-count-last--portfolioMain').innerHTML = `0${flkty1.getCellElements().length}`.slice(-2);
        }
    }

    if ($('.review-slider-main')) {
        let elem2 = document.querySelector('.review-slider-main');
        if (elem2) {
            const flkty2 = new Flickity(elem2, {
                cellAlign: 'left',
                prevNextButtons: false,
                pageDots: false,
                contain: true,
                draggable: false,
                wrapAround: true,
                autoPlay: 5000,
                pauseAutoPlayOnHover: true,
                on: {
                    change: function (index1) {
                        document.querySelector('.slider-count-index--portfolioMain').innerHTML = `${index1 + 1}`.slice(-1);
                    }
                }
            });

            let prevArrowIntro1 = document.querySelector('.slider-nav-arrow-item--prev--portfolioMain');

            prevArrowIntro1.addEventListener('click', function () {
                flkty2.previous(false, false);
            });

            let nextArrowIntro1 = document.querySelector('.slider-nav-arrow-item--next--portfolioMain');

            nextArrowIntro1.addEventListener('click', function () {
                flkty2.next(false, false);
            });


            document.querySelector('.slider-count-last--portfolioMain').innerHTML = `${flkty2.getCellElements().length}`.slice(-1);
        }
    }


    /**
     * Animate intro
     */
    $(document).ready(() => {
        $('#intro').addClass('start-animate');
        setTimeout(() => {
            $('#intro').addClass('finish-animate');
            ScrollReveal().reveal('.intro-item', {
                origin: 'left',
                delay: 100,
                distance: '500px',
            });
            ScrollReveal().reveal('.intro-image', {
                origin: 'right',
                delay: 200,
                distance: '500px',
            });
        }, 100)
    });

    /**
     * Parallax for mouse
     */
    let currentX = '';
    let currentY = '';
    let movementConstant = .015;
    let movementConstant2 = .025;
    $(document).mousemove(function (e) {
        if (currentX === '') currentX = e.pageX;
        let xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY === '') currentY = e.pageY;
        let ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('.decor-cloud--1').each(function (i, el) {
            let movement = (i + 1) * (xdiff * movementConstant);
            let movementy = (i + 1) * (ydiff * movementConstant);
            let newX = $(el).position().left + movement;
            let newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY + 'px');
        });
        $('.decor-cloud--2').each(function (i, el) {
            let movement2 = (i + 2) * (xdiff * movementConstant2);
            let movementy2 = (i + 2) * (ydiff * movementConstant2);
            let newX2 = $(el).position().left + movement2;
            let newY2 = $(el).position().top + movementy2;
            $(el).css('left', newX2 + 'px');
            $(el).css('top', newY2 + 'px');
        });
    });

    /**
     * Animate scroll
     */
    $('.advantages-item').viewportChecker({
        classToAdd: 'start-animation'
    });
    $('.feedback').viewportChecker({
        classToAdd: 'start-animation',
        offset: 500
    });
    $('#about').viewportChecker({
        classToAdd: 'start-animation',
        offset: 500
    });
    $('#blog .description-section').viewportChecker({
        classToAdd: 'start-animation',
    });
    $('#review .description-section').viewportChecker({
        classToAdd: 'start-animation',
    });
    // $('.article-blog').viewportChecker({
    //     classToAdd: 'start-animation',
    // });
    /*$('.blog-card').viewportChecker({
        classToAdd: 'start-animation',
    });
    $('.portfolio-gallery-item').viewportChecker({
        classToAdd: 'start-animation',
    });*/

    ScrollReveal().reveal('.blog-card', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
    });
    ScrollReveal().reveal('#portfolio-main', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
    });
    ScrollReveal().reveal('.advantages-item', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
    }, 200);
    ScrollReveal().reveal('.about-item .content', {
        origin: 'right',
        delay: 400,
        distance: '200px',
    }, 200);
    ScrollReveal().reveal('.blog-item', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
    });

    ScrollReveal().reveal('.portfolio-slider--secondary', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
    }, 200);
    ScrollReveal().reveal('#page-thanks .decor-list li', {
        origin: 'bottom',
        delay: 400,
        distance: '200px',
        interval: 200,
    });

})(jQuery);