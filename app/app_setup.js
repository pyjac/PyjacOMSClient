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
        'angular-loader' : 'bower_components/angular-loader/angular-loader.min',
        'ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'ocLazyLoad': 'bower_components/oclazyload/dist/ocLazyLoad.min',
		'app' : 'app'
    },
	shim: {
		'app': {
			deps: [
                'angular','jquery','jquery-ui','morrisjs','sparkline','knob','ui-router',
                'daterangepicker','boot-datatables', 'angular-localStorage','angular-loader', 'ocLazyLoad',
                'angular-route','angular-cookies', 'bootstrap.min','bootstrap-fileinput','app-theme']
		},
        'angular-localStorage' : {
            deps: ['angular']
        },
        'ocLazyLoad': ['angular'],
        'ui-router' : {
             deps: ['angular']
        },
        'angular-loader' : {
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
        'app',
        'components/directives/loader',
        'authInterceptorService',
        'AuthService',
        'components/services/routeResolver',
        'components/services/routesSetup',
    ],
    function(app)
    {
        
        angular.bootstrap(document, ['app']);
        /*
       $(function () {
        //Set the hubs URL for the connection
            $.connection.hub.url = "http://localhost:8800/signalr";
            
            // Declare a proxy to reference the hub.
            var pyjacOMSHub = $.connection.pyjacOMSHub;
            
            
            
            // Get the user name and store it to prepend to messages.
            //$('#displayname').val(prompt('Enter your name:', ''));
            // Set initial focus to message input box.
            //$('#message').focus();
            // Start the connection.
           pyjacOMSHub.client.Result = function (message) {
                // Html encode display name and message.
                alert(message);
            };
            $.connection.hub.start().done(function () {
                $('#btnSell').click(function () {
                    // Call the Send method on the hub.
                    pyjacOMSHub.server.newOrder("Buy");
                    pyjacOMSHub.server.newOrder("Sell");
                    // Clear text box and reset focus for next comment.
                    //$('#message').val('').focus();
                });
            });
        });*/

    }
);
