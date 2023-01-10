const app = angular.module('app', []);

app.controller('ctrl01', function ($scope) {
   $scope.agendamentos = [
        {id: 1, name: 'aleson', date: '05/01/2023', doctor: 'anderson'},
        {id: 2, name: 'augusto', date: '06/01/2023', is_surgery: true, doctor: 'anderson' },
        {id: 3, name: 'pc', date: '07/01/2023', doctor: 'peterson'},
        {id: 4, name: 'pedro', date: '08/01/2023', doctor: 'peterson'},
        {id: 5, name: 'Neo', date: '05/01/2023', doctor: 'peterson'}
   ]
   $scope.listFilters = $scope.agendamentos;
   $scope.doctors = ['peterson', 'anderson']
   $scope.today = '05/01/2023';

   $scope.filterDoctor = () => {
        $scope.listFilters = $scope.agendamentos.filter(item => item.doctor === $scope.doctorName)
   }
});

app.directive('agenda', function() {
    return {
        templateUrl: 'templates/agenda.html',
        transclude: true,
        scope: {
            agendamentos: '=',
            doctorName: '=?',
            listFilters: '='
        },
        controller: function($scope) {
            $scope.search = name => {
                $scope.listFilters = name ? $scope.agendamentos.filter(item => $scope.doctorName ? item.name === name && item.doctor === $scope.doctorName : item.name === name) : $scope.agendamentos;
            }

            this.atender = id => {
                $scope.agendamentos = $scope.agendamentos.filter(item => {
                    if ($scope.doctorName) {
                        if (item.doctor === $scope.doctorName && item.id === id) {
                            return false;
                        }
                    } else if (item.id === id) {
                        return false;
                    }

                    return true;
                });

                $scope.listFilters = $scope.agendamentos.filter(item => $scope.doctorName ? item.doctor === $scope.doctorName : true )
            }
        }
    }
})

app.directive('full', function () {
    return {
        require: '^agenda',
        templateUrl: 'templates/full.html',
        link: function(scope, elemt, attrs, ctrl) {
            scope.atender = ctrl.atender;
        }
    }
})

app.directive('espera', function () {
    return {
        require: '^agenda',
        templateUrl: 'templates/espera.html',
        link: function(scope, elemt, attrs, ctrl) {
            scope.atender = ctrl.atender;
        }
    }
})

app.directive('cirurgia', function () {
    return {
        require: '^agenda',
        templateUrl: 'templates/cirurgia.html',
        link: function(scope, elemt, attrs, ctrl) {
            scope.atender = ctrl.atender;
        }
    }
})