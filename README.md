# browser-sync-via-gulp

使用 `gulp` 复制文件到部署目录，并启用 `browser-sync` 重载HTML/CSS/JS资源

## 已具备功能

- [x] 当文件变化时复制到部署目录
- [x] 如果变化的文件其类型是 `CSS` 文件，则自动重载
- [ ] 如果变化的文件其类型是 `HTML` 文件，则自动重载
- [ ] 如果变化的文件其类型是 `JS` 文件，则自动重载

## 依赖

- `browser-sync: 2.26.7`
- `gulp: 4.0.2`

## 配置与启动

1. `gulpfile.js`
   - `htmlFiles`、`cssFiles`、`jsFiles` 配置为对应glob
   - `exisitStr`、`replaceStr` 配置为对应路径
   - 第 `26` 行配置为代理网址；第 `27` 行配置为代理端口
2. 在根目录下用命令行执行 `gulp start`

## 运行截图

![截图](/images/20191201135840.png)

## 参考资料

- [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp)
