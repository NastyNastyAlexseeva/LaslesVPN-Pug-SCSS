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

// burger

const headerTablet = document.querySelector('.header__tablet');
const headerBody = document.querySelector('.header__body');
if (headerTablet) {
	headerTablet.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerTablet.classList.toggle('_active');
		headerBody.classList.toggle('_active');
	});
}
