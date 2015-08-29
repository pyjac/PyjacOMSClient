require.config({
    baseUrl: '/app',
    paths: {
		'angular': 'bower_components/angular/angular',
		'angular-route': 'bower_components/angular-route/angular-route',
		'bootstrap.min': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'jquery': 'bower_components/jquery/dist/jquery',
		'bootstrap-fileinput': 'components/bootstrap-fileinput',
		'app' : 'app'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap.min','bootstrap-fileinput']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap.min': {
			deps: ['jquery']
		},
		'bootstrap-fileinput': {
			deps: ['jquery']
		}

	}
});

require
(
    [
        'app',
        'components/services/routeResolver',
        'components/services/routesSetup',
        'CustomerManagement/customermanagement'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);
