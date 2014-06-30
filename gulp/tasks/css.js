var gulp = require('gulp');

gulp.task('css', function() {
	return gulp.src('src/css/**')
		.pipe(gulp.dest('build/css'));
});
