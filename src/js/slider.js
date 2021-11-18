new Swiper('.reviews__slider', {
   // navigator: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   
   grabCursor: true,
   loop: true,
   autoplay: {
      deley: 1000,
      disableOnInteraction: false,
   },
   speed: 800,

   // effect: 'flip',
   // flipEffect: {
   //    slideShadows: false,
   //    limitRotation: true,
   // },
   
   

  
});