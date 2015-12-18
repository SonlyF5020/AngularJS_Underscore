(function(angular, data, _){
  // Your code should be here

  var myAPP = angular.module('myAPP', []);
  myAPP.controller('mainController', function($scope) {
    $scope.books = data.books;
  });
})(angular, data, _);
