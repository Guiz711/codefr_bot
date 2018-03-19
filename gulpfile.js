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
	return gulp.src(['./**/*.js', './**/*.json', '!./node_modules/**'])
		.pipe(JsBeautifier({
			js: {
				indent_char: "\t",
				indent_size: 1
			},
			json: {
				indent_char: "\t",
				indent_size: 1
			}
		}))
		.pipe(gulp.dest("./"));
});

/**
 * This task verify the code cleaner for the entire project.
 */
gulp.task("verify", function() {
	return gulp.src(['./**/*.js', './**/*.json', '!./node_modules/**'])
		.pipe(JsBeautifier.validate({
			js: {
				indent_char: "\t",
				indent_size: 1
			},
			json: {
				indent_char: "\t",
				indent_size: 1
			}
		}))
		.pipe(JsBeautifier.reporter({
			js: {
				indent_char: "\t",
				indent_size: 1
			},
			json: {
				indent_char: "\t",
				indent_size: 1
			}
		}))
		.pipe(gulp.dest("./"));
});