# reactApp

#### 项目搭建步骤

1. 新建react项目
   `create-react-app myapp`
2. Npm镜像 
    `npm config set registry https://registry.npm.taobao.org --global `
    `npm config set disturl https://npm.taobao.org/dist --global`
3. 暴露配置
    npm run eject
4. 安装按需引入插件 
    yarn add babel-plugin-import --save-dev
5. 安装antd脚手架
    yarn add antd --save-dev     
6. 在congif文件夹下webpack.config.js中，loader: require.resolve('babel-loader')的对象plugins数组里加
    [
      "import",
      {libraryName: "antd", style: 'css'}
    ] 
至此实现按需引入antd
    

