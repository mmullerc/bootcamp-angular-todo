/**
 * Header directive definition
 */
angular
	.module('testApp')
	.directive('headerMain', headerMain);

	function NavController(){

		var vm = this;
		var itemName;

		for(var i = 0; i < vm.navOptions.length; i++){
			if(vm.navOptions[i].active == true){
				vm.itemName = vm.navOptions[i].name;
			}
		}

		vm.changeStatus = function(navItem){
			for(var i = 0; i <vm.navOptions.length; i++){
					navItem.active = true;
					vm.itemName = navItem.name;
					vm.navOptions[i].active = false;
			}
		}
	}

	function headerMain() {
		return {
			restrict: 'E',
			templateUrl: 'app/common/directives/header-main/header-main.tpl.html',
			scope: {
				navOptions:'='
		},
		bindToController:true,
		controllerAs: 'ctrlNav',
		controller : NavController
		}
	}
