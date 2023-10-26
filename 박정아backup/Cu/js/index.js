
    var element = document.getElementsByClassName("swiper-slide");
    // element.style.width = "680px";


    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 60,
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper2-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }      
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        slidesPerGroup : 2,
        spaceBetween: 20,
        loop:true,
        centeredSlides: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 4,
                slidesPerGroup : 4,
                spaceBetween: 20,
                loop:true,
                centeredSlides: false,
            },
            1280:{
                slidesPerView: 5,
                slidesPerGroup : 5,
                spaceBetween: 20,
                loop:true,
                centeredSlides: false,
            },
        }
    });

    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        slidesPerGroup : 2,
        spaceBetween: 20,
        loop:true,
        centeredSlides: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper3-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 4,
                slidesPerGroup : 4,
                spaceBetween: 20,
                loop:true,
                centeredSlides: false,
            },
            1280:{
                slidesPerView: 7,
                slidesPerGroup : 4,
                spaceBetween: 20,
                loop:true,
                centeredSlides: false,
            },
        }
    });




