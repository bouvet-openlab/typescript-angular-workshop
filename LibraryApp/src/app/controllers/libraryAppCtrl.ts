/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface ILibraryAppCtrlScope extends ng.IScope {
        isPublic: boolean
        isAdmin: boolean
    }
    
    var libraryAppCtrl = ($scope: ILibraryAppCtrlScope, $location: ng.ILocationService) => {

        var urlContainsPublic = () => {
            return $location.url().indexOf('public') !== -1;
        }

        var urlContainsAdmin = () => {
            return $location.url().indexOf('admin') !== -1;
        }
        
        $scope.$on('$routeChangeSuccess', (newValue, oldValue) => {

            $scope.isPublic = urlContainsPublic();
            $scope.isAdmin = urlContainsAdmin();

        });
    }

    app.controller('libraryAppCtrl', libraryAppCtrl);

}