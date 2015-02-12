var gulp = require('gulp');

var compileTypeScript = function(){

	// gulp-tsb plugin: "A gulp plugin for very fast TypeScript compilation"
	// https://www.npmjs.com/package/gulp-tsb/

	var tsb = require('gulp-tsb');
    
    // The options object take properties equivalent to the commands you see when typing "tsc" or "tsc --help" in the console
    
    var compilation = tsb.create({
        target: 'es5', 			// Equivalent to the command "tsc --target <version>"
        module: 'commonjs',		// Equivalent to the command "tsc --module <kind>"
        declaration: false,		// Equivalent to the command "tsc --declaration"
        sourceMap: true			// Equivalent to the command "tsc --sourceMap"
    });

	return gulp.src('Source/**/*.ts')
            .pipe(compilation()) // <- new compilation 
            .pipe(gulp.dest(''));

}

var compileMSBuild = function(){

    // gulp-msbuild: "msbuild plugin for gulp. Inspired by grunt-msbuild."
    // https://www.npmjs.com/package/gulp-msbuild

    var msbuild = require("gulp-msbuild");
 
    return gulp.src("Source\\LibraryApp.sln")
            .pipe(msbuild({
                stdout: true,
                stderr: true,
                targets: ['Clean', 'Build'],
                toolsVersion: 12.0
            }));

}

var restoreNuGetPackages = function(){

    // gulp-shell: "A handy command line interface for gulp"
    // https://www.npmjs.com/package/gulp-shell

    var shell = require('gulp-shell')

    var currentPath = process.cwd();
    var nugetRestoreCommand = currentPath + '\\Source\\.nuget\\NuGet.exe restore ' + currentPath + '\\Source\\LibraryApp.sln';

    return gulp.src('').pipe(shell([nugetRestoreCommand]));
}

gulp.task('default', function() {

    // Run with: "gulp" or "gulp default"
  
	compileTypeScript();

});

gulp.task('full', function() {
  
    // Run with: "gulp full"

    restoreNuGetPackages();

    compileMSBuild();

    compileTypeScript();

});

gulp.task('watch', ['default'], function(){

    // Will watch all TypeScript files for changes (triggers on file save).
    // Runs the 'default' gulp target when changes occur (compiles TypeScript)

    // Run with: "gulp watch"

    gulp.watch('Source/LibraryApp/App/**/*.ts', ['default']);

});