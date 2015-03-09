# TypeScript and AngularJS

### Start website and compile TypeScript files

#### Requirements

- Requires that `node (npm)` is installed on the computer. You can test this by typing `npm` into a commandline. 

	Install nodejs at [http://nodejs.org/](http://nodejs.org/)

- Requires that `gulp` is installed globally on the computer. You can test this by typing `gulp` into a commandline.

	Install `gulp` by doing command: `npm install --global gulp`

- Requires that `http-server` is installed globally on the computer.

	Install `http-server` by doing command: `npm install --global http-server`

#### To run the gulp targets

1. Open command line at the same directory where this readme file is located.

2. Do command: `npm install`. This will read the dependencies in `package.json` and download them.

3. Do command: `gulp`. This will run the default gulp build target. By browsing `\src\app\` and subfolders, there should now be a `.js` and `.js.map` file for each `.ts` file.

4. Do command: `http-server src`. This will start a http server in the `src` directory. The website should be running at `http://localhost:8080`
	
In a separate console window (also in the same directory as where this readme file is located):

5. Do command: `gulp watch`. Gulp will now *watch for typescript file changes* and compile to javascript automatically.

6. Open an IDE and start coding!

---

### Application description

LibraryApp is a tool for managing a library (the ones with books). The app has two sides. One is public, where library guests/customers can search for books and see where the book is located in the library. The other side is for librarians/employees to do administrative tasks.

The tasks of the application is mainly:

- To **keep a registry** of all books in the library at any given time.
- To **search for books** and their location in the library.
- To give information about **who is renting a book** and for how long.
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

It may be difficult to jump in and get started right away. To make it easier, there is a basic fill-in-the-blanks framework in place in the code to do feature #2 (search for where in the library the book is located).

Please follow the mini-tutorial below.

