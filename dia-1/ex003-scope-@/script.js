const app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Mundo!';
  $scope.isDisabled = false;
});

app.directive('myInput', function() {
  return {
    template: '<input ng-disabled="isDisabled"/>',
    scope: {
      isDisabled: '@'
    },
    link: function(scope) {
      scope.isDisabled = true;
    }
  }
});