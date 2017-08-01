var gulp = require('gulp');
var browserSync = require('browser-sync').create(); // 静态服务器

// 浏览器重载
gulp.task('reload', browserSync.reload);

// 使用默认任务启动Browsersync，监听JS文件
gulp.task('default', function() {

    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // 添加 browserSync.reload 到任务队列里
    // 所有的浏览器重载后任务完成。
    gulp.watch("**/js/*.js", ['reload']);
    gulp.watch("**/css/*.css", ['reload']);
    gulp.watch("**/*.html", ['reload']);
});