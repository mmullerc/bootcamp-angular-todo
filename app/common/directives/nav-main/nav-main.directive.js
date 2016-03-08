/**
 * Header directive definition
 */
(function(){

angular
	.module('testApp')
	.directive('navMain', navMain);

	function navMain() {
		return {
			restrict: 'E',
			templateUrl: 'app/common/directives/nav-main/nav-main.tpl.html'
		};
	}
})();
