var scrWidth = $(window).width();

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $('.back-to-top').addClass('shown');
  } else {
    $('.back-to-top').removeClass('shown');
  }
}

window.onscroll = function() {scrollFunction()}

$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top - 20;

  $("body, html").animate({
    scrollTop: position
  }, 700);
});

$('.navbar a').click(function () {
  if (scrWidth < 992) {
    $('.navbar-toggler').click();
  }
});
