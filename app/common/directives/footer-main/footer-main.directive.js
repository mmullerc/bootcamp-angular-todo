/**
 * Footer directive definition
 */
angular
	.module('angular-todo')
	.directive('footerMain', footerMain);

	function footerMain() {
		return {
			restrict: 'E',
			templateUrl: 'app/common/directives/footer-main/footer-main.tpl.html'
		};
	}
