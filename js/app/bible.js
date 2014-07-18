define(['highlight'], function() {
  $('#bible-read .content > p').highlightRegex(/[0-9].+?/, {
    tagType:   'sup',
    className: 'badge alert-warning'
  });
});
