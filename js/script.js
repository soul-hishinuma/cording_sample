$(function(){

    // common
  (function() {
    var $header = $( '#js-header' );
    
    // navigation
    $( '#js-toggle' ).on( 'click', function(e) {
      e.preventDefault();
      $header.toggleClass( 'add-active' );
    });
    
    $( '.js-navLink, #js-overlay' ).on( 'click', function(e) {
      e.preventDefault();
      $header.removeClass( 'add-active' );
    });

    var pcWidth = window.matchMedia( 'screen and (min-width: 769px)' );
    function checkBreakPoint() {
      if( pcWidth.matches ) {
        $header.removeClass( 'add-active' );
      }
    }
    pcWidth.addListener( checkBreakPoint );
    checkBreakPoint();


    // smooth scroll
    $( 'a[href^="#"]' ).on( 'click', function(e){
      var speed = 500;
      var href= $( this ).attr( 'href' );
      var target = $( href === '#' || href === '' ? 'html' : href );
      var position = target.offset().top - $header.outerHeight();
      $( 'html, body' ).animate( { scrollTop:position }, speed, 'swing' );
      e.preventDefault();
    });

    // header
    $( window ).on( 'scroll', function() {
      if( $( this ).scrollTop() > $( '#js-hero' ).outerHeight() ) {
        $( 'body' ).addClass( 'add-scrolled' );
      } else {
        $( 'body' ).removeClass( 'add-scrolled' );
      }
    });
  })();

    // results
    new Swiper( '.swiper-container', {
      speed: 400,
      spaceBetween: 40,
      width: 422,
      loop: true,
      loopedSlides: 6,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        }
      }
    });

    // faq
  $( '.js-faq' ).on( 'click', function() {
    $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
    $( this ).toggleClass( 'add-active' );
  });

})