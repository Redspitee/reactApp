# React + Redux + React-router + Koa + mongoDB 项目构建

下载本项目后

```
	yarn install
	yarn start 
	node koaServer/index.js
```


本项目是以下流程的产物
#### 项目搭建

1. 新建react项目
   
```
   create-react-app myapp
```
2. Npm镜像 

```     
   npm config set registry https://registry.npm.taobao.org --global
   npm config set disturl https://npm.taobao.org/dist --global
```
3. 暴露配置

```     
   npm run eject  
```
4. 安装按需引入插件 

```     
   yarn add babel-plugin-import --save-dev
```
5. 安装antd-mobile脚手架

``` 
   yarn add antd-mobile --save-dev 
```  
6. 实现按需引入antd-mobile：在package.json "plugins" 数组里添加
```
   ["import", {libraryName: "antd-mobile", style: 'css'}] 
```
#### 引入Redux
1. 安装 react-redux redux redux-thunk插件

```     
   yarn add react-redux redux redux-thunk
```
2. 浏览器安装react、redux开发者工具,可在浏览器调试页面状态。

``` 
   安装redux工具：https://github.com/reduxjs/redux-devtools
   const store = createStore(reducerName,compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
   ))
```
3. 多个reducer合并在一起。 

```
   import {combineReducer} from 'redux'
   combineReducer({reducer1,reducer2})     
```
3. 安装@connect 装饰器 依赖 ,在package.json "babel"对象中加入如下代码

``` 
   yarn add babel-plugin-transform-decorators-legacy --save-dev
   + ["plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]]
```
4. 引入Provider  把 store 统一提供给其子组件

```
	import { Provider } from 'react-redux';
	<Provider store={store}></Provider>
```
#### 引入React-router4
1. 安装react-router

```     
   yarn add react-router-dom
```
2. 项目里使用router

```     
   import {BrowserRouter,Route,Link} from 'react-router-dom'  
```
3. react-router组件作用

```     
   <Redirect from='/a' to="/b" ></Redirect>当用户访问a页面时会自动跳到b页面
   当前页面未匹配到<Redirect /> 之前路由会执行Redirect
   <Switch>只渲染命中的第一个路由
   <Route exact /> exact绝对匹配
   <Route path='/a/:num' /> 在访问路由'/a/5'时，可在a页面this.props.match.params中获取到{num:5}
``` 
#### 跨域配置 在package.json中设置

```    
   "proxy":"http://ip:port"
```
#### Koa2搭建后台服务器
1. 安装koa 及 koa-router

``` 
 	yarn add koa koa-router
``` 
2. 创建路由

```
	const router = new Router()
	router.get('/user', ctx => {
		ctx.body = {
			username: '张小月',
			age: '18'
		}
	})
```
3. 监听端口

```
	const app = new Koa()
	app.listen(9093)
```




    

