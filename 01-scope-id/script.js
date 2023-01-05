const app = angular.module('app', []);

app.controller('ctrl01', function ($scope, $timeout) {
    // $timeout(() => {
    // }, 2000)
    $scope.name = 'Controller'
});

app.directive('diretivaPai', function() {
    return {
        template: '<div><h1>Diretiva Pai</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</h3> <div ng-transclude></div></div>',
        transclude: true,
        replace: true,
        controller: function($scope, $timeout) {
            // $timeout(() => {
            // }, 4000)
        }
    }
})

app.directive('diretivaFilho', function() {
    return {
        replace: true,
        template: '<div><h1>Diretiva FILHO</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</div>',
        controller: function($scope, $timeout) {
            // $timeout(() => {
            // }, 6000)
        }
    }
})