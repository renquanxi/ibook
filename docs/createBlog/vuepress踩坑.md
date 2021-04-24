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

我在本地处理号了以后提交到线上的时候发现在线上展示的有问题，如图

![](https://qinghuansmile.top/iamgeWarehouse/createdBlog/9.png)

明显是数据加载的问题，html都渲染出来了，但是样式和交互都失效了，查看了官方文档以后发现是自己base路径配置的问题，

config中的base指的是部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。

base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。

比如我使用的 GitHub pages的根路径路径是https://renquanxi.github.io，但是我把文件部署到了https://renquanxi.github.io/ibook/上了，而我的根路径还是默认的/那么加载静态资源的时候他还是会去https://renquanxi.github.io/地址去中加载，所以我们需要把根路径配置成/ibook/这样就可以了



