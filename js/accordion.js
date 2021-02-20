$(".accordion .question").click(function(){

  if(!$(this).hasClass('opened')){
    $(".accordion .question").removeClass('opened');
    $(this).addClass('opened');
  }
});