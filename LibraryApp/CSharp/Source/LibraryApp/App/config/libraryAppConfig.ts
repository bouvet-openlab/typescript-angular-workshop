module LibraryApp.Config {

    var config = ($routeProvider) => {
        $routeProvider
            .when('/public', {
            controller: "publicCtrl",
            templateUrl: "app/views/public-index.html"
        })
            .when('/admin', {
            controller: "adminCtrl",
            templateUrl: "app/views/admin-index.html"
        })
            .otherwise({
            redirectTo: "/public"
        });
    }

    app.config(config);

}