If you want to do changes in the cheat sheet and inspect the compiled javascript, you can either compile
manually in a commandline or run the default `gulp` target or `gulp watch` that will listen for file changes.

# Requirements

- Requires that `NodeJS` is installed on the computer. 

	Install nodejs at [http://nodejs.org/](http://nodejs.org/)

- Requires that `gulp` is installed globally on the computer.

	Install `gulp` by doing command: `npm install --global gulp`

# To run the gulp targets

1. In a terminal, go to `<root-of-repository>\CheatSheet` (e.x.: `c:\dev\typescript-angular-workshop\CheatSheet`)

2. Do command: `npm install`. This will read the dependencies in `package.json` and download them.

3. Do command: `gulp watch`. Gulp will now *watch for typescript file changes in all sub directories* and compile to javascript automatically.

4. Play around with the cheat sheet