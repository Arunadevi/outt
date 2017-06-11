/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
(function() {

  angular
    .module('outt')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];


  function MainController($scope) {

    // 'controller as' syntax
    var self = this;
    $scope.friend = '';
    $scope.friends = [];
    $scope.query = '';
    $scope.id = 0;

    $scope.add = function () {
      $scope.friend.id = $scope.id++;
      $scope.friends.push({
        name: $scope.friend,
        id: $scope.id
      });
      $scope.friend = '';
    }

    $scope.remove = function(friend){
      var index = $scope.friends.indexOf(friend);
      $scope.friends.splice(index, 1);
    }

  }


})();