"use strict"

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
	headerTablet.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		headerTablet.classList.toggle('_active');
		headerBody.classList.toggle('_active');
	});
}


//dynamic ul-li

const list = ["Powerfull online protection.", "Internet without borders.", "Supercharged VPN.", "No specific time limits."];
    const listElements = document.getElementById('info__items');
    listElements.innerHTML = `${list.map(element => `<li class="info__item">${element}</li>`).join('')}`;
    
    
//footer accordion menu

const spollersArray = document.querySelectorAll("[data-spollers]");
    if (spollersArray.length > 0) {
        const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
            return !item.dataset.spollers.split(",")[0];
        });
        if(spollersRegular.length > 0) {
            initSpollers(spollersRegular);
        }
        const spollersMedia = Array.from(spollersArray).filter(function(item, index, self) {
            return item.dataset.spollers.split(",")[0];
        });

        if(spollersMedia.length > 0) {
            const breakpointsArray = [];
            spollersMedia.forEach(item => {
                const params = item.dataset.spollers;
                const breakpoint = {};
                const paramsArray = params.split(",");
                breakpoint.value = paramsArray[0];
                breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            });
            
            let mediaQueries = breakpointsArray.map(function(item) {
                return '(' + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
            });
            
            mediaQueries = mediaQueries.filter(function(item, index, self){
                return self.indexOf(item) === index;
            });

            mediaQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                
                const spollersArray = breakpointsArray.filter(function(item) {
                    if (item.value === mediaBreakpoint && item.type ===mediaType){
                        return true;
                    }
                });

                matchMedia.addListener(function () {
                    initSpollers(spollersArray, matchMedia);
                });
                initSpollers(spollersArray, matchMedia);
            });
        }
        
        // * initialization *

        function initSpollers(spollersArray, matchMedia = false) {
            spollersArray.forEach(spollersBlock => {
                spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                if (matchMedia.matches || !matchMedia) {
                    spollersBlock.classList.add("_init");
                    initSpollerBody(spollersBlock);
                    spollersBlock.addEventListener("click", setSpollerAction);
                } else {
                    spollersBlock.classList.remove ("_init");
                    initSpollerBody(spollersBlock, false);
                    spollersBlock.removeEventListener ("click", setSpollerAction);
                }
            });
        }
        function initSpollerBody(spollersBlock, hideSpollerBody = true) {
            const spollerTitles = spollersBlock.querySelectorAll('[data-spoller');
                if (spollerTitles.length > 0) {
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute('tabindex');
                            if (!spollerTitle.classList.contains('_active')){
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute('tabindex', '-1');
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.hasAttribute ('data-spoller') || el.closest('[data-spoller]')) {
                    const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest ('[data-spoller]');
                    const spollersBlock =spollerTitle.closest ('[data-spollers]');
                    const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
                    if (!spollersBlock.querySelectorAll('._slide').length) {
                        hideSpollerBody(spollersBlock);
                    }
                    spollerTitle.classList.toggle('_active');
                    _slideToggle(spollerTitle.nextElementSibling, 500);
                }
                e.preventDefault();
            }
        }
        function hideSpollerBody (spollerBlock) {
            const spollerActiveTitle  = spollerBlock.querySelector('[data-spoller]._active');
            if (spollerActiveTitle) {
                spollerActiveTitle.classList.remove('_active');
                _slideUp(spollerActiveTitle.nextElementSibling, 500);
            }
        }


/* SLIDE UP */
let _slideUp = (target, duration = 500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }
}
/* SLIDE DOWN */
let _slideDown = (target, duration = 500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide');
    if (target.hidden) {
        target.hidden = false;
    }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }
}
/* TOOGLE */
let _slideToggle = (target, duration = 500) => {
    if (target) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}