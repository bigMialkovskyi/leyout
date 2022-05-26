(function ($) {
  var btn = $('.scroll-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
  $('.menu-hamburger').click(function (e){
    e.preventDefault();
    $('.header ul').toggleClass('show');
  })
})(jQuery);