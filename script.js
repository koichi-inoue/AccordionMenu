$(function(){

  $("#MenuButton").click( function(){
    $("#MenuList").slideToggle();
  });

  $("ul.subs").hide();

  $("ul.main").click(function(){
    $("ul.subs").slideUp();
      if($("+ul",this).css("display")=="none"){
        $("+ul",this).slideDown();
      }
  });

});
