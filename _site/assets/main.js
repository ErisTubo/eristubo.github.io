$( document ).ready(function() {
    $( 'article > header' ).click(function() {
      $(this).toggleClass('header');
      $(this).next('section').toggleClass('show');
    });
});
