$( document ).ready(function() {
    $( 'article > header' ).click(function() {
      $(this).next('section').toggleClass('show');
    });
});
