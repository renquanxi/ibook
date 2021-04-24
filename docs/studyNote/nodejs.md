# Node.js

## 1.Node概述

### 1.1 Node介绍

<!--1.1-概述-Nodejs介绍-->

- Node全名是Node.js，但它不是一个js文件，而是一个软件

- Nodejs是一个基于Chrome V8引擎的ECMAScript的运行环境
- Nodejs可以执行js文件
- Nodejs提供了大量的工具（API），能够让我们完成文件读写、Web服务器创建等功能

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1552614845170.png)

### 1.2 nodejs中的JS和浏览器中的JS的区别

- 安装了浏览器这个软件，它不但可以执行ECMAScript，浏览器这个软件内置了window对象，所以浏览器有处理DOM和BOM的能力。
- 安装了NodeJs这个软件，它不但可以执行ECMAScript，NodeJS这个软件也内置了一些东西，包括全局成员和模块系统。

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/29.png)

### 1.3 为什么要学习Nodejs

在我们熟悉的浏览器上执行JS不是很好吗？为什么还要安装Nodejs，要学习Nodejs呢？主要原因：

- 大前端必备技能
- 使得JS能够和操作系统 “互动”（读写、创建文件等，还可以处理计算机中的进程）
- 为JavaScript提供了服务端编程的能力
    - 文件IO
    - 网络IO
- 了解服务器这个黑盒内部的实现原理
- 了解接口开发
- 进一步理解Web开发

### 1.4 安装Nodejs

<!--1.4-安装-安装Nodejs-->

官网： https://Nodejs.org/en/

中文网：http://Nodejs.cn/

- 版本说明
    - **LTS**： 长期稳定版。 实际项目开发建议使用长期稳定版
    - **Current**： 最新版。最新版包含了一些新功能，如果想学习最新的功能，则可以使用该版本。但是，最新版可能会有一些未知的bug
- 安装
    - 到底选择哪个文件文件
        - node-v10.15.3.pkg
        - node-v10.15.3-x86.msi    --  windows32位系统  （右键我的电脑-->属性，可以查看电脑是32位）
        - node-v10.15.3-x64.msi    --  windows64位系统

1) 双击安装文件开始安装（不同系统选择对应的安装文件）

2) 傻瓜式安装，一路 'next' 即可

3) 测试

在桌面上或者是任意一个文件夹，按住 shift 键 , 点击鼠标右键，选择 '在此处打开命令窗口'

进入黑窗口后输入： `node -v`或`node --version`

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/28.png)

能够看到Nodejs版本号即为安装成功。

### 1.5 node初体验

<!--1.5-体验-在Node环境中执行JS代码和JS文件-->

既然说node安装后，也可以执行JS，那么我们就用node执行一行js代码试试，或者写一个js文件，让node执行以下。

问：如何使用node？

答：使用命令行工具，具体如下

- 执行一行JS代码

    ![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1552616127413.png)

- 执行一个JS文件

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1552616444350.png)

注意事项：

- 输入node回车后，要按两次Ctrl+C，才能回到目录中（Ctrl一直按着不放也可以，松开从新按也可以）
- 执行js文件时，如果当前命令行目录和js文件**不在**同一个盘符下，要先切换盘符
- 执行js文件时，如果当前命令行目录和js文件**在**同一个盘符中，则可以使用相对路径找到js文件并执行
- 体会，此时执行的js代码或文件和浏览器没有任何关系，他们是通过node执行的

## 2. Node学习

### 2.1 前言

<!--2.1-基础-Node知识网介绍-->

前面介绍了node也提供了一种JS的执行环境，确切的说是ECMAScript的执行环境。

node不但可以执行我们学习过的ECMAScript，node还自带了很多全局对象和很多模块。

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1552618083956.png)

### 2.2 全局变量

<!--2.2-基础-Node中的全局变量-->

说明：

- node中有一个全局变量global，是node中最大的一个对象，相当于浏览器中的window对象。

- global中的成员在使用时，可以省略global，这点也类似浏览器中的window

下面介绍几个全局对象global中的成员：

- console，我们在初体验时，使用了console，它可不是浏览器中的console对象，使用的是node中的console
- process，和进程相关的对象
- setInterval，同理，也是node中的，不是浏览器中的
- **require()**，它是全局对象global中的一个方法，用于在js文件中引入另外的文件
- __dirname，当前执行文件的绝对路径（在js文件中使用）
- __filename，当前执行文件的绝对路径，包含文件名（在js文件中使用）

上述成员使用下面的代码进行演示：

01-demo.js

```js
console.log(123);
if (5 > 4) {
    console.log('大于');
}
// alert(234); // 报错，alert is not defined
global.console.log(1234);

global.setTimeout(function () {
    console.log('随便');
}, 2000);

console.log(__dirname); // 表示当前执行的js文件的所在路径
console.log(__filename); // 表示当前执行的js文件所在路径和文件名

// 引入02-demo.js文件
require('./02-demo.js');
```

02-demo.js

```js
console.log('我是02');
```



### 2.3 node核心模块

> 模块是Node.js 平台自带的一套基本的 API(功能模块)。

#### 2.3.1 path模块

<!--2.3.1-基础-path模块-->

