var scrWidth = $(window).width();

$(window).on("load", function () {
  if (scrWidth >= 992) {
    $("#hero .mockup-box").addClass("enlarge");
    $("#hero .mockup-box img").addClass("show");
    $("#hero .content").addClass("show");
  }
});
