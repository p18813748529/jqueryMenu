
const gulp = require("gulp"),
connect = require("gulp-connect"),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
cleanCSS = require('gulp-clean-css');

gulp.task("html",function(){
    gulp.src("app/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

gulp.task("css",function(){
    gulp.src("app/**/*.css")
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

gulp.task("js",function(){
    gulp.src("app/**/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

gulp.task("watch",function(){
    gulp.watch("app/**/*.html",["html"]);
    gulp.watch("app/**/*.css",["css"]);
    gulp.watch("app/**/*.js",["js"]);
});

gulp.task("connect",function(){
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task("default",["connect","watch"]);