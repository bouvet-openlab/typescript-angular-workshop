/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface ISearchBooksScope extends ng.IScope {
        books: LibraryApp.Models.Book[];
        anyBooks: boolean;
        noResult: boolean;
        searchQuery: string;
        events: SearchBooks;
        search(): void;
        clear(): void;
    }

    class SearchBooks {
        public $scope: ISearchBooksScope;
        private bookService: LibraryApp.Services.IBookService;

        static $inject = ['$scope', 'bookService']
        constructor($scope: ISearchBooksScope, bookService: LibraryApp.Services.IBookService){
            this.bookService = bookService;
            this.$scope = $scope;
            $scope.events = this;
            $scope.books = [];
            $scope.anyBooks = false;
            $scope.searchQuery = undefined;
        }

        private shouldShowTable() {
            this.$scope.anyBooks = this.$scope.books.length > 0;
        }

        public search() {
            this.bookService.searchTitlesAndAuthors(this.$scope.searchQuery)
                .then((books: LibraryApp.Models.Book[]): void => {

                this.$scope.books = books;
                this.$scope.noResult = books.length === 0;

            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.shouldShowTable();
            });
        }

        public clear() {
            this.$scope.books = [];
            this.shouldShowTable();
        }
    }

    app.controller('searchBooksCtrl', SearchBooks);
}