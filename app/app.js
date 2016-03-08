/**
 * TestApp Main entry point
 */
(function(){

angular.
	module('angular-todo', [
		'ui.router',
		'oitozero.ngSweetAlert',
		'LocalStorageModule'
	]);

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		  .state('todo-list', {
		    cache: false,
		    url: '/',
		    templateUrl: 'app/todo-list/todo-list.view.html',
		    controller: 'todoListCtrl',
				controllerAs: 'todoCtrl'
		  })
	}

angular
	.module('angular-todo')
	.config(['$stateProvider','$urlRouterProvider', config])
	.controller('mainCtrl',mainCtrl)

	function mainCtrl() {

	};

})();
