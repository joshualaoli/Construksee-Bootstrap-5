$(document).ready(function(){
    // Hero Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        items: 1,
        smartSpeed : 800,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    // Project Slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        margin: 24,
        navText: ['Prev','Next' ],
        smartSpeed : 800,
        responsive:{
            0:{
                items:1,
                nav: false,
                margin: 0.1,
            },
            768: {
                items:2,
            },
            1140: {
                items: 2,
                center: true,
                dots:true, 
            }
        }
    })

    // Reviews Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
    })
})