> 处理路径的模块

- http://nodejs.cn/api/path.html
- 操作文件的时候经常要对文件的路径做处理，或者获取文件的后缀，使用 `path` 模块。
- `path` 是 Node 本身提供的 API，专门用来处理路径。
- `path` 仅仅用来处理路径的字符串，不一定存在对应的物理文件。

------

- 使用方法

    - 加载模块

        ```js
        // 使用核心模块之前，首先加载核心模块
        let path = require('path');
        // 或者
        const path = require('path');
        ```

    - 调用path模块中的方法，来处理相应的问题，下面列举path模块中的几个方法

        | 方法                       | 作用                             |
        | -------------------------- | -------------------------------- |
        | path.basename(path[, ext]) | 返回 path 的最后一部分(文件名)   |
        | path.dirname(path)         | 返回目录名                       |
        | path.extname(path)         | 返回路径中文件的扩展名(包含.)    |
        | path.format(pathObject)    | 将一个对象格式化为一个路径字符串 |
        | path.join([...paths])      | 拼接路径                         |
        | path.parse(path)           | 把路径字符串解析成对象的格式     |
        | path.resolve([...paths])   | 基于当前**工作目录**拼接路径     |

        > 工作目录：当前运行 Node 程序的目录

        ```js
        const path = require('path');
        
        // extname -- 获取文件后缀
        console.log(path.extname('index.html')); // .html
        console.log(path.extname('index.coffee.md')); // .md
        
        // join -- 智能拼接路径
        console.log(path.join('/a', 'b', 'c')); // \a\b\c
        console.log(path.join('a', 'b', 'c')); // a\b\c
        console.log(path.join('/a', '/b/../c')); // \a\c
        console.log(path.join('/a', 'b', 'index.html')); // \a\b\index.html
        console.log(path.join(__dirname, 'a', 'index.html')); // 得到一个绝对路径
        ```

        

#### 2.3.2 fs模块

<!--2.3.2-基础-fs模块-->

> 文件操作模块

- http://nodejs.cn/api/fs.html
- 文件系统，对文件/文件夹的操作  file system

------

- 使用方法

    - 加载模块

        ```js
        // 引入模块，引入模块的时候，可以使用var、let，但是建议使用const，因为我们不希望它改变
        const fs = require('fs');
        ```

    - 调用fs模块的方法，下面列举fs模块中的常用方法

        | API                                         | 作用              | 备注           |
        | ------------------------------------------- | ----------------- | -------------- |
        | fs.access(path, callback)                   | 判断路径是否存在  |                |
        | fs.appendFile(file, data, callback)         | 向文件中追加内容  |                |
        | fs.copyFile(src, callback)                  | 复制文件          |                |
        | fs.mkdir(path, callback)                    | 创建目录          |                |
        | fs.readDir(path, callback)                  | 读取目录列表      |                |
        | fs.rename(oldPath, newPath, callback)       | 重命名文件/目录   |                |
        | fs.rmdir(path, callback)                    | 删除目录          | 只能删除空目录 |
        | fs.stat(path, callback)                     | 获取文件/目录信息 |                |
        | fs.unlink(path, callback)                   | 删除文件          |                |
        | fs.watch(filename[, options]\[, listener])  | 监视文件/目录     |                |
        | fs.watchFile(filename[, options], listener) | 监视文件          |                |

        ```js
        // readFile -- 异步读取文件
        fs.readFile('./test.json', (err, data) => {
            if (err) {
                console.log('读取文件出错');
            } else {
                console.log(data); // 读取到的二进制数据
            }
        });
        
        fs.readFile('./test.json', 'utf-8', (err, data) => {
            if (err) {
                console.log('读取文件出错');
            } else {
                console.log(data); // 读取到的原始数据
            }
        });
        ```

        ```js
        // writeFile -- 异步写入文件
        fs.writeFile('./abc.html', 'hello world', (err) => {
            if (err) {
                console.log('写入文件失败');
            } else {
                console.log('文件写入成功');
            }
        });
        ```

        

#### 2.3.3 querystring模块

<!--2.3.3-基础-querystring模块-->

> 查询字符串处理模块

- 处理查询字符串（请求参数）的模块

------

- 使用方法

    - 加载模块

        ```js
        const querystring = require('querystring');
        ```

    - 调用querystring模块中的方法

        ```js
        // parse -- 将查询字符串解析成JS对象
        console.log(querystring.parse('id=1&name=zs&age=20')); 
        // { id: '1', name: 'zs', age: '20' }
        
        // stringify -- 将JS对象转成查询字符串
        console.log(querystring.stringify({ id: '1', name: 'zs', age: '20' }));
        // id=1&name=zs&age=20
        ```

#### 2.3.4 url模块

<!--2.3.4-基础-url模块-->

> url模块：处理url
>
> 一个完整的url  协议://主机地址:[端口]/文件地址?参数

- 提供两套处理url的API
- 遗留的API，提供url.parse();方法解析url
- 新的API，通过实例化URL，来解析url

------

