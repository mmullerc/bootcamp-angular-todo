/**
 * todo controller
 */
angular
	.module('angular-todo')
	.controller('todoListCtrl', todoListCtrl);

	function todoListCtrl(SweetAlert, todoService) {

		var vm = this;
		vm.taskList = [];
		getTodos();

		function getTodos(){
			
			todoService.getTodos().then(function(results){
				vm.taskList = results.data.todos;
			}).catch(function(err){
				SweetAlert.swal('Error ' + err);
			});
		}

		vm.addNew = function(tsk){

			if(tsk){
				var task = {'task' : tsk,
										'isDone' : 0
									}

				todoService.createTodo(task).then(function(results){
					vm.task = '';
					getTodos();
				}).catch(function(err){
					vm.task = '';
					SweetAlert.swal(err);
				});

			}else{
				SweetAlert.swal('Please enter a task');
			}
		}

		vm.deleteTask = function(tsk){

		 todoService.deleteTodo(tsk).then(function(results){
				getTodos();
		 }).catch(function(err){
			 SweetAlert.swal(err);
		 });

		}

		vm.done = function(tsk){

			if(tsk.isDone == 1){
				tsk.isDone = 0;
			}else{
				tsk.isDone = 1;
			}
			todoService.updateTodo(tsk).then(function(results){
				getTodos();
			}).catch(function(err){
 			 SweetAlert.swal(err);
 		 });
		}

	};
