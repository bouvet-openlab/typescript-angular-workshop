var LibraryApp;
(function (LibraryApp) {
    var Config;
    (function (Config) {
        var config = function ($routeProvider) {
            $routeProvider.when('/public', {
                controller: "publicCtrl",
                templateUrl: "app/views/public-index.html"
            }).when('/admin', {
                controller: "adminCtrl",
                templateUrl: "app/views/admin-index.html"
            }).otherwise({
                redirectTo: "/public"
            });
        };
        app.config(config);
    })(Config = LibraryApp.Config || (LibraryApp.Config = {}));
})(LibraryApp || (LibraryApp = {}));
//# sourceMappingURL=libraryAppConfig.js.map