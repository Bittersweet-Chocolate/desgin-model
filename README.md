<!--
 * @Author: your name
 * @Date: 2021-04-12 20:01:35
 * @LastEditTime: 2021-05-17 12:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \desgin-model\README.md
-->
# desgin-model
设计模式code

es6的适配器 使用
### babel-7 配置
当前代码中即为babel-7

### babel-6 配置
```
// package.json
"devDependencies": {
    "babel-core": "6.26.3",
    "babel-loader": "7.1.4",
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "babel-polyfill": "6.26.0",
    "html-webpack-plugin": "3.2.0",
    "webpack": "4.8.3",
    "webpack-cli": "2.1.3",
    "webpack-dev-server": "3.1.4"
  },
  "dependencies": {
    "core-decorators": "^0.20.0"
  }

// babelrc
    "presets": ["es2015", "latest"],
    "plugins": ["transform-decorators-legacy"]  
```  