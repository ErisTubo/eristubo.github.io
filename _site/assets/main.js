$( document ).ready(function() {
  // Intro
  $('.intro').delay(90).toggleClass('intro');

  // About
  $('.about-ribbon').click(function() {
    $('main').toggleClass('show-about');
  });


  // Post
  $('article > header').click(function() {
    $(this).toggleClass('header');
    $(this).next('section').toggleClass('show');
  });

  // Give div pd class recursivly depending on the pd status
  // Need to do this because of how post works in jekyll
  $('.theme').each(function(index) {
    if ($(this).next().hasClass('fin')) {
      $(this).parent().parent().toggleClass('project-fin');
    } else if ($(this).next().hasClass('wip')) {
      $(this).parent().parent().toggleClass('project-wip');
    } else if ($(this).next().hasClass('hld')) {
      $(this).parent().parent().toggleClass('project-hld');
      $(this).parent().parent().toggleClass('project-hide');
    }
  });

  // Gallery Nav
  $('.nav-toggles').click(function() {
    if($(this).hasClass('nav-untoggles')) {

    } else {
      $(this).toggleClass('nav-toggeled');
      if ($(this).children().is('#fin')) {
        $('.project-fin').toggleClass('project-hide')
      } else if ($(this).children().is('#wip')) {
        $('.project-wip').toggleClass('project-hide')
      } else if ($(this).children().is('#hld')) {
        $('.project-hld').toggleClass('project-hide')
      }
    }
  });

  // Gallery progress bar
  $('#pbar-fin').css('width', Math.floor($('.finbadge').html()/$('.nav-untoggles > span').html()*100-1)+'%');
  $('#pbar-wip').css('width', Math.floor($('.wipbadge').html()/$('.nav-untoggles > span').html()*100-1)+'%');
  $('#pbar-hld').css('width', Math.floor($('.hldbadge').html()/$('.nav-untoggles > span').html()*100-1)+'%');

  // Gallery Img
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
