/// <reference path="../references.ts" />

module LibraryApp.Services {

    export interface IBookService {
        getAllBooks(): ng.IHttpPromise<LibraryApp.Models.Book[]>;
        searchTitlesAndAuthors(query:string): ng.IHttpPromise<LibraryApp.Models.Book[]>;
    }

    var bookService = ($http: ng.IHttpService, appSettings): IBookService => {

        return {
            
            getAllBooks: () => {
                return $http.get(appSettings.apiUrl + "book");
            },

            searchTitlesAndAuthors: (query: string) => {

                query = (query === undefined || query === null)
                    ? ''
                    : decodeURIComponent(query.toLowerCase());

                return $http.get(appSettings.apiUrl + "book/search?query=" + query);
            }

        }

    }

    app.factory('bookService', bookService);

}