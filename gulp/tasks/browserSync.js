var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');

gulp.task('browserSync', ['build'], function() {
	browserSync.init(['./client/build/**'], {
		proxy: {
      host: 'localhost',
      port: config.port,
		}
	});
});
