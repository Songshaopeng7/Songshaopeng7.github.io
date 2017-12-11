
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

//音频标签；
var mp3 = document.querySelector("#mp3");

//音乐按钮
var mp3Btn = document.querySelector("#mp3Btn");

mp3Btn.onclick = function(){
    if (mp3.paused) {
        //开始旋转
        mp3Btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        mp3Btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
}

