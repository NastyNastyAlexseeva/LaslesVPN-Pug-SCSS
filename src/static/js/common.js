jQuery(function() {

})

const swiper = new Swiper('.swiper', {

    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    slidesPerView: 2.7,
    spaceBetween: 50,
    slidesPerGroup: 1,

    mousewheel: {
        sensitivity: 1,
    },
    
});
