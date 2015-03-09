/// <reference path="../references.ts" />

module LibraryApp.Directives {
    
    var searchBooks = () : ng.IDirective => {

        return {
            restrict: 'EA',
            templateUrl: 'app/directives/searchBooks.html',
            controller: 'searchBooksCtrl',
            replace: true
        }

    }

    app.directive('searchBooks', searchBooks);

}