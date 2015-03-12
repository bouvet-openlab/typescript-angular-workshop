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
        private bookService: LibraryApp.Services.IBookService;
        private $scope: ISearchBooksScope;        

        static $inject = ['$scope', 'bookService']
        constructor($scope: ISearchBooksScope, bookService: LibraryApp.Services.IBookService){
            this.bookService = bookService;
            this.$scope = $scope;
            this.$scope.events = this;
            this.$scope.books = [];
            this.$scope.anyBooks = false;
            this.$scope.searchQuery = undefined;
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

        private shouldShowTable() {
            this.$scope.anyBooks = this.$scope.books.length > 0;
        }
    }

    app.controller('searchBooksCtrl', SearchBooks);
}