(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:786px)' );
  let mySwiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
    return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };
  const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
  })();
  