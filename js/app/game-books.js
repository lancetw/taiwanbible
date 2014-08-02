require(['jquery'], function() {
  $('#gift-receive').click(function() {
    $(this).hide();
    $('#gift-book .book').removeClass('hide');
  });
});

