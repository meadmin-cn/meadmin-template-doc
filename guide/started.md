# 快速上手

## 依赖环境
- [nodejs v16+](https://nodejs.org/en/)

## 快速开始
- clone 代码
    ::: warning 注意
    如果想使用基础模板，请切换为template分支   
    :::
  ``` sh
   git clone https://github.com/meadmin-cn/meadmin-template.git 
  ```
- 安装依赖
  ``` sh
    cd meadmin-template
    npm install
  ```
- 本地运行
  ``` sh
    npm run dev
  ```
- 打包
  ``` sh
    npm run build
  ```

## 目录说明
```
.
├── dist 打包文件夹
├── mock mock文件夹
├── plugin vite插件
├── public 公共静态资源目录
├── src  主目录
│   ├── api 接口文件
│   ├── assets 资源文件
│   │   └── images 项目存放图片的文件夹
│   ├── components 公共组件（里面的组件会自动引入）
│   ├── config 配置文件夹
│   │   ├── index.ts 配置入口文件
│   │   ├── locale.ts 国际化配置
│   │   ├── login.ts  登录配置
│   │   └── theme.ts  主题配置
│   ├── directives 指令（里面的指令会自动引入）
│   ├── dict  字典
│   ├── event 事件
|   ├── hooks 公共hooks
│   ├── icons 图标
│   │   ├── svg  svg图标文件夹（放入此文件夹的svg会被自动注册图标组件）
│   │   └── index.ts 图标自动注册入口文件
│   ├── layout 布局文件
│   ├── locales  国际化
│   │   └── lang 全局语言包
│   ├── router  路由配置
│   │   ├── guard 路由全局守卫
│   │   └── routes 动态路由存放目录
|   ├── styles 样式文件 
│   ├── store  pinia文件夹
│   ├── utils  工具类
│   ├── views  页面
│   └── main.ts 入口文件
├── template自动生成模板
├── types  类型文件
└── vite.config.ts vite配置文件
```

