$(document).ready(function () {
  var all = $('.content');
  $(window).on('resize', function () {
    if ($(window).width() < 1000) {
      all.hide();
      $('.name').show();
    } else {
      all.show();
      $('.name').hide();
    }
  }).resize();
  $('.name').click(function () {
    all.slideUp();
    $(this).find('.name__open').toggleClass("up");
    $(this).siblings().slideDown();
    return false;
  });
  var overlay = $('.overlay');
  var openModal = $('.header__enter-mob');
  var close = $('.enter-window__cancel-btn, .overlay');
  var modal = $('.enter-window');
  openModal.click(function () {
    overlay.fadeIn(150, function () {
      overlay.css('display', 'block');
      modal.css('display', 'block');
    });
  });
  close.click(function () {
      modal
        .fadeOut( 150,
          function () {
            modal.css('display', 'none');
            overlay.fadeOut('slow');
            overlay.css('display', 'none');
          });
    }
  );
});