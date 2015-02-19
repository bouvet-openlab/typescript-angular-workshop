/// <reference path="../references.ts" />
var LibraryApp;
(function (LibraryApp) {
    var Controllers;
    (function (Controllers) {
        var libraryAppCtrl = function ($scope, $location) {
            var urlContainsPublic = function () {
                return $location.url().indexOf('public') !== -1;
            };
            var urlContainsAdmin = function () {
                return $location.url().indexOf('admin') !== -1;
            };
            $scope.$on('$routeChangeSuccess', function (newValue, oldValue) {
                $scope.isPublic = urlContainsPublic();
                $scope.isAdmin = urlContainsAdmin();
            });
        };
        app.controller('libraryAppCtrl', libraryAppCtrl);
    })(Controllers = LibraryApp.Controllers || (LibraryApp.Controllers = {}));
})(LibraryApp || (LibraryApp = {}));
//# sourceMappingURL=libraryAppCtrl.js.map