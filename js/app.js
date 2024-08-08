document.querySelectorAll('.slider').forEach((elem, index) => {
    window[`slider${index + 1}`] = new Swiper(elem, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -120
    });
})
// Зв'язуємо всі слайдери в один
bindSwipers(slider1, slider2, slider3, slider4)