// 轮播图 切换图片
var mySwiper_vague = new Swiper('#mySwiper_vague', {
    loop: true, // 循环模式选项
});

// 轮播图 切换图片
var mySwiper = new Swiper('#mySwiper', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // control:{mySwiper_vague}
});


mySwiper.controller.control = mySwiper_vague  
// mySwiper.params.control = mySwiper_vague;//需要在Swiper2初始化后，Swiper1控制Swiper2