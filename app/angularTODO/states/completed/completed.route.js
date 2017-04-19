angular
	.module('angularTODO.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {

	$stateProvider.state({
		name: 'completed',
		url: '/',
		templateUrl: '/angularTODO/states/completed/completed.html',
		controller: 'CompletedCtrl',
		controllerAs: 'CompletedVM'
	})
}