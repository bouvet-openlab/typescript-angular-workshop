/// <reference path="../references.ts" />

module LibraryApp.Services {

    export interface IBookService {
        getAllBooks(): ng.IHttpPromise<LibraryApp.Models.Book[]>;
        searchTitlesAndAuthors(query: string): ng.IHttpPromise<LibraryApp.Models.Book[]>;
        deleteBook(book: LibraryApp.Models.Book);
    }

    var bookService = ($http: ng.IHttpService, appSettings, $cookies): IBookService => {

        return {
            
            getAllBooks: () => {
                return $http.get(appSettings.apiUrl + "book");
            },

            searchTitlesAndAuthors: (query: string) => {

                query = (query === undefined || query === null)
                    ? ''
                    : decodeURIComponent(query.toLowerCase());

                return $http.get(appSettings.apiUrl + "book/search?query=" + query);
            },

            deleteBook: (book: LibraryApp.Models.Book) => {

                $cookies.test = 'hei der';

                var cookies = $cookies;
                console.log(cookies);

                return $http({
                    method: 'DELETE',
                    url: appSettings.apiUrl + "book",
                    params: {
                        id: book.id
                    },
                    xsrfHeaderName: 'libraryApp1',
                    xsrfCookieName: 'libraryApp2'
                });
            }

        }

    }

    app.factory('bookService', bookService);

}