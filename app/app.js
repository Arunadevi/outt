(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('outt', [
      'ngRoute'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

  }

  /**
   * Run block
   */
  angular
    .module('outt')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();