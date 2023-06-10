/*JS SERVICES*/
let swiperService = new Swiper(".slide-content-service", {
   slidesPerView: 3,
   spaceBetween: 40,
   loop:true,
   centerSlide:true,
   fade:true,
   autoplay:true,
   autoplayTimeout:1000,
   autoplayHoverPause:true,
   effect:"coverflow" ,
   grabCursor:true,
   coverflowEffect:{
       rotate:0,
       stretch:0,
       depth:0,
       modifier:1,
       slideShadows: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
     
   },
   navigation:{
       nextEl:".swiper-button-next",
       prevEl:".swiper-button-prev",
   },
   

  breakpoints:{
        0:{
           slidesPerView: 1,
        },
        520:{
           slidesPerView: 2,
        },
        950:{
           slidesPerView: 3,
        },
        1240:{
           slidesPerView: 4,
        },
        3340:{
           slidesPerView: 5,
        },
  },

 });


/*JS TEAM*/
let swiper = new Swiper(".slide-content-team", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop:true,
    centerSlide:true,
    fade:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    effect:"coverflow" ,
    grabCursor:true,
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:0,
        modifier:1,
        slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    

   breakpoints:{
         0:{
            slidesPerView: 1,
         },
         520:{
            slidesPerView: 2,
         },
         950:{
            slidesPerView: 3,
         },
         1240:{
            slidesPerView: 4,
         },
         3340:{
            slidesPerView: 5,
         },
   },

  });

  