- 使用方法

    - 加载模块

        ```js
        const url = require('url');
        ```

    - 遗留API使用方法

        ```js
        let myURL = url.parse('/test.html?id=11&age=22'); // 返回一个包含url各个部分的对象
        ```

    - 新的API使用方法，实例化的时候，必须传递一个**完整的**url

        ```js
        // 直接提供一个完整的url
        let myURL = new URL('http://www.xxx.com/test.html?id=11&age=22');
        // 或
        // 提供两个参数，一是文件路径及参数部分，二是域名，总之，二者组合必须是完整的url
        let myURL = new URL('/test.html?id=11&age=22', 'http://www.xxx.com');
        
        // 得到的myURL是一个对象，包含url中的各个部分
        // 如果需要解析参数部分，则使用querystring模块，或使用URL的一个子对象searchParams中的get方法
        let age = myURL.searchParams.get('age')； // 22
        ```

### 2.4 http模块

> http服务器处理模块，用于创建服务器
>
> node不同于Apache，安装完node并没有一个能够提供Web服务环境，需要使用http模块自己来搭建Web服务器

- http是一个系统模块，让我们能够通过简单的流程创建一个Web服务器

------

#### 2.4.1 使用http模块搭建Web服务器

<!--2.4.1-基础-使用http模块搭建Web服务器-->

- 使用http模块搭建Web服务器

    创建 Web 服务器的步骤

    - 导入 http 核心模块
    - 调用http.createServer() 创建 server 对象(server 对象负责建立连接，接收数据)
    - 注册 request 事件，当浏览器发送请求到服务器执行，设置处理请求的函数
    - 监听端口（这个步骤也可以放到注册request事件之前）

    ```js
    // 0. 加载 http 核心模块
    var http = require('http')
    // 1. 创建服务器，得到 Server 实例
    var server = http.createServer()
    // 2. 监听客户端的 request 请求事件，设置请求处理函数
    server.on('request', function (req, res) {
      // 形参req是请求request的简写
      // 形参res是响应response的简写
      console.log('收到客户端的请求了')
    })
    // 3. 绑定端口号，启动服务器
    server.listen(3000, function () {
      console.log('Server is running at port 3000.')
    })
    ```

    - 当服务器接收到浏览器的请求后，如果没有做出响应，浏览器会等待
    - 服务器的最终目的是要根据请求做出响应

#### 2.4.2 如何对浏览器的请求做出响应

<!--2.4.2-基础-对浏览器的请求做出响应-->

> 当收到浏览器的请求后，会调用处理请求的函数（有两个核心参数 request 和 response）

请求已经能够收到了，现在急需给浏览器的请求做出响应，这里就使用到了处理请求的函数，具体的是使用到了该函数的第二个参数，见下面的代码。

```js
// 代码片段
server.on('request', function (req, res) {
  // 该函数就是处理请求响应的函数
  // 形参res是响应response的简写
})
```

