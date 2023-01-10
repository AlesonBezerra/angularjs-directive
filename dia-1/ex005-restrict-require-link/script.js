const app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Mundo!';
});

app.directive('nomeDiretiva', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elemt, attrs, ctrl) {
      elemt.bind('keyup', function() {
        ctrl.$setViewValue(ctrl.$viewValue + 'FULL');
      })
    }
  }
});