const  gulp = require("gulp");
const  concat = require("gulp-concat");
const  browserSync = require("browser-sync").create();

const  scripts = require("./scripts"); // include scripts.json (No need to mention .json in the funtion)
const  styles = require("./styles");

var devMode = false;

gulp.task('css',function(){
	gulp.src(styles)
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream : true
		}));

});

gulp.task('js',function(){
	gulp.src(scripts)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({
			stream : true
		}));

});


gulp.task('html',function(){
	gulp.src(["./src/templates/**/*.html","./index.html"])
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream : true
		}));

});


gulp.task('clean',function(){
	gulp.start(['css','js','html']);

});



gulp.task('browserSync',function(){
	browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});



gulp.task('serve',function(){
	devMode = true;
	gulp.start(['clean','browserSync']);
	gulp.watch(styles,['css']);
	gulp.watch(scripts,['js']);
	gulp.watch(['./src/templates/**/*.html'],['html']);
});
