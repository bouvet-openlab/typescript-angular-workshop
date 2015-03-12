var gulp = require('gulp');

var compileTypeScript = function(){

	// gulp-tsb plugin: "A gulp plugin for very fast TypeScript compilation"
	// https://www.npmjs.com/package/gulp-tsb/

	var tsb = require('gulp-tsb');
    
    // The options object take properties equivalent to the commands you see when typing "tsc" or "tsc --help" in the console
    
    var compilation = tsb.create({
        target: 'es5', 					// Equivalent to the command "tsc --target <version>"
        module: 'commonjs',				// Equivalent to the command "tsc --module <kind>"
        declaration: false,				// Equivalent to the command "tsc --declaration"
        sourceMap: true				// Equivalent to the command "tsc --sourceMap"
		//out: 'src/app/compiled-app.js'	// Equivalent to the command "tsc --out <concatenated .js>. Concatenates all .ts files into one .js"
    });

	return gulp.src('src/**/*.ts')
            .pipe(compilation()) // <- new compilation 
            .pipe(gulp.dest(''));

}

gulp.task('default', function() {

    // Run with: "gulp" or "gulp default"
  
	compileTypeScript();

});

gulp.task('watch', ['default'], function(){

    // Will watch all TypeScript files for changes (triggers on file save).
    // Runs the 'default' gulp target when changes occur (compiles TypeScript)

    // Run with: "gulp watch"

    gulp.watch('src/**/*.ts', ['default']);

});