/// <reference path="../references.ts" />
var LibraryApp;
(function (LibraryApp) {
    var Controllers;
    (function (Controllers) {
        var searchBooksCtrl = function ($scope, bookService) {
            $scope.books = [];
            $scope.anyBooks = false;
            $scope.searchQuery = undefined;
            var shouldShowTable = function () {
                $scope.anyBooks = $scope.books.length > 0;
            };
            $scope.search = function () {
                bookService.searchTitlesAndAuthors($scope.searchQuery).then(function (response) {
                    $scope.books = response.data;
                    $scope.noResult = response.data.length === 0;
                }).catch(function (error) {
                }).finally(function () {
                    shouldShowTable();
                });
            };
            $scope.clear = function () {
                $scope.books = [];
                shouldShowTable();
            };
        };
        app.controller('searchBooksCtrl', searchBooksCtrl);
    })(Controllers = LibraryApp.Controllers || (LibraryApp.Controllers = {}));
})(LibraryApp || (LibraryApp = {}));
//# sourceMappingURL=searchBooksCtrl.js.map