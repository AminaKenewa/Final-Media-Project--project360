angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('homePage.360Videos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/360Videos.html',
        controller: '360VideosCtrl'
      }
    }
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('homePage', {
    url: '/page6',
    templateUrl: 'templates/homePage.html',
    abstract:true
  })

  .state('homePage.homePage2', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/homePage2.html',
        controller: 'homePage2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page6/page3')


});