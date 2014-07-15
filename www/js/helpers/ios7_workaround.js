// ref: https://w3g.jp/blog/studies/ios7_1_minimal-ui_warning

if(navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) {
  var fixViewportHeight = function() {
    document.body.style.height = "100%";
    if (window.innerHeight != window.outerHeight) {
      document.body.style.height = window.innerHeight + "px";
      window.scrollTo(0, 0);
    }
  };
  window.addEventListener("orientationchange", fixViewportHeight, false);
  fixViewportHeight();
}
