{
  "defaultRoutePath": "/",
        "routes": {
            "/CustomerManagement/CustomerCreation": {
                "templateUrl": "/CustomerManagement/CreateCustomer/createcustomer.html",
                "dependencies": [
                    "/CustomerManagement/CreateCustomer/createcustomer.js"
                ]
            },
            "/about/:person": {
                "templateUrl": "/views/about.html",
                "dependencies": [
                    "controllers/AboutViewController",
                    "directives/app-color"
                ]
            },
            "/contact": {
                "templateUrl": "/views/contact.html",
                "dependencies": [
                    "controllers/ContactViewController"
                ]
            }
        }
}
