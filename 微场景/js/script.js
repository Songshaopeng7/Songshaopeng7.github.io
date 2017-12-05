
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay: 3000,//5秒切换一次
    },

    navigation: {
        nextEl: '.swiper-button-next',
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
