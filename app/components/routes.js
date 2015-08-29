define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {

            '/CustomerManagement/:view': {
                templateUrl: '/CustomerManagement/CreateCustomer/createcustomer.html',
                dependencies: [
                    'CustomerManagement/customermanagement'
                ]
            }
        }
    };
});
