toDoApp.controller('ToDoController', ['ToDoFactory','ToDoService', function(ToDoFactory, ToDoService) {

  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function(newtask) {
    self.todos.push(new ToDoFactory(newtask));
  };

  self.removeLastTask = function() {
    self.todos.pop();
  };

}]);