- [形参res](http://nodejs.cn/api/http.html#http_class_http_serverresponse)
    - 形参res是response的缩写
    - 响应对象，服务器给浏览器返回的响应内容，可以通过该对象设置
    - res.write()  设置响应体（返回给浏览器的内容）的内容，可以多次调用，但是只调用write不会做出响应，发送响应要调用 end() 
    - res.end()    把响应报文（响应行、响应头、响应体）发送给浏览器==响应返回给浏览器的可以使任何数据，标签，文字，数字，字母都可以，（若返回给浏览器的数据带有文字的话就必须设置请求头）==
    - res.setHeader()  设置响应头，比如设置响应体的编码
    - statusCode 设置状态码

PS：浏览器在请求服务器的时候，默认会请求网站根目录下的 `/favicon.ico` 网站图标

- 响应代码

    ```js
    // 0. 加载 http 核心模块
    var http = require('http')
    // 1. 创建服务器，得到 Server 实例
    var server = http.createServer()
    // 2. 监听客户端的 request 请求事件，设置请求处理函数
    server.on('request', function (req, res) {
        // 设置响应头，设置编码，否则浏览器收到的是乱码
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        // end中就是返回给浏览器的数据
      	res.end('hello，我是服务器，我收到你的请求了');
    })
    // 3. 绑定端口号，启动服务器
    server.listen(3000, function () {
      console.log('Server is running at port 3000.')
    })
    ```

    ```js
    // 如果需要将一个html页面返回给浏览器，则读取文件，然后返回即可
    
    var http = require('http')
    var fs = require('fs');
    // 1. 创建服务器，得到 Server 实例
    var server = http.createServer()
    // 2. 监听客户端的 request 请求事件，设置请求处理函数
    server.on('request', function (req, res) {
        fs.readFile('./test.html', (err, data) => {
            // 如果读取中出现错误，则抛出错误
            if (err) throw err;
            // 没有错误，则返回读取的html，因为html中设置编码，所以这里不需要设置编码
            res.end(data);
        });
    })
    // 3. 绑定端口号，启动服务器
    server.listen(3000, function () {
      console.log('Server is running at port 3000.')
    })
    ```



#### 2.4.3 根据不同 url 地址处理不同请求

<!--2.4.3-基础-根据请求url的不同做出不同的响应-->

前面已经可以对浏览器的请求做出响应了，但是响应的内容总是一样的。能不能根据url的不同，做出合适的响应呢？当然可以，那么首先就需要知道浏览器请求的url是什么。

涉及到和请求相关的信息，都是通过请求响应处理函数的第一个参数完成的。

```javascript
server.on('request', function (req, res) {  
  // 形参req 是 请求request的意思，所有和请求相关的信息，都在req对象中
})
```

- [形参req](http://nodejs.cn/api/http.html#http_class_http_incomingmessage)
    - 请求对象，浏览器发送的请求报文中的数据已经被解析到该对象上
    - **request.url**            获取请求行中的路径
    - **request.method**   获取请求行中的请求方法
    - request.headers    获取请求头

- 代码实例

    ```js
    // 服务器中有3个html文件，分别是a.html b.html c.html
    // 根据浏览器发来的不同的请求，分别返回这三个文件的内容
    
    var http = require('http')
    // 1. 创建服务器，得到 Server 实例
    var server = http.createServer()
    // 2. 监听客户端的 request 请求事件，设置请求处理函数
    server.on('request', function (req, res) {
        // 根据请求对象req，得到请求url
        let url = req.url;
        if (url === '/a') {
            // 读取a.html，并通过res.end()响应浏览器的请求
        } else if (url === '/b') {
            // 读取b.html，并通过res.end()响应浏览器的请求
        } else if (url === '/c') {
            // 读取c.html，并通过res.end()响应浏览器的请求
        }
    })
    // 3. 绑定端口号，启动服务器
    server.listen(3000, function () {
      console.log('Server is running at port 3000.')
    })
    ```

#### 2.4.4 处理浏览器POST方式提交的数据

<!--2.4.4-基础-处理浏览器POST方式提交的数据-->

上一节，我们根据不同的url地址，对不同的请求，做出了不同的响应。但这些请求都是GET方式的请求，如果浏览器使用POST方式向服务器发送了一次请求，又该如何处理呢？

POST请求一般会提交数据给服务器，服务器在接收数据的时候也是分块接收的

```js

var http = require('http')
// 1. 创建服务器，得到 Server 实例
var server = http.createServer()
// 2. 监听客户端的 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
    // 假设 /add 是POST方式的请求
    if (req.url === '/add') {
        // 注册req的data事件，分块接收数据
        let str = '';
        req.on('data', (chunk) => {
            str += chunk; // chunk 是块的意思，这里将分块接收到的数组拼接到str字符串中
        });
        // 注册req的end事件，当数据都接收到了，会触发end事件
        req.on('end', () => {
            // 这里处理用户提交的数据
            console.log(str);
        });
    }
})
// 3. 绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('Server is running at port 3000.')
})
```

#### 2.4.5 处理静态资源

<!--2.4.5-1-基础-处理静态资源-->

<!--2.4.5-2-基础-统一处理静态资源-->

- 静态资源指的是html文件中链接的外部资源，如css、js、image文件等等。

- 如果请求的a.html 文件中链接了外部文件(静态资源)，比如css、images、js文件等，浏览器会自动再次发送请求，向服务器请求这些文件
- 服务器要判断浏览器请求的路径是否是静态资源，如果是静态资源把静态资源的内容返回给浏览器

浏览器请求了静态资源文件，服务器就得做出响应，而且还要指定响应数据的类型，否则浏览器会把字符串当做纯文本处理。



建议每个响应都告诉客户端我给你发送的 Content-Type 内容类型是什么

为不同的文件类型设置不同的 Content-Type

- .html：text/html
- .css：text/css
- .js：application/javascript
- .jpg：image/jpg

```js
response.setHeader('Content-Type', 'text/css');
```

#### 2.4.6 处理 404

<!--2.4.6-基础-请求不存在的文件时给出404提示-->

- 404是一个响应状态码，表示请求的资源不存在

- 如果请求未处理的路径，服务器不会做任何的响应，此时浏览器处于等待状态

- 如果浏览器请求未处理的路径，统一设置响应码 `404`，并做友好提示

    ```js
    // 设置状态码为404
    response.statusCode = 404;
    response.end('对不起，您请求的页面未找到');
    ```

## 3. 留言板案例

> ajax学习中，做过这个案例。当时使用的是老师提供的接口来完成的。现在，学习了node，我们自己来处理浏览器的请求。
>
> **此次开发，使用不使用ajax无所谓，关键是如何来处理浏览器的请求**

### 3.1 准备工作

<!--3.1-留言板案例-准备工作-->

1. 新建一个文件夹，比如msg
2. 将使用到的html文件、css文件、图片文件、js文件等复制到准备好的文件夹msg中
3. 将模拟数据db.json文件复制到msg中
4. 在msg文件夹中，创建app.js，搭建Web服务环境

### 3.2 实现留言列表

<!--3.2-留言板案例-实现留言列表功能-->

- 当输入地址127.0.0.0:3000/message.html，回车，会向服务器发送一次GET请求

- 服务器接收到请求，要给浏览器返回它要的数据

- ![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1553506224920.png)

- ![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1553506295447.png)

- 具体代码

    - ==**注意事项**==
        - 在读取了json数据以后需要用JSON.parse将其转化成js可以识别的数组套对象的模式
        - 在转化得到的数组要循环遍历并将留言存放在模板字符串中，
        - 在循环之前要先创建一个变量去接收（==创建的这个变量一定要等于空，不能只创建一个变量名仍在哪里==），这个模板字符串let  str = ‘’
        - 模板字符串创建完毕，并读取了html文档以后要需要用  ==字符串.replace(旧字符串，新字符串)==   语法将html中的占位符替换掉，==并用一个变量名去接收一下==，最后将这个变量名响应返回给浏览器；
        - 在读取==带有图片和css的文件（静态资源文件）==的时候，==不能将其转化成utf-8的模式不然图片会乱码==

    ```js
    // app -- application 应用、项目
    // 开启服务
    const http = require('http');
    const fs = require('fs');
    
    const querystring = require('querystring');
    
    const server = http.createServer();
    server.listen(3000, () => console.log('服务启动了'));
    
    server.on('request', (req, res) => {
        // 1. 判断url，如果是/message.html。
        if (req.url === '/message.html') {
            // 2. 读取db.json，转成JS数组。遍历，遍历过程中，拼接li。得到所有的li
            fs.readFile('./db.json', 'utf-8', (err, data) => {
                // if 区间如果只有一句话，则可以省略大括号
                if (err) return console.log(err);
                // 将JSON转成JS数组
                data = JSON.parse(data);
                // 变量data数组，拼接li
                let lis = '';
                data.forEach((item, index, arr) => {
                    lis += `<li class="media">
                                <img class="mr-3" src="./assets/avatar.png" />
                                <div class="media-body">
                                    <h4>${item.name}</h4>
                                    <p>${item.content}</p>
                                </div>
                            </li>`;
                });
                // 到这里所有的里都拼接好了
                // 3. 读取message.html文件，替换里面的特殊字符为li
                fs.readFile('./message.html', 'utf-8', (err, html) => {
                    if (err) return console.log(err);
                    // 替换html中的占位符 #$$##### 为所有的li
                    // message.html中id为messages的ul中放入 #$$##### 占位。下面的代码就是替换该占位符的
                    html = html.replace('#$$#####', lis);
                    // 4. 将完整的html返回给浏览器
                    res.end(html);
                });
                
            })
            
        } else if (req.url.startsWith('/assets/')) {
            // 5. 处理静态资源文件
            // console.log(req.url);
            fs.readFile('.' + req.url, (err, result) => {
                if (err) return console.log(err);
                res.end(result);
            });
        }
    });
    ```

    

### 3.3 实现添加留言功能

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/1553506689176.png)

<!--3.3-留言板案例-实现添加留言功能-->

- 点击界面中的“添加”时，向服务器发送请求，并提交数据给服务器，
    - 注意设置表单的action和method
    - 注意，设置表单各项的name值
    - 注意，button，不用设置type属性，就是要默认的submit类型即可

- 服务器接收到请求，完成数据添加，并作出响应，告知浏览器添加成功与否

- **代码：**

    * ==注意事项==

      * 因为留言的传输是通过==post==的方式的所以在接收留言信息的时候需要先声明一个变量                     （let  lis = ‘’），并使用==req.on('data',chunk=>  lis+=chunk)方式去接收传送的信息==

      * 在接收完了信息以后需要将其幻化层js可以识别的对象

      * 在读取了json数据之后将其转化成数组并向里面push接收的留言信息的时候，==不要用变量名去接收==，因为==数组.push（元素)，该语法返回的是添加完新元素以后该数组的长度（length）==；下次用的时候直接用这个数组就行了不用再去接收了

      * 添加完新元素直接将其转化json数据，然后在将其写入到json文件中即可

      * 在响应返回给浏览器的数据中若有文字格式的数据，就必须设置请求头，

        <!--设置请求头的时候text/html和charset=utf-8是在一个字符串中的应该这个区写         'text/html;charset=utf-8'-->

      * 返回给浏览器的也可以是标签

