$(function(){

  // Intialize
  $(".menu").hide();
  $(".menu-child").hide();
  $('.menu>li').has('.menu-child').append('<a href="#" class="dropButton"></a>');
  $(".dropButton").addClass('isClosed');

  // Toggle navButton
  $(".navButton").click( function(){
    $(".menu").slideToggle();
  });

  // Toggle dropButton
  $(".dropButton").click( function() {

    if( $(this).hasClass('isClosed')) {

      $(this).removeClass('isClosed');
      $(this).addClass('isOpen');
      $(this).prev(".menu-child").slideDown(500);

      $(".dropButton").not(this).removeClass('isOpen');
      $(".dropButton").not(this).addClass('isClosed');
      $(".dropButton").not(this).prev(".menu-child").slideUp(500);

    } else {

      $(this).removeClass('isOpen');
      $(this).addClass('isClosed');
      $(this).prev(".menu-child").slideUp(500);

    }
  });

});
