# vuepress踩坑

## 侧边栏的标题显示的是路由
![](https://qinghuansmile.top/iamgeWarehouse/createdBlog/1.png)<br/>

侧边栏的一级标题出不来，显示的是路由；原因是对应的mackdown文件的一级标题前面还有内容，注释也不行如下图<br/>

![](https://qinghuansmile.top/iamgeWarehouse/createdBlog/2.png)<br/>

只需把对应的内容一级标题前面的内容删掉或者移到下面即可<br/>

![](https://qinghuansmile.top/iamgeWarehouse/createdBlog/3.png)<br/>

## 热更新失效
方法一：安装watchpack依赖
```bash 
npm install -D watchpack
```

方法二：修改启动命令：
官网上是这样的
```bash
  $ "dev": "vuepress dev docs"
```

改成这样的即可
```bash
  $ "dev": "vuepress dev docs --temp .temp"
```
这种方法是通过在编译的时候生成一个临时的 .temp, 唯一的缺点，在目录下会多一个文件夹，如果使用git，可以在.gitignore种加入
```
...
.temp
```
这样就可以把这个文件忽略掉了

我个人比较倾向与方法二

## 首页图片显示不出来

因为我们图片默认的入口位置是在public中的，所以我们首页中的配置`heroImage: /image/logo_smile.png`这个图片就是需要在public文件夹下image文件夹下存放的

## 基础路径问题


