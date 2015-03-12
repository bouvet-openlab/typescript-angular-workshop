/// <reference path="../references.ts" />

module LibraryApp.Directives {
    
    var overdueBooks = () : ng.IDirective => {

        return {
            restrict: 'EA',
            templateUrl: 'app/directives/overdueBooks.html',
            controller: 'overdueBooksCtrl',
            replace: true
        }

    }

    app.directive('overdueBooks', overdueBooks);

}