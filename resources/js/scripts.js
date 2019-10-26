$(document).ready(function() {
   /* for fixed nav */ 
$('.js-section-features').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('fixed');
    }else {
        $('nav').removeClass('fixed');
    }
}, {
    offset: '60px;'
  });

/*scroll on buttons */
$('.js-scroll-to-start').click(function(){
  $('html,body').animate({scrollTop: $('.section-header').offset().top}, 1000);
});


$('.js-scroll-to-about').click(function(){
  $('html,body').animate({scrollTop: $('.section-about').offset().top}, 1000);
});

$('.js-scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
});





/* nav scroll */

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  

  /* animations on scroll */

    $('.js-wp-1').waypoint(function (direction){
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    

    $('.js-wp-2').waypoint(function (direction){
        $('.js-wp-2').addClass('animated fadeInLeft');
        
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function (direction){
        $('.js-wp-3').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    $('.js-wp-4').css('opacity', 0);
    $('.js-wp-4').waypoint(function (direction){
        $('.js-wp-4').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    $('.js-wp-5').css('opacity', 0);
    $('.js-wp-5').waypoint(function (direction){
    $('.js-wp-5').addClass('animated fadeInLeft'); 
  }, {
      offset: '50%'
  });
  $('.js-wp-6').css('opacity', 0);
  $('.js-wp-6').waypoint(function (direction){
    $('.js-wp-6').addClass('animated fadeIn');
}, {
    offset: '70%'
});

$('.js-wp-7').css('opacity', 0);
    $('.js-wp-7').waypoint(function (direction){   
      $('.js-wp-7').addClass('animated fadeInLeft');   
  }, {
      offset: '50%'
  });

  $('.js-wp-8').css('opacity', 0);
    $('.js-wp-8').waypoint(function (direction){
      $('.js-wp-8').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });
  
  $('.js-wp-9').css('opacity', 0);
  $('.js-wp-9').waypoint(function (direction){
      $('.js-wp-9').addClass('animated fadeInLeft');
  }, {
      offset: '50%'
  });

  $('.js-wp-10').css('opacity', 0);
    $('.js-wp-10').waypoint(function (direction){
        $('.js-wp-10').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js-wp-11').css('opacity', 0);
    $('.js-wp-11').waypoint(function (direction){
        $('.js-wp-11').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js-wp-12').css('opacity', 0);
    $('.js-wp-12').waypoint(function (direction){
        $('.js-wp-12').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.js-wp-13').css('opacity', 0);
    $('.js-wp-13').waypoint(function (direction){
        $('.js-wp-13').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js-wp-14').css('opacity', 0);
    $('.js-wp-14').waypoint(function (direction){
        $('.js-wp-14').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js-wp-15').css('opacity', 0);
    $('.js-wp-15').waypoint(function (direction){
        $('.js-wp-15').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.js-wp-16').css('opacity', 0);
    $('.js-wp-16').waypoint(function (direction){
        $('.js-wp-16').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    /* -----mobile nav-------*/

    $('.js-nav-icon').click(function(){
        const nav = $('.js-main-nav');
        const icon = $('.js-nav-icon i');

        nav.slideToggle(200);
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times-circle');
            icon.removeClass('fa-bars');
        } else {
            icon.removeClass('fa-times-circle');
            icon.addClass('fa-bars');
        }
    

    });
   

    
});





/* 
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})

*/