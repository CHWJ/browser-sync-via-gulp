var gulp        = require('gulp');
// Create a Browsersync instance
var browserSync = require('browser-sync');
var bs = browserSync.create();
var htmlFiles = "D:/Code/IPOP/ipop-web/src/main/resources/templates/**/*.html";
var cssFiles = "D:/Code/IPOP/ipop-web/src/main/resources/templates/**/*.css";
var jsFiles = "D:/Code/IPOP/ipop-web/src/main/resources/templates/**/*.js";
var exisitStr = "src\\main\\resources";
var replaceStr = "target\\classes";
var cssWatcher = null;
var htmlWatcher = null;
var jsWatcher = null;

gulp.task('start', function () {
	return start();
});

gulp.task('exit', function () {
	return exit();
});


function start() {
	// Now init the Browsersync server
	bs.init({
	    proxy: "http://127.0.0.1:10089",
	    port:20089,
	    // 延时
	    reloadDelay:2000
	}, function (err, bs) {
		if(bs.active===true){
			console.log("bs已启动。");

			watch();
		}
	});
}

function watch() {
	console.log("监听文件变化开始……");

	cssWatcher = gulp.watch(cssFiles).on('change', function(path, stats) {
	   copyfileFrom(path);
	});

	htmlWatcher = gulp.watch(htmlFiles).on('change', function(path, stats) {
	   copyfileFrom(path);
	});

	jsWatcher = gulp.watch(jsFiles).on('change', function(path, stats) {
	   copyfileFrom(path);
	});
}

function copyfileFrom(path) {
	//var exisit = path.indexOf(exisitStr) > -1;
	    //console.log(`是否存在： ${exisit} `);
	 var target = path.replace(exisitStr,replaceStr);
	    var isUnixPath = false;
	    if(target.indexOf("/")>-1){
	    	isUnixPath = true;
	    }
	    if(isUnixPath){
	    	target = target.substr(0,target.lastIndexOf("/") + 1);
	    }else{
	    	target = target.substr(0,target.lastIndexOf("\\") + 1);
	    }
	    gulp.src(path).pipe(gulp.dest(target)).pipe(bs.stream());
	    console.log(`从 ${path} 同步成功！`);

	    //bs.reload();
}

function exit(argument) {
	cssWatcher.close();
	htmlWatcher.close();
	jsWatcher.close();
	bs.exit();
	if(bs.active===false){
		console.log("bs已关闭。");
	}
}