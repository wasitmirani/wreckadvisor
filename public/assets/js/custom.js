jQuery( document ).ready(function($) {
      jQuery("#slider-id").slick({
        autoplay: true,
        arrows:false,
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        autoplay:false,
        fade: true,
        speed: 300,
        infinite: true,
        cssEase: 'cubic-bezier(1, 0, 1, 1)',
        touchThreshold: 100,
        customPaging : function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a>0'+(i+1)+'</a>';
        // customPaging : function(slider, i) {
        // var thumb = $(slider.$slides[i]).data();
        // return '<a class="dot">'+0+i+'</a>';
        },
        responsive: [{
        breakpoint: 500,
        settings: {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
        }
        }]
        });
      });