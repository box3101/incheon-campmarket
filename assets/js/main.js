$(function () {
  new WOW().init();

  (function () {
    // 슬라이드
    function slideItem() {

      var slideSetting = {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        // watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        loop: true,
        // loopedSlides:1,
        speed: 2000,
        autoplay: {
          // 자동 슬라이드 설정 , 비 활성화 시 false
          delay: 2000, // 시간 설정
          disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        effect:'fade',

        navigation: {
          // 버튼 사용자 지정
          nextEl: ".visual-btn-next",
          prevEl: ".visual-btn-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },

        breakpoints: { //반응형 조건 속성
          1200:{
            slidesPerView: 1,
          },
        }
      };

      const mainSlide = new Swiper("#visual-slide", slideSetting);

    }

    function fancyboxGallery(){
      // Fancybox.bind('[data-fancybox="gallery"]', {
      //   dragToClose: false,
      
      //   Toolbar: false,
      //   closeButton: "top",
      
      //   Image: {
      //     zoom: false,
      //   },
      
      //   on: {
      //     initCarousel: (fancybox) => {
      //       const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
      
      //       fancybox.$container.style.setProperty(
      //         "--bg-image",
      //         `url("${slide.$thumb.src}")`
      //       );
      //     },
      //     "Carousel.change": (fancybox, carousel, to, from) => {
      //       const slide = carousel.slides[to];
      
      //       fancybox.$container.style.setProperty(
      //         "--bg-image",
      //         `url("${slide.$thumb.src}")`
      //       );
      //     },
      //   },
      // });
    }

    function init() {
      slideItem(); //슬라이드 모음
      fancyboxGallery(); // fancy 팝업 슬라이드
    }

    init();
  })();

});
