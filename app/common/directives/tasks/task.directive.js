(function(){
angular
	.module('angular-todo')
	.directive('task', task);

	function TaskController($scope, todoService){

		var vm = this;

		if(vm.task.isDone == 1){
			vm.class = 'done-text';
		}

		vm.done = function(){
			vm.class = 'done-text';
		}
	}

	function task() {
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/tasks/task.tpl.html',
	    scope: {
				task : '=',
				deleteTask : '&',
				doneTask : '&'
	  },
		  bindToController:true,
		  controllerAs: 'taskCtrl',
		  controller : TaskController
	  }
	}
})();
