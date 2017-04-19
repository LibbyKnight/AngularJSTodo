angular
	.module('angularTODO.list')
	.config(listConfig);

function listConfig($stateProvider) {

	$stateProvider.state({
		name: 'list',
		url: '/',
		templateUrl: '/angularTODO/states/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}