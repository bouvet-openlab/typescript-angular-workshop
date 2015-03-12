/// <reference path="../references.ts" />

module LibraryApp.Services {

    export interface IBookService {
        getAllBooks(): ng.IPromise<LibraryApp.Models.Book[]>;
        searchTitlesAndAuthors(query: string): ng.IPromise<LibraryApp.Models.Book[]>;
        getOverdue(): ng.IPromise<LibraryApp.Models.OverdueBook[]>;
    }

    class BookService implements IBookService {
        constructor(private $http: ng.IHttpService, private appSettings) { }

        public getAllBooks() {
            return this.$http.get(this.appSettings.apiUrl + "book")
                        .then((response: ng.IHttpPromiseCallbackArg<LibraryApp.Models.Book[]>): LibraryApp.Models.Book[] => {
                            return this.parseBooks(response.data);
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

        public getOverdue() {
            return this.$http.get(this.appSettings.apiUrl + "rentals/overdue")
                        .then((response: ng.IHttpPromiseCallbackArg<LibraryApp.Models.OverdueBook[]>): LibraryApp.Models.OverdueBook[] => {
                            return this.parseOverdueBooks(response.data);
                        });
        }

        private parseBook(item:any) {
            var book = new LibraryApp.Models.Book();
            book.id = item.id;
            book.title = item.title;
            book.author = item.author;
            book.location = new LibraryApp.Models.Location();
            book.location.librarySection = item.libraryLocation.librarySection;
            book.location.shelfSection = item.libraryLocation.shelfSection;
            book.location.shelf = item.libraryLocation.shelf;
            return book;
        }

        private parseBooks(items:any) {
            var books: LibraryApp.Models.Book[] = [];
            for (var i = 0; i < items.length; ++i) {
                var book = this.parseBook(item);
                books.push(book);
            }
            return books;
        }

        private parseCustomer(item:any) {
            var customer = new LibraryApp.Models.Customer();
            customer.firstname = item.firstname;
            customer.lastname = item.lastname;
            customer.address = item.address;
            customer.email = item.email;
            customer.phone = item.phone;
            return customer;
        }

        private parseOverdueBooks(items:any) {
            var overdueBooks: LibraryApp.Models.OverdueBook[] = [];
            for (var i = 0; i < items.length; ++i) {
                var item = items[i];
                var overdue = new LibraryApp.Models.OverdueBook();
                overdue.book = this.parseBook(item.book);
                overdue.customer = this.parseCustomer(item.customer);
                overdue.duration = item.duration;
                overdue.rentedTimestamp = item.rentedTimestamp;
                overdue.rentedText = new Date(item.rentedTimestamp).toDateString();
                overdue.isReturned = item.isReturned;
                overdue.isOverdue = item.isOverdue;
                overdue.expectedBackInDays = item.expectedBackInDays;
                overdue.expectedBackDate = item.expectedBackDate;
                overdue.expectedBackText = new Date(item.expectedBackDate).toDateString();
                overdue.expectedBackDateText = item.expectedBackDateText;
                overdue.expectedBackInDaysText = item.expectedBackInDaysText;
                overdueBooks.push(overdue);
            }
            return overdueBooks;
        }
    }   

    factory.$inject = ['$http', 'appSettings'];
    function factory($http: ng.IHttpService, appSettings) : IBookService {
        return new BookService($http, appSettings);
    }

    app.factory('bookService', factory);
}