```js
server.on('request',(req,res)=>{
    if(req.url=='/addMsg'){      //添加留言时候
   	//获取发送过来的留言信息
        let lis = '';
        req.on('data',chunk => lis+=chunk);
        req.on('end',()=>{
            //接收完成以后转化成对象格式
            lis = queryshring.parse(lis);
            //读取json文件中留言信息
            fs.readFile('./db.JSON','utf-8',(err,addly)=>{
                if(err)console.log(err);
                //将读取的json数据转化W为对象格式
                addly = JSON.parse(addly);
                //将接收的来历添加到json留言信息中
                addly.push(lis);
                //将添加完信息的json数据转化为json数据格式（查询字符串）
                addly = JSON.stringify(addly);
				//将json数据写入到json文件中
                fs.writeFile('./db.json',addly,err=>{
                    if(err) return err;
                })
                });
            //此处如果不设置请求头的话那么创给  浏览器的“添加完成”字符就是乱码的
            res.setHeader('content','text/html；charset=utf-8')
            //添加完成以后返回给浏览器一个弹框“添加完成”，并跳转到留言页面
            res.end('<script>alert("添加完成");location.href = "/message.html"</script>');
})

```



## 4.node第三方包的使用

本地安装资源

①mime  处理静态资源   ②art - template  模板引擎  ③express  node.js的框架  

④express-art-template模板引擎    ⑤body-parser处理post请求  

