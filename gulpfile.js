/**
 * Initialization of dependency.
 */
const gulp = require("gulp");

/**
 * Initialistion of gulp plugins.
 */
const JsBeautifier = require("gulp-jsbeautifier");

/**
 * This task makes the code cleaner for the entire project.
 */
gulp.task("beautifier", function() {
	gulp.src(['./**/*.js'])
		.pipe(JsBeautifier({
			js: {
				indent_char: "\t",
				indent_size: 1
			}
		}))
		.pipe(gulp.dest("./"));
});