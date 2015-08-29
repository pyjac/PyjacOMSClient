'use strict';
// this will have all of the normal fs methods
var fs = require('fs.extra');

// browserify
var browserify = require('browserify');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    minifyCSS = require('gulp-minify-css'),
    
// Modules for webserver and livereload
 express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;
// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({
    port: livereloadport
}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendfile('index.html', {
        root: 'dist'
    });
});
//Pyjac task
gulp.task('pyjac', ['clean' ,'minify-css','browserifyDist','copy-html-files','browserifyDistLogin','copy-image-files','copy-bower-components','connectDist'], function() {});


//Pyjac task
gulp.task('pyjacJs', ['cleanDistJs' ,'browserifyDist','browserifyDistLogin','connectDist'], function() {});

// Dev task
gulp.task('dev', ['clean', 'views', 'styles', 'lint', 'browserify'], function() {});
// Clean task
gulp.task('clean', function() {
    fs.rmrfSync('./dist/');
    /*gulp.src('./dist/*')
      .pipe(rimraf({force: true}));*/
});

gulp.task('cleanDistJs', function() {
    fs.rmrfSync('./dist/js/');
    fs.rmrfSync('./dist/js/login.js');
    /*gulp.src('./dist/*')
      .pipe(rimraf({force: true}));*/
});


//copy bower components to dist
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

//connect Dist
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 8999
  });
});
//browserify Task
gulp.task('browserifyDist', function() {
     return browserify('./app/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        
        .pipe(source('bundled.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/js'));
   
});
gulp.task('browserifyDistLogin', function() {
 return browserify('./app/Login/login.js')
        .bundle()
        
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('login.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/Login'));
    });
// JSHint task
gulp.task('lint', function() {
    gulp.src(['app/**/*.js','!./app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
// Styles task
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
   gulp.src(['./app/**/*.png', '!./app/bower_components/**'])
    .pipe(gulp.dest('./dist/'))
  
});
// copy-html-files
gulp.task('copy-html-files', function () {
  gulp.src(['./app/**/*.html','!./app/bower_components/**'])
    .pipe(gulp.dest('dist/'));
});

// copy-image-files
gulp.task('copy-image-files', function () {
  gulp.src(['./app/img/**',])
    .pipe(gulp.dest('dist/img'));
});
// Browserify task
gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
    gulp.src(['app/scripts/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
    // Bundle to a single file
    .pipe(concat('bundle.js'))
    // Output it to our dist folder
    .pipe(gulp.dest('dist/js'));
});
// Views task
gulp.task('views', function() {
    // Get our index.html
    gulp.src('app/index.html')
    // And put it in the dist folder
    .pipe(gulp.dest('dist/'));
    // Any other view files from app/views
    gulp.src('app/views/**/*')
    // Will be put in the dist/views folder
    .pipe(gulp.dest('dist/views/'));
});

gulp.task('watchPyjac', function() {
    // Watch our scripts, and when they change run lint and browserify
    gulp.watch(['app/*.js', 'app/**/*.js','!./app/bower_components/**'], [
        'pyjac'
    ]);
    
    gulp.watch(['app/**/*.html'], [
        'pyjac'
    ]);
    
});
gulp.task('watch', ['lint'], function() {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);
    // Watch our scripts, and when they change run lint and browserify
    gulp.watch(['app/*.js', 'app/**/*.js','!./app/bower_components/**'], [
        'lint',
        'browserify'
    ]);
    
    gulp.watch(['app/**/*.html'], [
        'copy-html-files'
    ]);
    gulp.watch('./dist/**').on('change', refresh.changed);
});
gulp.task('default', ['dev', 'watch']);