(function() {
	'use strict';

	medServices.directive('docaTabs', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<ul class="doca-tabs doca-tabs--{{ variant }}" ng-transclude></ul>',
			transclude: true,
			scope: {
				variant: '@',
				currentTab: '='
			},
			controller: function($scope) {
				$scope.variant = $scope.variant || 'primary';

				this.currentTab = $scope.currentTab;

				const tabs = [];

				this.addTab = tab => {
					tabs.push(tab);
				};

				this.setCurrentTab = tabKey => {
					$scope.currentTab = tabKey;

					tabs.forEach(tab => tab.is_active = tab.key === tabKey);
				};
			}
		};
	});

	medServices.directive('docaTabItem', function() {
		return {
			restrict: 'E',
			replace: true,
			require: ['^docaTabs', '^cy'],
			template: '<li class="doca-tabs__item" ng-class="{ \'doca-tabs__item--active\': tabControl.is_active }" ng-click="clickTab()" ng-transclude></li>',
			transclude: true,
			scope: {
				clickFn: '&',
				tabKey: '@'
			},
			link: function(scope, element, attrs, ctrl) {
				const docaTabsCtrl = ctrl[0];

				scope.tabControl = {
					is_active: docaTabsCtrl.currentTab === scope.tabKey,
					key: scope.tabKey
				};

				docaTabsCtrl.addTab(scope.tabControl);

				scope.clickTab = () => {
					docaTabsCtrl.setCurrentTab(scope.tabControl.key);

					if (attrs.clickFn) {
						scope.clickFn();
					}
				};
			}
		};
	});
})();
