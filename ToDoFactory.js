toDoApp.factory('ToDoFactory', function() {

  var Todo = function(todoText, completed = false){
    this.task = todoText;
    this.completed = completed;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;

});