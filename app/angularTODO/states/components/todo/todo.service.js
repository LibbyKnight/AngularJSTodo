angular
	.module('angularTODO.component.todo')
	.service('todo', ToDoService);

function ToDoService($http) {
	return $http.get('/api');
}