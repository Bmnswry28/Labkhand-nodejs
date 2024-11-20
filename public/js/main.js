AOS.init();



// پزشک ها

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    //   slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    speed: 800,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });