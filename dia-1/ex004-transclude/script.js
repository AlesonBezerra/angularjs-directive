const app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Coxinha!';
});

app.directive('my-transclude', function() {
  return {
    scope: {},
    template: '<div ng-transclude></div>',
  }
})