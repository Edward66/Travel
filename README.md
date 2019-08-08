# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 打包
运行npm run build会自动打包编译，打包编译的dist目录就是上线的内容

## 配置
index.js里的assetsPublicPath: '/', 可以配置项目运行的目录。如：/project，就是localhost/project访问项目。

## 打包后的文件
manifest.js是wenpack打包生成的配置文件
verdor.js是各个页面和组件公用的代码
app.js是项目各个页面的业务逻辑代码



