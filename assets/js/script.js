/*=== Javascript function indexing hear===========
1. Preloader ----------- (Loadin For Full Site)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.Scroll To Top  ------- (back to top)
6.Mobile Menu ----------- (This is a menu for mobile device)
7. Inline Css ------------- (This use mainly for write inline css)
==================================================*/

(function ($, window) {
  "use strict";

  var mtJs = {
    m: function () {
      mtJs.d();
      mtJs.methods();
    },
    d: function () {
      this._window = $(window);
      this._document = $(document);
      this._body = $("body");
      this._html = $("html");
    },
    methods: function () {
      this.inlineCssActivation();
      this.headerSticky();
      this.wowAnimationActivation();
      this.swiperActivation();
      this.mobileMenuActivation();
      this.scrollTopIcon();
      this.sitePreLoader();
    },

    // Start Preloader
    sitePreLoader: function (){
      $(window).on('load', function () {
        $("#td__preloader").delay(500).fadeOut(300);
        $("#td__preloader").delay(500).fadeOut(300);
      });
    },
    // End Preloader

    // Start Scroll To Top
    scrollTopIcon: function (){
      $(document).ready(function (){
        var scrollPath = document.querySelector(".scroll-up path");
        var pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
        var updatescroll = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var scroll = pathLength - (scroll * pathLength) / height;
          scrollPath.style.strokeDashoffset = scroll;
        };
        updatescroll();
        $(window).scroll(updatescroll);
        var offset = 50;
        var duration = 950;
        jQuery(window).on("scroll", function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(".scroll-up").addClass("active-scroll");
          } else {
            jQuery(".scroll-up").removeClass("active-scroll");
          }
        });
        jQuery(".scroll-up").on("click", function (event) {
          event.preventDefault();
          jQuery("html, body").animate(
            {
              scrollTop: 0,
            },
            duration
          );
          return false;
        });
      });
    },
    // End Scroll To Top

    // Start Mobile Menu Activation
    mobileMenuActivation: function () {
      $(document).ready(function () {
        // Sub-menu toggle
        $(".td__mobile-sub-menu-inner a").on("click", function(e) {
          e.preventDefault(); 
          $(".td__mobile-sub-menu").not($(this).next()).slideUp();
          $(".td__mobile-menu-icon").not($(this).find(".td__mobile-menu-icon")).removeClass("rotate");
          $(this).next(".td__mobile-sub-menu").slideToggle();
          $(this).find(".td__mobile-menu-icon").toggleClass("rotate");
        });
    
        // Mobile menu open
        $(".td__mobile-menu-bar-icons").on("click", function (){
          $(".td__mobile-menu").addClass("td__mobile-menu-active");
          $(".td__overlay").addClass("active");  // Show overlay
          $("body").addClass("no-scroll");       // Prevent scrolling
        });
    
        // Mobile menu close via button
        $(".td__mobile-menu-close-btn > a, .td__overlay").on("click", function (){
          $(".td__mobile-menu").removeClass("td__mobile-menu-active");
          $(".td__overlay").removeClass("active");  // Hide overlay
          $("body").removeClass("no-scroll");       // Restore scrolling
        });
      });
    },
    // End Mobile Menu Activation

    // Start Swiper Slide Activation
    swiperActivation: function (){
      
    // Start Hero Home 1 Slider
      $(document).ready (function (){
        var swiper = new Swiper(".td__hero-slider", {
          slidesPerView: 1,
          loop:true,
          speed: 1000,
          parallax: true,
          effect: 'fade',
          pagination: {
            el: ".td__hero-slider-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".td__hero-swiper-button-next",
            prevEl: ".td__hero-swiper-button-prev",
          },
        });
      });
     // End Hero Home 1 Slider

    // Start Barnd Area Home 1
      $(document).ready(function(){
        var swiper = new Swiper(".td__brand-item-slider", {
          slidesPerView: 6,
          breakpoints:{
            1521:{
              slidesPerView:6,
            },
            1200:{
              slidesPerView:5,
            },
            1199:{
              slidesPerView:4,
            },
            991:{
              slidesPerView:4,
            },
            900:{
              slidesPerView:4,
            },
            899:{
              slidesPerView:3,
            },
            700:{
              slidesPerView:3,
            },
            699:{
              slidesPerView:2,
            },
            445:{
              slidesPerView:2,
            },
            444:{
              slidesPerView:1,
            },
            0:{
              slidesPerView:1
            },
          },
        });
      });
    // End Brand Area Home 1

    // Start Our Location Area Home 1
    $(document).ready(function(){
      var swiper = new Swiper(".td__our-location-sliders", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints:{
          992:{
            slidesPerView:3,
          },
          910:{
            slidesPerView:2,
          },
          650:{
            slidesPerView:1,
          },
          0:{
            slidesPerView:1,
          },
        },
        navigation: {
          nextEl: ".td__our-locations-swiper-button-prev",
          prevEl: ".td__our-locations-swiper-button-next",
        },
      });
    });
    // End Our Location Area Home 1
    },
    // Start Wow Animation
    wowAnimationActivation: function (){
      $(document).ready(function(){
        new WOW().init();
      });
    },
    // End Wow Animation

    // Start Header Sticky
    headerSticky: function (){
      $(document).ready(function (){
        $(window).on("scroll", function() {
          var ScrollBarPostion = $(window).scrollTop();
          if (ScrollBarPostion > 100) {
            $(".td__header-area").addClass("td__header-sticky");
          } else {
            $(".td__header-area").removeClass("td__header-sticky");
          }
        })
      })
    },
    // End Header Sticky

    // Start Inline Css Activation
    inlineCssActivation: function (){
      $(document).ready(function(){
        $("[data-background").each(function () {
          $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
          );
        });
      });
    }
    // End Inline Css Activation
  };

  mtJs.m();
})(jQuery, window);
