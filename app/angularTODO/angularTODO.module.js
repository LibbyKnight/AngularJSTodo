angular
	.module('angularTODO', [
		'ui.router',
		'angularTODO.list'
	])

	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}