/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface ISearchBooksCtrlScope extends ng.IScope {
        books: LibraryApp.Models.Book[];
        anyBooks: boolean;
        noResult: boolean;
        searchQuery: string;

        search();
        clear();
        deleteBook(book:LibraryApp.Models.Book);
    }

    var searchBooksCtrl = ($scope: ISearchBooksCtrlScope, bookService: LibraryApp.Services.IBookService) => {
        $scope.books = [];
        $scope.anyBooks = false;
        $scope.searchQuery = undefined;

        var shouldShowTable = () => {
            $scope.anyBooks = $scope.books.length > 0;
        }

        var setBooks = (promise: ng.IHttpPromise<LibraryApp.Models.Book[]>) => {

            promise.then(response => {

                $scope.books = response.data;
                $scope.noResult = response.data.length === 0;

            }).catch((error) => {

            }).finally(() => {
                shouldShowTable();
            });

        }

        $scope.search = () => {
            var promise = bookService.searchTitlesAndAuthors($scope.searchQuery);
            setBooks(promise);
        }

        $scope.clear = () => {
            $scope.books = [];
            shouldShowTable();
        }

        $scope.deleteBook = (book: LibraryApp.Models.Book) => {
            var promise = bookService.deleteBook(book);
            setBooks(promise);
        }
    }

    app.controller('searchBooksCtrl', searchBooksCtrl);

}