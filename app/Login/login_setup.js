require.config({
    baseUrl: '/app',
    paths: {
		'angular': 'bower_components/angular/angular',
		'angular-route': 'bower_components/angular-route/angular-route',
		'bootstrap.min': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'jquery': 'bower_components/jquery/dist/jquery',
        'jquery-ui': 'bower_components/jquery-ui/jquery-ui.min',
        'morrisjs': 'bower_components/morrisjs/morris.min',
		'bootstrap-fileinput': 'components/bootstrap-fileinput',
        'raphael' : 'bower_components/raphael/raphael-min',
        'sparkline' : 'components/sparkline.min',
        'knob' : 'bower_components/jquery-knob/dist/jquery.knob.min',
        'moment' : 'bower_components/moment/moment',
        'daterangepicker' : 'bower_components/bootstrap-daterangepicker/daterangepicker',
        'datatables' : 'components/datatables/jquery.dataTables',
        'boot-datatables': 'components/datatables/dataTables.bootstrap',
        'app-theme' : 'components/app-theme',
        'slimscroll' :  'bower_components/slimScroll/jquery.slimscroll.min', 
        'signalr' :  'bower_components/signalr/jquery.signalR.min',
        'angular-localStorage' : 'bower_components/angular-local-storage/angular-local-storage.min',
        'signalr.hubs': "http://localhost:8800/signalr/hubs?",
        'authInterceptorService' : 'components/services/authInterceptorService',
        'AuthService': 'components/services/AuthService',
        'angular-cookies' : 'bower_components/angular-cookies/angular-cookies.min',
		'login' : 'Login/LoginController'
    },
	shim: {
		'login': {
			deps: [
                'angular','jquery','jquery-ui','morrisjs','sparkline','knob',
                'daterangepicker', 'angular-localStorage',
                'angular-route','angular-cookies', 'bootstrap.min','bootstrap-fileinput','app-theme']
		},
        'angular-localStorage' : {
            deps: ['angular']
        },
        'AuthService' : {
            deps: ['app']
        },
        'authInterceptorService' : {
            deps: ['app']
        },
        'slimscroll' : {
              deps: ['jquery']
        },
       'morrisjs': {
           deps: ['raphael']
       },
        'signalr.hubs': {
            deps: ['signalr']
        },
        'signalr': {
           deps: ['jquery']
       },
		'angular-route': {
			deps: ['angular']
		},
        'angular-cookies': {
			deps: ['angular']
		},
        'boot-datatables' : {
            deps: ['datatables']
        },
        'datatables' : {
            deps: ['jquery']
        },
        'app-theme' : {
            deps: ['jquery','slimscroll']
        },
        'daterangepicker' : {
            deps: ['moment','jquery']
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
        'login',

    ],
    function(app)
    {
        
        angular.bootstrap(document, ['login']);

    }
);
