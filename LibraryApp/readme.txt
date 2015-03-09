To compile TypeScript with gulp
================================================


Requirements
------------------------------------------------
- Requires that node (npm) is installed on the computer. You can test this by typing "npm" into a commandline. 
	Install nodejs at http://nodejs.org/ or through a package manager.

- Requires that gulp is installed globally on the computer. You can test this by typing gulp into a commandline.
	Install gulp by doing command: npm install --global gulp

- Requires that http-server is installed globally on the computer.
	Install http-server by doing command: npm install --global http-server

To run the solution-specific gulp target
------------------------------------------------
1. Open command line at same directory where this readme file is located.

2. Do command: npm install
	This will read the dependencies in package.json and download them.

3. Do command: gulp
	This will run the "default" gulp build target (which is the only one configured)
	By browsing \Source\LibraryApp\App\ and subfolders, there should now be a .js and .js.map file for each .ts file.

4. Do command: http-server src
	This will start a http server in the src directory. The website should be running at http://localhost:8080
	
In a separate console window:

5. Do command: gulp watch
	This will start watching for typescript file changes and compile to javascript automatically

6. Done!