⑥mysql   连接服务器  ⑦express - session处理会话技术 ⑧

全局安装资源



### 4.1 npm概述

<!--1.1-npm-概述-->

* npm（node package manager）翻译过来就是node包管理器
* 包（package）是某个独立功能的封装，包是在模块基础上更深一步的抽象。
* 简单理解：一个包中可以包含一组功能相近的模块
* 再简单的理解，包就是node的插件，下载安装好就可以配合node使用了
* npm就是安装、卸载包的管理工具
* npm不用单独安装，安装完node，npm默认就安装好了
* 试着执行 `npm -v` 命令，看下能否看到npm的版本

### 4.2 使用npm安装Node包

<!--1.2-npm-使用npm安装node的包-->

* 安装一个包，分为全局安装和本地安装
  * ==**全局安装**==
    * 需要通过命令行执行的包，一般安装在全局目录中，方便随时使用命令行工具运行
    * 安装步骤
      * 随便一个位置，运行命令行工具
      * 执行 ==npm install 包名 -g==即可==安装==（install可以简写为i，-g可以放到包名前面）
      * 删除全局安装的包，执行 ==npm uninstall 包名 -g==即可==删除==（uninstall可以简写为un）
      * 安装完成，只能通过命令行工具执行命令，**不能**通过`require('包名');` 来加载包
  * **==本地安装==**
    * 需要通过 `require('包名')` 加载使用的包，要执行本地安装
    * 安装步骤
      * **在需要安装包的文件夹**，运行命令行工具
      * 执行 ==npm init -y   初始化==。此时会生成一个package.json的文件，该文件相当于包的配置文件
      * 执行命令 ==npm install 包名==  即可安装（==后面可以同时写好几个包名一起安装，中间用空格隔开==）
      * 安装完成，可以在**当前目录或其子目录中**使用 `require('包名');` 来加载包，使用它了

> 更多关于npm的使用，后续再详细介绍。
>
> 所有的第三方都可以安装在一个文件中，然后以后写的node文件都写在这个文件夹的子文件夹中，然后就不用每次用一次就安装一次了   
>
> ==使用本地安装的第三方包每次使用前都要先加载一下==

* 全局安装nodemon包
  * nodemon是一个帮我们自动启动Web服务的工具
  * 使用nodemon执行一个server.js文件后，当文件改变后，会自动重启服务（server.js 表示包含Web服务器功能的js文件）
  * 安装：`npm i nodemon -g`
  * 使用：执行命令 `nodemon server.js` 即可
* 本地安装mime包
  * mime包，是一个工具，会根据文件的后缀名得到文件的mime类型，用于设置Content-Type
  * 安装：
    * 在使用包的文件夹中，执行命令行工具
    * 初始化 `npm init -y`
    * 执行 `npm i mime` 安装
    * 在js文件中，可以使用 `require('mime');` 加载该包，并使用了

==使用npm install 安装第三方包出现下面问题处理方式==

```js
//背景：使用npm下载时，出现错误Unexpected end of JSON input while parsing near··
//意思就是缓存问题

//解决方法：先清除缓存，再重新安装

//清除缓存：运行
//npm cache clear --force

//重新安装：
// install
 
```



### 4.3 使用包处理问题

#### 4.3.1 使用nodemon启动服务

<!--1.3.1-npm-使用包处理启动服务和设置文件类型的问题-->

```js
// 之前启动服务，每次修改代码后，都有重新启动
node server.js
// 现在，使用nodemon启动服务，之后修改代码后，nodemon会帮我们自动重启服务
nodemon server.js // server.js 表示包含Web服务器功能的js文件
```

#### 1.3.2 使用mime包处理文件的Content-Type

<!--mime意思是设定某种扩展名的文件用一种用程序来打开的方式类型，当该扩展名被访问时，浏览器会自动使用指定应用程序打开。-->

* 使用mime注意事项：
  1. 先要引入mime模块
  2. 因为mime基本就是设置请求头用的，所以==要先利用path模块获取地址的后缀==
  3. 然后利用mime中的getType方法 通过获取的后缀  来==获取到该文件的mime==（text/html,  image/jpeg等）
  4. 然后将其==设置给请求头==

```js
const mime = require('mime');
const path = require('path');

// 代码片段（一般在处理静态资源文件时这样处理）
// 根据请求的url，获取文件的后缀
let ext = path.extname(req.url);
// 使用mime对象的getType方法，获取该文件的mime
let contentType = mime.getType(ext);
// 设置content-type
response.setHeader('Content-Type', contentType);
```

#### 4.3.3 使用art-template包处理模板

<!--1.3.3-npm-使用art-template包处理模板-->

* art-template介绍

  * art-template我们前面使用过，它是模板引擎，当时使用的是template-web.js，属于浏览器版本。
  * 之前使用的是浏览器版的，即在html页面中引入template-web.js
  * 现在，art-template支持npm安装，安装后属于node的一个包

* 安装

  * 初始化 `npm init -y` （注意，之前在当前目录安装过包的话，这里就不用再次初始化了）
  * 本地安装 `npm i art-template`

* 使用

