require(['bootstrap-dropdown'], function() {
  $('#search a').on('click', function() {
    $('#search').find('.input.form-control').attr('placeholder', $(this).text() + '搜尋');
    $('#search').find('input[name="area"]').attr('value', $(this).attr('data-area'));
  });

  var area = $('#search').find('.input.form-control').attr('data-area');
  $($('#search .dropdown-menu').find('a[data-area="'+ area +'"]')).trigger('click');
});
