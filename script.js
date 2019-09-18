$(document).ready(function () {
  $(window).on('resize', function () {
    var all = $('.content');
    if ($(window).width() < 1000) {
      all.hide();
      $('.name').show();
      $('.name').click(function () {
        all.slideUp();
        $(this).find('.name__open').toggleClass("up");
        $(this).siblings().slideDown();
        return false;
      });
    } else {
      all.show();
      $('.name').hide();
    }
  }).resize();
});