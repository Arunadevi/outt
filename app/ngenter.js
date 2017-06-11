;(function() {


  'use strict';

  /**
   * Responsive navigation
   *
   * Usage:
   * <responsive-nav></responsive-nav>
   *
   * Example in main-nav.html file
   * 
   */
  angular.module('boilerplate')
    .directive(
  'ngEnter',
  [
    function () {
      return function (scope, element, attributes) {
        element.bind(
          'keydown keypress',
          function (event) {
            if (event.which === 13) {
              event.preventDefault();
              scope.$apply(
                function () {
                  scope.$eval(attributes.ngEnter);
                }
              );
            }
          }
        );
      };
    }
  ]
);

})();