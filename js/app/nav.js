require(['jquery'], function() {

  $(function() {
    if ( $('body').hasClass('scrollToContent') )
      $('html, body').animate({ scrollTop: $('header.jumbotron').outerHeight() }, 310);
  });

  $(function() {
    $('a[href="#left"]').click(function() {
      toggleNav('left', $(this));
    });
    $('a[href="#right"]').click(function() {
      toggleNav('right', $(this));
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

  var speed = 310;
  function toggleNav(direct, _this) {
    if ($('#wrapper').hasClass('show-' + direct)) {
      $('#wrapper').removeClass('show-' + direct);
      if (direct == 'left') {
        _this.removeClass('fa-chevron-left').addClass('fa-bars');
        $('a[href="#right"]').show(speed);
      }
      if (direct == 'right') {
        _this.removeClass('fa-chevron-right').addClass('fa-plus-square');
        $('a[href="#left"]').show(speed);
      }
    } else {
      $('#wrapper').addClass('show-' + direct);
      if (direct == 'left') {
        _this.removeClass('fa-bars').addClass('fa-chevron-left');
        $('a[href="#right"]').hide(speed);
      }
      if (direct == 'right') {
        _this.removeClass('fa-plus-square').addClass('fa-chevron-right');
        $('a[href="#left"]').hide(speed);
      }
    }
    if ($('#wrapper').hasClass('show-' + _reverse(direct))) {
      $('#wrapper').removeClass('show-' + _reverse(direct));
    }

    $('html, body').animate({ scrollTop: $('header.jumbotron').outerHeight() }, 350);
    //$(this).scrollTop( $('header.jumbotron').outerHeight() );
  }

});

