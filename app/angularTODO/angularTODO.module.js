angular
	.module('angularTODO', [
		'ui.router',
		'angularTODO.list',
		'angularTODO.create',
		'angularTODO.completed'


	])

	.config(angularTODOConfig);

function angularTODOConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
