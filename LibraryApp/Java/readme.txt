To compile TypeScript with gulp
================================================


Requirements
------------------------------------------------
- Requires that node (npm) is installed on the computer. You can test this by typing "npm" into a commandline. 
	Install nodejs at http://nodejs.org/ or through a package manager.

- Requires that gulp is installed globally on the computer. You can test this by typing gulp int a commandline.
	Install gulp by doing command: npm install --global gulp

- Requies that Maven is installed on the computer and available on PATH. If you don't have Maven, you need to install it from http://maven.apache.org/ and follow their instructions

To run the solution-specific gulp target
------------------------------------------------
1. Open command line at same directory where this readme file is located.

2. Do command: npm install
	This will read the dependencies in package.json and download them.

3. Do command: gulp
	This will run the "default" gulp build target (which is the only one configured)

4. Do command: gulp watch
	This will start watching for typescript file changes and compile to javascript automatically

5. Done!


To run the java project
------------------------------------------------
1. In the /libraryapp folder where the pom.xml file is located, open console

2. Do command: mvn clean install tomcat:run