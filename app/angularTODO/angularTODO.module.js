angular
	.module('angularTODO', [
		'ui.router',
		'angularTODO.list'
	])

	.config(angularTODOConfig);

function angularTODOConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
