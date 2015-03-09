/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface IPublicControllerScope extends ng.IScope {
       
    }

    var publicCtrl = ($scope: IPublicControllerScope) => {
        
    }

    app.controller('publicCtrl', publicCtrl);

}