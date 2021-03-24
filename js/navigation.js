var scrWidth = $(window).width();

$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top - 20;

  $("body, html").animate(
    {
      scrollTop: position,
    },
    700
  );
});

$(".navigation .nav-links a").click(function () {
  if (scrWidth < 992) {
    $(".hamburger").click();
  }
});

$(".navigation .navbar-btn").click(function () {
  if (scrWidth < 992) {
    $(".hamburger").click();
  }
});

$(".hamburger").click(function () {
  if (!$(".hamburger").hasClass("opened")) {
    $(".hamburger").addClass("opened");
    $(".navigation").addClass("opened");
  } else {
    $(".hamburger").removeClass("opened");
    $(".navigation").removeClass("opened");
  }
});

