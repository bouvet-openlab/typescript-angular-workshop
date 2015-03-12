/// <reference path="../references.ts" />

module LibraryApp.Controllers {

    interface IOverdueBooksScope extends ng.IScope {
        overdueBooks: LibraryApp.Models.OverdueBook[];
        anyBooks: boolean;
        noResult: boolean;
        events: OverdueBooks;
        getOverdueBooks(): void;
        clear(): void;
    }

    class OverdueBooks {
        private bookService: LibraryApp.Services.IBookService;
        private $scope: IOverdueBooksScope;        

        static $inject = ['$scope', 'bookService']
        constructor($scope: IOverdueBooksScope, bookService: LibraryApp.Services.IBookService){
            this.bookService = bookService;
            this.$scope = $scope;
            this.$scope.events = this;
            this.$scope.overdueBooks = [];
            this.$scope.anyBooks = false;
            this.getOverdueBooks();
        }

        public getOverdueBooks() {
            this.bookService.getOverdue()
                .then((books: LibraryApp.Models.OverdueBook[]): void => {

                this.$scope.overdueBooks = books;
                this.$scope.noResult = books.length === 0;

            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.shouldShowTable();
            });
        }

        public clear() {
            this.$scope.overdueBooks = [];
            this.shouldShowTable();
        }

        private shouldShowTable() {
            this.$scope.anyBooks = this.$scope.overdueBooks.length > 0;
        }
    }

    app.controller('overdueBooksCtrl', OverdueBooks);
}