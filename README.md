# TypeScript and AngularJS

### Get repository

- Clone this repo: `git clone https://github.com/bouvet-openlab/typescript-angular-workshop.git` or [download as .zip](https://github.com/bouvet-openlab/typescript-angular-workshop/archive/master.zip). 

### Start website and compile TypeScript files

#### Requirements

- Requires that `NodeJS` is installed on the computer. 

	Install nodejs at [http://nodejs.org/](http://nodejs.org/)

- Requires that `gulp` is installed globally on the computer.

	Install `gulp` by doing command: `npm install --global gulp`

- Requires that `http-server` is installed globally on the computer.

	Install `http-server` by doing command: `npm install --global http-server`

#### To run the gulp targets

1. In a terminal, go to `<root-of-repository>\LibraryApp` (e.x.: `c:\dev\typescript-angular-workshop\LibraryApp`)

2. Do command: `npm install`. This will read the dependencies in `package.json` and download them.

3. Do command: `gulp`. This will run the default gulp build target (iterate through all sub directories and compile TypeScript files into JavaScript). By browsing `\src\app\` and subfolders, there should now be a `.js` and `.js.map` file for each `.ts` file. Explore the `gulpfile.js` for more details.

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

[The Wiki's Features overview page](https://github.com/bouvet-openlab/typescript-angular-workshop/wiki/Features-overview) has more details about what you need to implement.