const app = angular.module('app', []);

app.controller('ctrl01', ['$scope', '$rootScope', function ($scope, $rootScope) {
    // $rootScope.name = 'aleson';
    console.log(1);
    $scope.name = 'Controller'
}]);

app.directive('diretivaPai', function() {
    return {
        template: '<div><h1>Diretiva Pai</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }}</h3><div ng-transclude ng-model="name" class="filho"></div></div>',
        transclude: true,
        replace: true,
        // scope: {
            // name: '='
        // },
        controller: function($scope) {
           $scope.name = 'Pai';
        }
    }
})

app.directive('diretivaFilho', function() {
    return {
        require: '^ngModel',
        template: '<div><h1>Diretiva FILHO</h1> <h3>ID do Scope = {{ $id }};</h3> <h3>Scope.name = {{ name }} <br> <input ng-model="name"/></div>',
        scope: {
            // name: '='
        },
        link: function(scope, elemt, atts, ctrl) {
            console.log('ctrl.$viewValue', ctrl);
            elemt.bind('keyup', function  () {
                console.log(scope.name);
                ctrl.$setViewValue(scope.name)
            })
            // $timeout(() => {
                // $scope.name = 'Filho'
            // })
        }
    }
})