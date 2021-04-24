# 搭建极简个人静态博客网站
<!-- ---
title: 极简搭建个人静态博客网站
sidebar: auto
sidebarDepth: 2
--- -->

::: tip 友情提示
<!-- 有阅读障碍的同学，可以跳过第一至四节，下载我写好的[工具包](https://github.com/zhangyunchencc/vuepress-devkit.git):  -->
如果对代码不够熟悉，可以 <a href="https://github.com/zhangyunchencc/vuepress-devkit.git">下载</a> 我写好的脚手架然后从第五节开始看。
:::

## 一、什么是 VuePress

使用技术栈：VuePress

**VuePress** 是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 [VuePress中文网](https://vuepress.docschina.org/)

## 二、为什么要使用 VuePress
其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 Github-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 之前一直在用，但一直觉得主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~ 

VuePress 有很多优点：
- 界面简洁优雅（个人感觉比 HEXO 好看）
- 容易上手（半小时能搭好整个项目）
- 更好的兼容、扩展 Markdown 语法
- 响应式布局，PC端、手机端
- Google Analytics 集成
- 支持 PWA

## 三、开始搭建
#### 创建项目文件夹
可以右键手动新建，也可以使用 mkdir 命令新建：
```bash
  mkdir myblog
```
#### 全局安装 VuePress
```bash
  npm install -g vuepress
```
#### 进入 myblog 文件夹，初始化项目
使用 `npm init` 或 `npm init -y`（默认yes）
```bash
  npm init -y
```
#### 创建文件夹和文件
在 myblog 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹 和 README.md文件，在.vuepress中创建 public 文件夹和 config.js，最终项目结构如下所示：

如果以点开头的文件夹创建不了或者不会创建可以用命令创建`mkdir .vuepress`

    myblog
    ├─── docs
    │   ├── README.md
    │   └── .vuepress
    │       ├── public
    │       └── config.js
    └── package.json


#### 在 config.js 文件中配置网站标题、描述、主题等信息

```js
module.exports = {
  title: 'my blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '理想', link: '/accumulate/' },
      {text: '姑娘', link: '/algorithm/'},
      {text: '远方', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
```

#### 在 package.json 文件里添加两个启动命令
```json
"scripts": {
  "start": "vuepress dev docs",
  "build": "vuepress build docs"
}
```
#### 在README.md文件中加如下面内容（这些是官方默认首页）
```markdown
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

#### 到此基础搭建就完成了 :tada: 执行以下跑起来看看吧
```bash
  npm run dev
```

## 四、一些小tips

完成了基础搭建后，就可以在docs目录下新建 `.md` 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里给大家一份 [Markdown 语法整理大集合](https://www.jianshu.com/p/b03a8d7b1719)）

如果真心是不会用markdown语法的给大家推荐一个软件吧，可以用typora来写，这是一个轻量级的markdown文件编辑器，颜值也很nice

#### 代码块高亮
在 .md 文件中书写代码时，可在 ``` 后增加 js、html、json等格式类型，代码块即可按照指定类型高亮

代码：

<pre class="language-text"><code>``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```</code></pre>

效果：
``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
#### 自定义容器

代码：

    ::: tip 提示
    this is a tip
    :::

    ::: warning 注意
    this is a tip
    :::

    ::: danger 警告
    this is a tip
    :::

效果：
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

#### 支持 Emoji
代码：

    :tada: :100: :bamboo: :gift_heart: :fire:

效果：
:tada: :100: :bamboo: :gift_heart: :fire:

:point_right: 这里有一份 [Emoji 大全](https://www.webpagefx.com/tools/emoji-cheat-sheet/) 


## 五、部署上线
说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。

一般来说，有两种方案可供选择：
1. 自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录，坏处是要花钱啊 :moneybag: 土豪同学可以考虑。
2. 使用 [Github Pages](https://pages.github.com/) 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。

这里给大家讲解一下第二种方案

#### 新建仓库： USERNAME.github.io （不用克隆到本地）

<b>！！！注意：USERNAME 必须是你 Github 的账号名称，不是你的名字拼音，要保证和Github账号名一模一样！</b>

例如我的 Github 账号名称是 renquanxi

那么新建仓库，Repository name 就填写为：renquanxi.github.io

- 使用工具包的，将 [vuepress-devkit](https://github.com/zhangyunchencc/vuepress-devkit.git) 中的内容拷贝到 vuepressBlog 文件夹中

- 自己从头搭建的，将 myBlog 文件夹的内容拷贝到vuepressBlog，并在根目录下创建 deploy.sh 文件，并且把下面的内容拷贝进去

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 回到上次工作的文件夹
cd -
```

#### 修改 deploy.sh 发布脚本
把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 renquanxi，那么就可以改为：

```sh
# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:renquanxi/renquanxi.github.io.git master
```

#### 在 package.json 文件夹中添加发布命令（使用工具包的请忽略）

``` json
"scripts": {
  "deploy": "bash deploy.sh"
}
```

#### :clap: 大功告成，运行发布命令
```bash
  npm run deploy
```
此时打开 Github Settings 中下面的链接: [https://renquanxi.github.io/](https://renquanxi.github.io/) 即可看到自己的主页啦~

