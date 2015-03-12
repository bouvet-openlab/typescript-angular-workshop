# TypeScript and AngularJS

### Get repository

- Clone this repo `git clone https://github.com/bouvet-openlab/typescript-angular-workshop.git` or download as .zip `https://github.com/bouvet-openlab/typescript-angular-workshop/archive/master.zip` 

### Start website and compile TypeScript files

#### Requirements

- Requires that `NodeJS` is installed on the computer. 

	Install nodejs at [http://nodejs.org/](http://nodejs.org/)

- Requires that `gulp` is installed globally on the computer.

	Install `gulp` by doing command: `npm install --global gulp`

- Requires that `http-server` is installed globally on the computer.

	Install `http-server` by doing command: `npm install --global http-server`

#### To run the gulp targets

1. In a terminal, go to <root-of-repository>\LibraryApp (e.x.: c:\dev\typescript-angular-workshop\LibraryApp)

2. Do command: `npm install`. This will read the dependencies in `package.json` and download them.

3. Do command: `gulp`. This will run the default gulp build target (iterate through all sub directories and compile TypeScript files into JavaScript). By browsing `\src\app\` and subfolders, there should now be a `.js` and `.js.map` file for each `.ts` file.

4. Do command: `http-server src`. This will start a http server in the `src` directory. The website should be running at `http://localhost:8080`
	
In a separate console window (in same directory as `#1` above)

5. Do command: `gulp watch`. Gulp will now *watch for typescript file changes in all sub directories* and compile to javascript automatically.

6. Open an IDE and start coding!

---

### Application description

LibraryApp is a tool for managing a library (the ones with books). The app has two sides. One is public, where library guests/customers can search for books and see where the book is located in the library. The other side is for librarians/employees to do administrative tasks.

The purpose of the application is mainly:

- To **keep a registry** of all books in the library at any given time.
- To **search for books** and their location in the library.
- To see **who is renting a book** and for how long.
- To **handle the checkout process** of renting a book
- To **handle the checkin process** of receiving a rented book.

### The back end

You don't need to implement anything on the server. Everything you need is available at the open-for-all REST API **[Open Mock API](http://openmockapi.azurewebsites.net/)**. Navigate to the `Library Context` and read the documentation for the endpoints provided. 

### Features to implement

1. Implemented as reference: Anyone can search for books by entering the book title or author. An empty search returns all books.
2. Anyone can search for where in the library a book is located by the book's ID or name.
3. Admin can see a list of overdue rentals.
4. Admin can check out a book for a customer by entering the book's ID and the customer's information.
5. Admin can check in a book for a customer by entering the book's ID.
6. Admin can enter a new book into the library by entering the book's basic information.
7. Admin can delete a book from the library by searching for it in the admin part of the website and pressing a delete button next to the book he wants to delete.
8. Admin can update properties (name, author, library location, library category, etc) on a existing book.

**Getting started**

It may be difficult to jump in and get started right away. To make this easier, there is a basic fill-in-the-blanks framework in place in the code to do feature #2 (search for where in the library the book is located).

Please follow the mini-tutorial below if you want some start help.

<p style="font-weight: bold">1. Verify local app is running</p>
With `http-server` running (see top), navigate to [http://localhost:8080/#/public](http://localhost:8080/#/public) and click the `search` button. A list of books should be displayed with a column for *Title* and *Author*. Our goal is to add a third column with the *Location* of the book in the library.

<p style="font-weight: bold">2. Inspect server API endpoints</p>
By navigating to the [REST API documentation for retrieving All Books](http://openmockapi.azurewebsites.net/Help/Api/GET-library-book) and [invoking the endpoint](http://openmockapi.azurewebsites.net/library/book) which provides the `search` functionality with data, we see that each book has a `libraryLocation` object.

```javascript
A Book object as returned by the server

{
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "nrInStock": 5,
    "inStock": true,
    "libraryLocation": {
      "librarySection": "Fiction",
      "shelfSection": "I-P",
      "shelf": 3
    }
  }

```
<p style="font-weight: bold">3. Open app in IDE</p>
Open the `LibraryApp` folder in your IDE. If your IDE lists `.js` and `.js.map` files, ignore these. We will only work with `.ts` files. 

<p style="font-weight: bold">4. Locate the files to change</p>
The search functionality is an Angular directive, located in `\src\app\directives\searchBooks*.*`. It gets its data from the `bookService` service, located in `src\app\services\bookService.ts`. Open this file.

<p style="font-weight: bold">5. Review the existing code: bookService.ts</p>
The file holds an interface which defines the service, and the service itself. The service requires two services to be injected in by Angular: `$http` and `appSettings`. It returns an object that has two functions, `getAllBooks` and `searchTitlesAndAuthors`. Note in the interface that both functions returns the type `ng.IHttpPromise<LibraryApp.Models.Book[]>`, in plain english: a promise that when resolved, returns an array of books.

<p style="font-weight: bold">6. Review the existing code: book.ts</p>
Let's inspect the `Book` model. Open `app\models\book.ts`. This is the model that is displayed on the screen that we need to add the location to.