* ==◇在node中使用模板引擎注意事项==

  1. 在调用template方法时候需要传入两个参数第一个参数是一个==（HTML文件的）绝对路径==，（使用前可以先用path拼接一个绝对路径出来）
  2. 第二个参数是一个==需要写入的值==，==一般是直接给直接的json文件==（不需要转化格式，直接json即可）
  3. 使用时会返回==一个html的字符串==，直接返回给浏览器即可

  ```js
  // 1. 加载art-template
  const template = require('art-template');
  // 2. 在向浏览器响应数据的时候，使用template函数处理模板
  // template函数仍然是两个参数一个返回值
  // 参数1：待渲染的html文件
  // 参数2：一个js对象，需要展示的数据
  // 返回值：数据和html文件组合好的结果
  let html = template(HTML文件, {
      arr: liuyan // arr就是要显示在HTML循环的数据，liuyan就是读取的json文件的数据
  });
  // 3. 将template的返回值，响应（返回）给浏览器
  res.end(html);
  ```

  ==HTML文件对应代码（和以前的模板引擎语法一致）==：

  ```html
  {{each arr}}
  	{{$index}} 表示数组的下标
  	{{$value}} 表示数组中的值
  {{/each}}
  ```

## 5.补充，开发留言板案例

1. 创建msg2文件夹

2. 将模板message.html和assets文件夹复制到msg2中

3. 在msg2文件夹中，创建app.js，里面的代码如下

   ```js
   // app ---   application 应用
   // 加载模块，所有用到的模块，都有最先加载
   const http = require('http');
   const fs = require('fs');
   const path = require('path');
   const querystring = require('querystring');
   // 加载第三方模块（包）
   
   // 创建server对象
   const server = http.createServer();
   
   // 监听端口
   server.listen(3000, () => {
       console.log('启动ok');
   });
   
   // 监视浏览器的请求，如果浏览器向服务器发送请求，就会触发下面的request事件
   server.on('request', (req, res) => {
       console.log(req.url);
       if (req.url === '/message.html') {
           // 说明浏览器请求的是 /message.html
           // 读取message.html，响应给浏览器
           let fileName = path.join(__dirname, 'message.html');
           fs.readFile(fileName, 'utf-8', (err, data) => {
               if (err) throw err;
               // 如果没有错误，则将结果响应给浏览器
               res.end(data);
           });
       } else if (req.url.startsWith('/assets/')) {
           // 说明请求的是静态资源文件，读取的时候，不要转成utf-8，因为有图片
           fs.readFile(path.join(__dirname, req.url), (err, data) => {
               if (err) throw err;
               res.end(data);
           });
       }
   });
   ```

4. 使用art-template第三方模块（包），处理模板（message.html）中待显示的数据

   1. 安装art-template

      1. 在msg2文件夹中使用，所以安装的时候，要将命令行工具，切换目录到msg2中
      2. 初始化，执行 `npm init -y` ，成功后，会在msg2文件夹中生成 `package.json`
      3. 执行 `npm i art-template` 安装art-template包
      4. 安装完成，会在msg2中，生成 node_modules文件夹，这里放的就是你安装的art-template

   2. 使用art-template

      1. 在app.js最开头，加载art-template

         ```js
         // 加载第三方模块（包）
         const template = require('art-template');
         ```

      2. 判断如果url是 `/message.html`的时候，调用template函数即可

         ```js
         // 定义message.html的路径
         let fileName = path.join(__dirname, 'message.html');
         // 加载数据
         let liuyan = require(path.join(__dirname, 'db.json'));
         // html文件和数据组合好的结果 = template(模板html文件路径, js对象);
         // template 函数会根据路径（fileName），自己去读取html文件中的内容
         // 会将数据 arr 和 html组合到一起
         let html = template(fileName, {
             arr: liuyan
         });
         ```

         > 要将db.json文件复制到msg2文件夹中

      3. 在message.html中，使用each标签，循环li

         ```html
         <!-- 前面分配的是arr， 所以这里each arr--->
         {{each arr}}
         <li class="media">
             <img class="mr-3" src="./assets/avatar.png" alt="{{$value.name}}">
             <div class="media-body">
                 <h4>{{$value.name}}</h4>
                 <p>{{$value.content}}</p>
             </div>
         </li>
         {{/each}}
         ```

         > 此时，可以在app.js中，console.log(html)，刷新浏览器，看下组合好的结果

      4.将组合好的html，响应给浏览器

      ```js
      // 将组合好的结果，响应给浏览器
      res.end(html)
      ```

## 6. express包

### 6.1 express 介绍

- Express 是一个第三方模块，用于搭建服务器
- Express 是一个基于 Node.js 平台，快速、开放、极简的 **web 开发框架**。
- express保留了http模块的基本API，也就是说使用express时也能使用req和res对象
- express还额外封装了一些方法，能让我们更方便的搭建服务器
- express提供了中间件功能，其他很多强大的第三方模块都是基于express开发的
- [Express 官网](http://expressjs.com/)
- [Express 中文文档（非官方）](http://www.expressjs.com.cn/)
- [Express GitHub仓库](https://github.com/expressjs/express)

### 6.2 使用Express构造Web服务器

==**创建一个message文件夹，下面的开发在message中**==

```bash
# 下载安装 express 模块
# 初次安装，应该初始化
npm init -y
npm i express
```

使用Express构建Web服务器步骤：

  1) 加载 express 模块

  2) 创建 express 服务器

  3) 开启服务器

  4) 监听浏览器请求并进行处理

