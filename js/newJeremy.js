var app = angular.module('app', [ 'ui.router', 'ngAnimate']);


app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('resume', {
				controller: 'resumeCtrl',
				url: '/resume',
				templateUrl: '/views/resume.html'
			})
			.state('projects', {
				controller: 'mainCtrl',
				url: '/projects',
				templateUrl: '/views/projects.html'
			})
			.state('skills', {
				controller: 'skillsCtrl',
				url: '/skills',
				templateUrl: '/views/skills.html'
			})
	}
	])

app.controller('mainCtrl', ['$scope', '$state', function($scope, $state){
$scope.pageClass = "page-home";
}]);
app.controller('resumeCtrl', ['$scope', '$state', function($scope, $state){
$scope.pageClass = "page-resume";
}]);
app.controller('skillsCtrl', ['$scope', '$state', function($scope, $state){
$scope.pageClass = "page-about";
}]);
