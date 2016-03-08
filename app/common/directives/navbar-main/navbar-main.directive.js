(function(){
angular
	.module('angular-todo')
	.directive('navbarMain', navbarMain);

	function NavController(){
	}

function navbarMain() {
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/navbar-main/navbar-main.tpl.html',
    scope: {
      navOptions:'='
  },
  bindToController:true,
  controllerAs: 'navCtrl',
  controller : NavController
  }
}
})();
