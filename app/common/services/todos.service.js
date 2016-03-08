//Todo service
(function(){

  angular
  .module('angular-todo')
  .service('todoService',todoService)

  function todoService($http) {

    var createTodo = function(todo){
      console.log(todo);
      return $http.post('http://localhost:8080/todos/createTodo', todo);
    }

    var getTodos = function(){
      return $http.get('http://localhost:8080/todos/getTodos');
    }

    var updateTodo = function(todo){
      return $http.put('http://localhost:8080/todos/updateTodo', todo)
    }

    var deleteTodo = function(todo){
      return $http.delete('http://localhost:8080/todos/deleteTodo/?id='+todo.id+'');
    }

    return {
      createTodo : createTodo,
      deleteTodo : deleteTodo,
      updateTodo : updateTodo,
      getTodos : getTodos
    }
  };

})();
