/// <reference path="../references.ts" />
var LibraryApp;
(function (LibraryApp) {
    var Directives;
    (function (Directives) {
        var searchBooks = function () {
            return {
                restrict: 'EA',
                templateUrl: 'app/directives/searchBooks.html',
                controller: 'searchBooksCtrl',
                replace: true
            };
        };
        app.directive('searchBooks', searchBooks);
    })(Directives = LibraryApp.Directives || (LibraryApp.Directives = {}));
})(LibraryApp || (LibraryApp = {}));
//# sourceMappingURL=searchBooksDrct.js.map