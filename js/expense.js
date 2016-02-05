$('.container-fluid a#toggle').click(function() {
  $('.nav').slideToggle(200, function() {
    // Animation complete.
  });
});