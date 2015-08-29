'use strict';


var pyjacOMSService = function($rootScope, Hub, appEndpointSignalr, localStorageService, notifier) {
    var token = '';
    var authData = localStorageService.get('authorizationData');
    if (authData) {
        token = 'Bearer ' + authData.token;
    }
    //declaring the hub connection
    var hub = new Hub('pyjacOMSHub', {
        /*  $.connection.hub.disconnected(function() {
   setTimeout(function() {
       $.connection.hub.start();
   }, 5000); // Restart connection after 5 seconds.
});*/
        //client side methods
        listeners: {
            'Result': function(message) {
                // Html encode display name and message.
                alert(message);
            },
            'OrderRejected' : function(message) {
                // Html encode display name and message.
                notifier.error(message);
            },
            'OrderError' : function(message) {
                // Html encode display name and message.
                notifier.error(message);
            },
            'OrderAccepted' : function(message) {
                // Html encode display name and message.
                notifier.success(message);
            },
            'OrderPartiallyFilled' : function(message) {
                // Html encode display name and message.
                notifier.success(message);
            },
            'OrderFilled' : function(message) {
                // Html encode display name and message.
                notifier.success(message);
            },
            'ExecutionReport' : function(message) {
                // Html encode display name and message.
                notifier.success(message);
            },
            'OrderCancelReject' : function(message) {
                // Html encode display name and message.
                notifier.error(message);
            },
            'addChatMessage': function(message) {
                // Html encode display name and message.
                alert(message);
            },

        },
        rootPath: appEndpointSignalr,
        //server side methods
        methods: ['newOrder','cancelOrder','orderStatus','modifyOrder','cancelAllOrders'
        ,'allOrdersStatus','cancelAllOrdersForSecurity'],

        //query params sent on initial connection
        queryParams: {
            'token': token
        },

        //handle connection error
        errorHandler: function(error) {
            notifier.error(error);
            //console.error(error);
        }
    });
    hub.connection.disconnected(function() {
       setTimeout(function() {
           notifier.error("Connection Disconnected..");
           hub.connect();
           notifier.info("Trying to Reconnect");
       }, 7000); // Restart connection after 7 seconds.
    });
    
    hub.connection.reconnecting(function () {
        notifier.info("Trying to Reconnect");
    });
    hub.connection.reconnected(function () {
        notifier.success('Connection Reconnected');
    });
    
    hub.connection.connectionSlow(function() {
        notifier.info('We are currently experiencing difficulties with the connection.')
    });
    var newOrder = function(order) {
        try {
            hub.newOrder(order);
        } catch (e) {
            notifier.error(e.message);
        }

    };

    var CancelOrder = function(order) {
        try {
            
            console.log(order);
            hub.cancelOrder(order);
        } catch (e) {
            notifier.error(e.message);
        }

    };
    var OrderStatus = function(order) {
        try {
            console.log(order);
            hub.orderStatus(order);
        } catch (e) {
            notifier.error(e.message);
        }

    };
    var ModifyOrder = function(order) {
        try {
            console.log(order);
            hub.modifyOrder(order);
        } catch (e) {
            notifier.error(e.message);
        }

    };
    var CancelAllOrders = function() {
        try {
            
            hub.cancelAllOrders();
        } catch (e) {
            notifier.error(e.message);
        }

    };
    var AllOrdersStatus = function() {
        try {
            
            hub.allOrdersStatus();
        } catch (e) {
            notifier.error(e.message);
        }

    };
    var CancelAllOrdersForSecurity = function(sec) {
        try {
            
            hub.cancelAllOrdersForSecurity(sec);
        } catch (e) {
            notifier.error(e.message);
        }

    };

    
    

    return {
        newOrder: newOrder,
        CancelOrder: CancelOrder,
        OrderStatus: OrderStatus,
        ModifyOrder : ModifyOrder,
        CancelAllOrders : CancelAllOrders,
        AllOrdersStatus: AllOrdersStatus,
        CancelAllOrdersForSecurity:CancelAllOrdersForSecurity
    };
};
module.exports = pyjacOMSService;