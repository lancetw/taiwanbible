bowerUrl = '../../bower_components';

require.config({
  baseUrl: 'js/app',
  paths:{
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min', bowerUrl + '/jquery/dist/jquery.min'],
    'angular': bowerUrl + '/angular/angular',
    'angular-cookies': bowerUrl + '/angular-cookies/angular-cookies.min',
    'angular-resource': bowerUrl + '/angular-resource/angular-resource.min',
    'angular-sanitize': bowerUrl + '/angular-sanitize/angular-sanitize.min',
    'angular-route': bowerUrl + '/angular-route/angular-route.min',
    'underscore': bowerUrl + '/underscore/underscore',
    'Han': bowerUrl + '/Han/js/han',
    'fastclick': bowerUrl + '/fastclick/lib/fastclick',
    'bootstrap-dropdown': bowerUrl + '/bootstrap-sass/js/dropdown',
    'bootstrap-tab': bowerUrl + '/bootstrap-sass/js/tab',
    'bootstrap-transition': bowerUrl + '/bootstrap-sass/js/transition',
    'bootstrap-collapse': bowerUrl + '/bootstrap-sass/js/collapse',
    'bootstrap-responsive-tabs': '../../libs/bootstrap-responsive-tabs/js/responsive-tabs',
  },
  shim:{
    'underscore': { exports: '_' },
    'jquery': { exports: ['$'] },
    'angular': { deps: ['jquery'], exports: 'angular' },
    'angular-cookies': { deps: ['angular'], exports: 'ngCookies' },
    'angular-resource': { deps: ['angular'], exports: 'ngResource' },
    'angular-sanitize': { deps: ['angular'], exports: 'ngSanitize' },
    'angular-route': { deps: ['angular'], exports: 'ngRoute' },
    'Han': { deps: ['jquery'] },
    'bootstrap-dropdown': { deps: ['jquery'] },
    'bootstrap-tab': { deps: ['jquery'] },
    'bootstrap-transition': { deps: ['jquery'] },
    'bootstrap-collapse': { deps: ['jquery', 'bootstrap-transition'] },
    'bootstrap-responsive-tabs': { deps: ['bootstrap-tab', 'bootstrap-collapse'] },
  },
  map:{
  },
  priority: [
    'angular',
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'angular-cookies',
  'angular-resource',
  'angular-sanitize',
  'angular-route',
  'app',
  'underscore',
  'services/services',
  'controllers/controllers',
  'filters/filters',
  'directives/directives',
  'Han',
  'fastclick',
  'bootstrap-dropdown',
  'bootstrap-tab',
  'bootstrap-transition',
  'bootstrap-collapse',
  '../helpers/safari_standalone',
],function(angular) {
  'use strict';
  angular.element().ready(function() {
    angular.resumeBootstrap(['myApp']);
  });
},function(fastclick) {
  window.addEventListener('load', function() {
    new FastClick(document.body);
  }, false);
});


define(['bootstrap-responsive-tabs'], function() {
  $('#twbTab a:first').tab('show');

  $('#twbTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  (function() {
    fakewaffle.responsiveTabs(['xs', 'sm']);
  })(jQuery);
});


// define(['jquery'], function() {
//   $(function() {
//     $('body').css('font-size', '10px');
//   });
// });
