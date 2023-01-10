const app = angular.module('app', []);

app.controller('ctrl01', function ($scope, $timeout) {
    $scope.name = 'Controller'
});

app.directive('diretivaPai', function() {
    return {
        template: '<div><h1>Diretiva Pai</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</h3> <div ng-transclude></div></div>',
        transclude: true,
        replace: true,
        scope: {},
        controller: function($scope, $timeout) {
            $scope.name = 'Pai'

            this.getProp = prop => {
                return $scope[prop];
            }
        }
    }
})

app.directive('diretivaFilho', function() {
    return {
        require: '^diretivaPai',
        replace: true,
        template: '<div><h1>Diretiva FILHO</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</div>',
        // scope: {},
        link: function(scope, elemt, attrs, ctrl) {
            console.log('ctrl', ctrl.getProp('name'));

        }
    }
})