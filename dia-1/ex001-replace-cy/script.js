const app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Mundo!';
});

app.directive('myButton', function() {
  return {
    require: 'cy',
    template: '<button>Enviar</button>',
    replace: true
  }
});

app.directive('cy', function() {
  return {
    restrict: 'A',
    controller: function() {

    }
  }
})