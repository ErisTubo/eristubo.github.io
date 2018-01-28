$( document ).ready(function() {
    $( 'article > header' ).click(function() {
      $(this).toggleClass('header');
      $(this).next('section').toggleClass('show');
    });
    $('img[alt="FIN"]').parent().addClass('hidemeta');
    $('img[alt="FIN"]').hover(function() {
      $(this).parent().removeClass('hidemeta');
      $(this).addClass('hideimg');
    }, function() {
      $(this).parent().addClass('hidemeta');
      $(this).removeClass('hideimg');
    });
    $('img[alt="WIP"]').hover(function() {
      $(this).parent().addClass('hidemeta');
    }, function() {
      $(this).parent().removeClass('hidemeta');
    });
});