```js
//1. 加载 express 模块
const express = require('express');

//2. 创建express(Web) 服务器
const app = express();

//3. 开启服务器
app.listen(3000, () => {
    console.log('express-server is running...');
})

//4. 监听浏览器请求并进行处理
//app.get(): 用来接收get请求
//app.post(): 用来接收post请求，
//          post表单提交(method=post)

//如果浏览器请求的地址为 http://127.0.0.1:3000/message.html，表示以GET方式请求index接口，所以会执行下面的方法
app.get('/message.html', (req, res) => {
    res.end('index-page');
})  
//如果浏览器请求的地址为 http://127.0.0.1:3000/login，则会执行该方法
app.get('/login', (req, res) => {
    //send方法是express封装的方法
    res.end('登录页');
})

// * : 通配符，代表任意地址
app.get('*', (req, res) => {
    res.end('404 not found');
})

```



总结：

 1) 使用express构造服务器也是4步流程： 

```js
const  express = require('express');  // ① 加载express模块
const  app = express();				  // ② 创建express服务器
app.listen(3000, () => {})			  // ③ 开启express服务器
app.get(url, callback)   app.post(url, callback)  // ④ 注册服务器事件 
```

 2) 注册服务器事件有两个方法： app.get() 和 app.post()

```js
// get方法用来接收get请求，浏览器地址栏发起的请求都是get请求
// post方法用来接收post请求，接收post表单提交的请求
```

 3) express框架封装了一些额外的API（例如:send），可以让我们更方便的构造Web服务器

​	3.1 ）使用send方法响应数据的话，会自动设置content-type。

​	3.1 ）注意send不能直接响应数字，需要加引号

 4) 浏览器请求的每一个url地址都会由一个独立方法接收并处理，没有了 if ... else if ... else 这样的分支，程序结构
     更加清晰

5）sendFile(文件路径); -- 功能是读取文件，并将读取到的结果响应给浏览器

### 6.3 中间件

==复制message为message1，下面的开发在message1里面==

为了理解中间件，我们先来看一下我们现实生活中的自来水厂的净水流程。

![](https://renquanxi.github.io/iamgeWarehouse/img/04-node/123.png)

- 在上图中，自来水厂从获取水源到净化处理交给用户，中间经历了一系列的处理环节
- 我们称其中的每一个处理环节就是一个中间件。
- 这样做的目的既提高了生产效率也保证了可维护性。



express中间件是一个特殊的url地址处理函数

- 中间件是 express 的最大特色，也是最重要的一个设计
- 一个 express 应用，就是由许许多多的中间件来完成的
- 中间件就是一个函数，中间件函数要当做 `app.use();` 的参数，这样来使用
- 中间件函数中有三个基本参数， req、res、next
- req就是请求相关的对象，它和后面用到的req对象是一个对象
- res就是响应相关的对象，它和后面用到的res对象也是一个对象
- next：它是一个函数，调用它将会跳出当前的中间件函数，执行后续代码；如果不调用next，则会在当前中间件卡住



### 6.4 自定义中间件处理静态资源文件的读取及响应

思路：

- 如果发现请求的是静态资源（url以 `/assets/` 开头），则读取他们，并返回。
- 如果不是静态资源，则交给下一个中间件处理（next）

```js
app.use((req, res, next) => {
    // console.log(req.url);
    if (req.url.startsWith('/assets/')) {
        // 满足条件，说明是静态资源
        // fs.readFile(path.join(__dirname, req.url), (err, data) => {
        //     res.end(data);
        // })
        res.sendFile(__dirname + req.url);
        next();
    } else {
        // 不满足条件，交给下一个中间件，否则服务器会卡住
        next();
    }
})
```

### 6.5 使用express自带的方法处理静态资源文件

前面，为了理解中间件，都是自定义的中间件，其实，关于处理静态资源文件，express自带了更好的办法

```js
// use的第一个参数，表示请求的url是以 /assets/ 开头的
// use的第二个参数，表示到 './assets' 文件夹中去查找资源，并返回给浏览器
app.use('/assets/', express.static('./assets'));
// 为了不报错，应该使用绝对路径
app.use('/assets/', express.static(__dirname + '/assets'));
```

## 7.浏览器发送请求和服务器响应

### 7.1浏览器如何发送请求

1. GET方式请求、
   * 在地址栏输入地址，然后点击回车键
   * 点击超链接跳转页面发送请求
   * form表单在mothed设置get提交方式，或者不设置时默认也是get方式提交
   * 自己发送ajax请求
2. POST方式请求
   * form表单设置mothed属性为post防护四提交
   * 自己发送ajax请求

### 7.2服务器如何响应

1. GET方式
   * 当收到get方式的请求时，服务器会先去读取请求的数据，在读取成功后直接返回给浏览器
2. POST方式
   * 当收到post方式的请求后，服务器会先去接收浏览器提交的数据，然后对数据进行处理，并告诉浏览器处理结果



























