# React + Redux + React-router 项目构建

#### 项目搭建

1. 新建react项目
   - `create-react-app myapp`
2. Npm镜像 
   - `npm config set registry https://registry.npm.taobao.org --global`
   - `npm config set disturl https://npm.taobao.org/dist --global`
3. 暴露配置
   - `npm run eject`
4. 安装按需引入插件 
   - `yarn add babel-plugin-import --save-dev`
5. 安装antd脚手架
   - `yarn add antd --save-dev`     
6. 实现按需引入antd：在congif文件夹下webpack.config.js中(约350行)，loader: require.resolve('babel-loader')的对象plugins数组里加
   - `["import", {libraryName: "antd", style: 'css'}]` 
#### 引入Redux
1. 安装 react-redux redux redux-thunk插件
   - `yarn add react-redux redux redux-thunk`
2. 浏览器安装react、redux开发者工具,可在浏览器调试页面状态。
   - `安装redux工具：https://github.com/reduxjs/redux-devtools`
   - `const store = createStore(reducerName,compose(`
        `applyMiddleware(thunk),`
        `window.devToolsExtension ? window.devToolsExtension():f=>f`
     `))`
3. 多个reducer合并在一起。 
	 - `import {combineReducer} from 'redux';`
	 - `combineReducer({reducer1,reducer2})`
3. 安装@connect 装饰器 依赖 ,在package.json "babel"对象中加入如下代码
   - `yarn add babel-plugin-transform-decorators-legacy --save-dev`
   - `+ ["plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]]`
#### 引入React-router4
1. 安装react-router
   - `yarn add react-router-dom`
2. 项目里使用router
	 - `import {BrowserRouter,Route,Link} from 'react-router-dom'`
3. react-router组件作用
	- `<Redirect from='/a' to="/b" ></Redirect>当用户访问a页面时会自动跳到b页面`
	- `当前页面未匹配到<Redirect /> 之前路由会执行Redirect` 
	- `<Switch>只渲染命中的第一个路由`
	- `<Route exact /> exact绝对匹配`
	- `<Route path='/a/:num' /> 在访问路由'/a/5'时，可在a页面this.props.match.params中获取到{num:5}` 

    

