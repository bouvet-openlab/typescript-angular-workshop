/// <reference path="../references.ts" />
var LibraryApp;
(function (LibraryApp) {
    var Services;
    (function (Services) {
        var bookService = function ($http, appSettings) {
            return {
                getAllBooks: function () {
                    return $http.get(appSettings.apiUrl + "book");
                },
                searchTitlesAndAuthors: function (query) {
                    query = (query === undefined || query === null) ? '' : decodeURIComponent(query.toLowerCase());
                    return $http.get(appSettings.apiUrl + "book/search?query=" + query);
                }
            };
        };
        app.factory('bookService', bookService);
    })(Services = LibraryApp.Services || (LibraryApp.Services = {}));
})(LibraryApp || (LibraryApp = {}));
//# sourceMappingURL=bookService.js.map