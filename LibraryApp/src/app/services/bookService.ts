/// <reference path="../references.ts" />

module LibraryApp.Services {

    export interface IBookService {
        getAllBooks(): ng.IPromise<LibraryApp.Models.Book[]>;
        searchTitlesAndAuthors(query: string): ng.IPromise<LibraryApp.Models.Book[]>;
    }

    class BookService implements IBookService {
        constructor(private $http: ng.IHttpService, private appSettings) { }

        public getAllBooks() {
            return this.$http.get(this.appSettings.apiUrl + "book")
                        .then((response: ng.IHttpPromiseCallbackArg<LibraryApp.Models.Book[]>): LibraryApp.Models.Book[] => {
                            return parseBooks(response.data);
                        });
        }

        public searchTitlesAndAuthors(query: string) {

            query = (query === undefined || query === null)
                ? ''
                : encodeURIComponent(query.toLowerCase());

            return this.$http.get(this.appSettings.apiUrl + "book/search?query=" + query)
                        .then((response: ng.IHttpPromiseCallbackArg<LibraryApp.Models.Book[]>): LibraryApp.Models.Book[] => {
                            return this.parseBooks(response.data);
                        });
        }

        private parseBooks(items:any) {
            var books: LibraryApp.Models.Book[] = [];
            angular.forEach(items, function(item){
                var book = new LibraryApp.Models.Book();
                book.id = item.id;
                book.title = item.title;
                book.author = item.author;
                book.location = new LibraryApp.Models.Location();
                book.location.librarySection = item.libraryLocation.librarySection;
                book.location.shelfSection = item.libraryLocation.shelfSection;
                book.location.shelf = item.libraryLocation.shelf;
                books.push(book);
            });
            return books;
        }
    }   

    factory.$inject = ['$http', 'appSettings'];
    function factory($http: ng.IHttpService, appSettings) : IBookService {
        return new BookService($http, appSettings);
    }

    app.factory('bookService', factory);
}