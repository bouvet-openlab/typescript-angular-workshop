/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface ISearchBooksCtrlScope extends ng.IScope {
        books: LibraryApp.Models.Book[];
        anyBooks: boolean;
        noResult: boolean;
        searchQuery: string;

        search();
        clear();
    }

    var searchBooksCtrl = ($scope: ISearchBooksCtrlScope, bookService: LibraryApp.Services.IBookService) => {
        $scope.books = [];
        $scope.anyBooks = false;
        $scope.searchQuery = undefined;

        var shouldShowTable = () => {
            $scope.anyBooks = $scope.books.length > 0;
        }

        $scope.search = () => {
        
            bookService.searchTitlesAndAuthors($scope.searchQuery).then((response) => {

                $scope.books = response.data;
                $scope.noResult = response.data.length === 0;

            }).catch((error) => {

            }).finally(() => {
                shouldShowTable();
            });
                
        }

        $scope.clear = () => {
            $scope.books = [];
            shouldShowTable();
        }
    }

    app.controller('searchBooksCtrl', searchBooksCtrl);

}