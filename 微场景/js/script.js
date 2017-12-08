
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    //autoplay: {
    //    delay: 3000,//5秒切换一次
    //},

    navigation: {
        nextEl: '.swiper-button-next',
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

//   swiper4 animate里的 js插件代码
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

