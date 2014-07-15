require(['jquery'], function() {

  $(function() {
    $('a[href="#left"]').click(function() {
      toggleNav('left');
    });
    $('a[href="#right"]').click(function() {
      toggleNav('right');
    });
  });

  function _reverse(direct) {
    if (direct == 'left') {
      return 'right';
    }
    if (direct == 'right') {
      return 'left';
    }
  }

  function toggleNav(direct) {
    if ($('#wrapper').hasClass('show-' + direct)) {
      $('#wrapper').removeClass('show-' + direct);
    } else {
      $('#wrapper').addClass('show-' + direct);
    }
    if ($('#wrapper').hasClass('show-' + _reverse(direct))) {
      $('#wrapper').removeClass('show-' + _reverse(direct));
    }

    $(this).scrollTop( $('header.jumbotron').outerHeight() );
  }

});

