const app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Doquinha!';
});

app.directive('myH1', function() {
  return {
    template: '<h1>Diretiva - {{ name }}</h1>',
    scope: true,
    link: function(scope) {
      //scope.name = 'Coxinha'
    }
  }
});