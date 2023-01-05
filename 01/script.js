const app = angular.module('app', []);

app.controller('ctrl01', function ($scope) {
    $scope.name = 'Controller'
});

app.directive('diretivaPai', function() {
    return {
        template: '<div><h1>Diretiva Pai</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</h3> <div ng-transclude class="filho"></div></div>',
        transclude: true,
        replace: true,
        scope: {
            // name: '='
        },
        controller: function($scope) {
            $scope.name = 'Pai'

            this.getProp = prop => {
                return $scope[prop];
            }

            this.setPropValue = (prop, value) => {
                $scope[prop] = value;
            }
        }
    }
})

app.directive('diretivaFilho', function() {
    return {
        require: '^diretivaPai',
        template: '<div><h1>Diretiva FILHO</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</div>',
        link: function(scope, elemt, atts, ctrl) {
            console.log(ctrl.getProp('name'));
            ctrl.setPropValue('name', 'Setei')
        }
    }
})