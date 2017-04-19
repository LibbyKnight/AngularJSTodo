angular
	.module('angularTODO.create')
	.config(createConfig);

function createConfig($stateProvider) {

	$stateProvider.state({
		name: 'create',
		url: '/',
		templateUrl: '/angularTODO/states/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM'
	})
}