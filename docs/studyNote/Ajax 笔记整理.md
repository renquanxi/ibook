## 1.1 Ajax简述

简单来说，Ajax是一种技术、是能够使前端人员和后端进行交互的一种技术。而后端语言的执行必须在服务器上，所以说Ajax是==前端==和==服务器端==通信的一种技术。

更具体一点，浏览器通过内置对象 `XMLHttpRequest` 提供的 API 向服务器发起请求，并可以接收服务器返回给浏览器的数据，这一过程或实现这个过程的技术就是我们所说的 Ajax。

![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax1.png)

## 1.2 学习Ajax的必要条件 - 服务器

- 什么是服务器？

    - 一个安装了==特定软件==的公共（联网）==计算机==

- 学习时，如何拥有一台服务器

    - 购买（下下策）
    - 在自己的计算机上安装特定的软件
        - Tomcat -- java
        - Apache -- php
        - app-win.exe -- 前端（学习使用，服务器里面提供了一些学习用的接口）

     


## 1.3 请求响应过程

服务器环境有了之后，必须要通过浏览器输入 ==域名 或 IP== 的方式来向服务器发起请求。

![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax2.png)



# 2. Ajax初体验

## 2.1 准备工作

- 配置学习环境 -- 配置服务器，让自己的电脑临时变为服务器，方便学习
  - app-win.exe 是一个学习用的 web 服务器软件
  - 把资料中的 app-win.exe  放到一个指定目录，例如：c:/ajax/
  - 在该目录下创建一个文件夹 **public** (注意名字不可更改)
  - 双击运行 app-win.exe

  ![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax3.png)

## 2.2 使用Ajax

app-win.exe 软件提供了一个接口地址 -- 127.0.0.1:3000/time，该接口可以给我们返回一个时间戳。

> 时间戳，表示从1970-01-01 00:00:00 到当前所经过的秒数。
>
> 软件提供的 /time 接口返回的是一个毫秒数

下面我们去写代码，向服务器请求这个时间戳

```javascript
// 1. 创建一个 XMLHttpRequest 类型的对象 —— 相当于打开了一个浏览器
var xhr = new XMLHttpRequest();
// 2. 打开与一个网址之间的连接 —— 相当于在地址栏输入访问地址
xhr.open('GET', 'http://127.0.0.1:3000/time');
// 3. 通过连接发送一次请求 —— 相当于回车或者点击访问发送请求
xhr.send(null);
// 4. 当接收到数据的时候
xhr.onload = function () {
  // 通过 xhr 的 responseText 获取到响应的响应体
  console.log(this.responseText)
};
```

> **注意**：涉及到 AJAX 操作的页面不能使用文件协议访问（不能使用VSCode选择用浏览器打开，必须使用127.0.0.1:3000/xxx的方式访问）

# 3. 再看请求响应

## 3.1 请求响应

​	在学习Ajax的时候，一定要明确 public 文件夹就是服务器上的文件夹。文件夹里面的文件都是服务器上的文件，我们不能直接双击html文件用浏览器打开，必须使用 IP或域名的方式去向服务器发送请求，来请求他们。

​	比如刚刚的快速入门案例，当在浏览器输入一个地址（127.0.0.1:3000/getTime.html）后，向服务器发送一个请求，请求服务器上的getTime.html文件，服务器给浏览器返回的是getTime.html里面的源代码（其实就是你刚刚写的代码）。浏览器在接收到这些源代码的时候，会解析代码中的HTML、css、js等。当解析到JS代码的时候，发现是ajax请求，则再次向服务器发起Ajax请求，请求/time这个接口。上述过程可以用下面的图示表示。

![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax4.png)

​	请求响应过程也可以通过浏览器工具进行查看。

![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax5.png)



**注意点**：

- 把public文件夹当做真实的服务器，把它想象成外地的服务器，所以服务器里面的内容不能双击打开，只能通过IP或域名的方式去请求
- app-win.exe中内置了一些接口，比如 /time 。这些接口也必须通过IP或域名去请求



## 3.2 常用的两种请求方式

向服务器发请求时，请求的方式其实也是多样的，最常用的是下面两种方式：

- GET方式：

    - 浏览器地址栏输入URL，按回车
    - 点击a标签，跳转到另一个页面
    - method属性等于get的表单提交（注意，如果表单没有指定method，则method的值默认为get）
    - **通过Ajax发送的GET方式的请求**

- POST方式：

    - method属性等于post的表单提交

    - **通过Ajax发送的POST方式的请求**



# 4. AJAX 发送 get 请求

## 4.1 Ajax发送 get 请求及简化URL

- get 请求

  - get 字面意思获取，一般用户从服务器获取数据

- 代码实现

  ```js
  // 1. 创建一个 xhr 对象
  var xhr = new XMLHttpRequest();
  // 2. 设置请求的方式和路径
  xhr.open('GET', 'http://127.0.0.1:3000/time');
  // 3. 发送请求
  xhr.send(null);
  // 4. 注册事件，请求响应过程完全结束，会触发xhr.onload事件
  xhr.onload = function () {
      // 通过 xhr 的 responseText 获取到响应的响应体
    	console.log(this.responseText)
  }
  ```

在发送Ajax请求的时候，比如A、B两个网页文件或接口地址都属于同一个服务器上的资源，则请求URL可以省略前面的IP和端口，直接用`/time` 即可。浏览器在解释 `/time` 的时候，会自动补充完整的URL。

```js
// 1. 创建一个 xhr 对象
var xhr = new XMLHttpRequest();
// 2. 设置请求的方式和路径

//////////////////////////////  注意，下面的URL接口就是简化后的写法。
xhr.open('GET', '/time');

// 3. 发送请求
xhr.send(null);
// 4. 注册事件
xhr.onload = function () {
    // 通过 xhr 的 responseText 获取到响应的响应体
  	console.log(this.responseText)
}
```

## 4.2 get 请求传参

- 什么时候需要带请求参数
    - 请求参数又叫做查询字符串
    - 一般用于告诉服务器此次请求的详细目的，比如查询什么、删除哪条记录等

- URL 携带查询字符串

  - 格式：http://www.baidu.com/s?q=word&sug=5017
  - 查询字符串(querystring)：
    - URL中问号后面携带的就是 get 请求传参的数据，叫做查询字符串
    - 格式：q=word&sug=5017

    - 查询字符串只适合传输少量数据

- 代码演示：

  ```js
  // 1. 创建一个 xhr 对象
  var xhr = new XMLHttpRequest();
  // 2. 设置请求的方式和路径
  xhr.open('GET', '/query-get?id=2&name=zhangsan&age=23');
  // 3. 发送请求
  xhr.send(null);
  // 4. 注册事件
  xhr.onload = function () {
      // 通过 xhr 的 responseText 获取到响应的响应体
    	console.log(this.responseText)
  }
  ```

## 4.3 缓存问题(了解)

- 只有IE浏览器会有缓存问题，所以作为了解内容

- 缓存问题指的是：两次或多次 AJAX GET 请求**同一个** URL ，IE浏览器在第二次请求的时候，并不会从新向服务器发请求，而是直接使用上次请求的结果。

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time')
xhr.send(null)
xhr.onload = function () {
  console.log(this.responseText)
  // => 每次得到的结果都是相同的
}
```

- 解决方案

> 让每次请求的URL都不同
>
> 不同的查询字符串会被浏览器认为是不同的地址，浏览器会忽略客户端缓存。

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time?t=' + Date.now())
xhr.send(null)
xhr.onload = function () {
  console.log(this.responseText)
  // =>
}
```

# 5. AJAX 发送 post 请求

post 把传递的数据封装在 HTTP 请求数据中，以键/值的形式出现，可以传输大量数据，对数据量没有限制，也不会显示在 URL 中。

- 字面意思是把数据提交给服务器
- post 请求，**必须调用setRequestHeader方法设置 Content-Type**
  - 请求头中的 Content-Type，告诉服务器发送过去的数据的格式
- 发送的数据
    - send方法的参数就是post方式发送给服务器的数据。（和get不同）
- 代码演示

```js
var xhr = new XMLHttpRequest()
// open 方法的第一个参数的作用就是设置请求的 method
xhr.open('POST', '/query-post')
// 设置 Content-Type 为 application/x-www-form-urlencoded，这行代码不用死记硬背，去复制即可
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 需要提交到服务端的数据可以通过 send 方法的参数传递
// 格式：name=zhangsan&age=18
xhr.send('name=zhangsan&age=18')
xhr.onload = function () {
    console.log(this.responseText)
}
```

# 6. Ajax的get 和 post方式请求的区别

* GET
  * 字面意思：获取内容
  * 浏览器对 URL 的长度有限制，只能在 url 上携带少量的数据
  * 在IE浏览器中会有缓存
  * 参数位置在url上（`?id=123&name=zs`）
* POST
  * 字面意思：提交数据
  * 适合发送大量数据
  * 可以实现上传文件
  * post请求不会缓存
  * 参数位置是send方法内（`send('id=123&name=zs')`）

# 7. 软件app-win中封装好的接口列表

| 请求方式 | 接口地址    | 参数                                | 返回值                              |
| -------- | ----------- | ----------------------------------- | ----------------------------------- |
| GET      | /time       |                                     | 时间戳 [string]                     |
| GET      | /query-get  | 任意                                | 发送给服务器的参数 [string]         |
| POST     | /query-post | 任意                                | 提交给服务器的数据 [string]         |
| POST     | /checkUser  | username:[string]                   | true或false                         |
| GET      | /big-data   |                                     | 返回一百万次时间戳 [string]         |
| GET      | /==getMsg== |                                     | 返回所有留言[JSON]                  |
| POST     | /==addMsg== | name:[string]<br />content:[string] | 添加成功：true<br />添加失败：false |
| POST     | /fd         | FormData对象                        | 提交给服务器的数据 [JSON]           |

# 8. 验证用户名案例

```html
	<input type="text" id="txt_name" />
    <span id="msg"></span>

    <script>
        // 服务器接口 /checkUser 可以检测用户名是否可用
        // 默认 zhangsan lisi wangwu 三个用户已经被注册了

        // 当输入框失去焦点的时候，发送Ajax请求到 /checkUser
        document.getElementById('txt_name').onblur = function () {
            // 0. 获取输入的内容
            var n = this.value;
            // 1. 创建XHR对象
            var xhr = new XMLHttpRequest();
            // 2. 调用open方法，设置请求方式和接口地址
            xhr.open('POST', '/checkUser');
            // 3. 调用setRequestHeader方法，设置content-type
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // 4. 调用send方法，发送请求
            xhr.send('username=' + n);
            // 5. 当请求响应过程结束，获取服务器返回的内容。根据返回的内容设置提示
            xhr.onload = function () {
                var result = xhr.responseText;
                // console.log(result);
                if (result === 'true') {
                    document.getElementById('msg').innerHTML = '<font color="red">sorry，该用户已被注册</font>';
                } else if (result === 'false') {
                    document.getElementById('msg').innerHTML = '<font color="green">恭喜，用户名可用</font>';
                }
            }
        };
    </script>
```



# 9. AJAX 进阶

## 9.1 onload 和 onreadystatechange

- onload 是 HTML5 以后新增的方便获取响应的事件
- 过去获取浏览器返回内容的时候使用的是 onreadystatechange

在通过Ajax向服务器发送请求的过程中，`XMLHttpRequest`对象的状态会发生多次变化。由于 `readystatechange` 事件是在 `xhr` 对象状态变化时触发（不单是在得到响应时），也就意味着这个事件会被触发多次。测试，看onreadystatechange事件是否触发了多次：

```javascript
var xhr = new XMLHttpRequest()
// open 方法的第一个参数的作用就是设置请求的 method
xhr.open('POST', '/query-post')
// 设置 Content-Type 为 application/x-www-form-urlencoded，这行代码不用死记硬背，去复制即可
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 需要提交到服务端的数据可以通过 send 方法的参数传递
// 格式：name=zhangsan&age=18
xhr.send('name=zhangsan&age=18')
// 更改事件为onreadystatechange
xhr.onreadystatechange = function () {
    console.log('事件被触发了')
}
```

了解了`onreadystatechange`事件，我们不禁会思考`XMLHttpRequest`对象到底有哪些状态呢？又用什么表示`XMLHttpRequest`对象的状态呢？

- `xhr` 对象的状态
    - 有5种
    - 用ready**S**tate属性表示，详见下表

| readyState | 状态描述         | 说明                                                      |
| ---------- | ---------------- | --------------------------------------------------------- |
| 0          | UNSENT           | 代理（XHR）被创建，但尚未调用 `open()` 方法。             |
| 1          | OPENED           | `open()` 方法已经被调用，建立了连接。                     |
| 2          | HEADERS_RECEIVED | `send()` 方法已经被调用，并且已经可以获取状态行和响应头。 |
| 3          | LOADING          | 响应体下载中， `responseText` 属性可能已经包含部分数据。  |
| **4**      | **DONE**         | **响应体下载完成，可以直接使用 `responseText`。**         |

- 代码演示xhr对象的几种状态

```js
var xhr = new XMLHttpRequest()；
// 创建对象后，先打印一次XHR对象的状态，此时状态值为0
console.log(xhr.readyState);

// 添加事件onreadystatechange，每当XHR对象的状态发生变化的时候，就会触发这个事件
// 比如
// xhr对象的状态从0-->1，会触发下面的事件
// xhr对象的状态从1-->2，会触发下面的事件
// xhr对象的状态从2-->3，会触发下面的事件
// xhr对象的状态从3-->4，会触发下面的事件
xhr.onreadystatechange = function () {
    console.log(this.readyState); 
    // 输出1/2/3/4
}

// open 方法的第一个参数的作用就是设置请求的 method
xhr.open('POST', '/query-post')
// 设置 Content-Type 为 application/x-www-form-urlencoded，这行代码不用死记硬背，去复制即可
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 需要提交到服务端的数据可以通过 send 方法的参数传递
// 格式：name=zhangsan&age=18
xhr.send('name=zhangsan&age=18')
```

- 时间轴

    下面的图展示了一次Ajax请求，从开始到完整的接收到服务器返回的数据的过程。

```flow
s=>start: UNSENT
o1=>operation: OPENED
o2=>operation: HEADERS_RECEIVED
o3=>operation: LOADING
e=>end: DONE

s(right)->o1(right)->o2(right)->o3(right)->e
```

```flow
s=>start: 初始化
o1=>operation: 建立连接
o2=>operation: 接收到响应头
o3=>operation: 响应体加载中
e=>end: 加载完成

s(right)->o1(right)->o2(right)->o3(right)->e
```

- 通过理解每一个状态值的含义得出一个结论：一般我们都是在 `readyState` 值为 `4` 时，执行响应的后续逻辑。

```javascript
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 后续逻辑......
  }
}

// 或者写成下面的形式
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  // 后续逻辑......
}
```

> 服务器返回的数据量如果非常大，会分块返回，每次返回一部分，当返回的数据发生变化时，也会触发onreadystatechange事件，并且此时的readyState值为3

## 9.2 同步与异步

Ajax（Asynchronous Javascript And XML（异步 JavaScript 和 XML）

关于同步与异步的概念在生活中有很多常见的场景，举例说明。

> - 同步：一个人在同一个时刻只能做一件事情，在执行一些耗时的操作（不需要看管）不去做别的事，只是等待
> - 异步：在执行一些耗时的操作（不需要看管）去做别的事，而不是等待

`xhr.open()` 方法第三个参数要求传入的是一个 `bool` 值，其作用就是设置此次请求是否采用异步方式执行，默认为 `true`，如果需要同步执行可以通过传递 `false` 实现：

```javascript
console.log('before ajax')
var xhr = new XMLHttpRequest()
// 默认第三个参数为 true 意味着采用异步方式执行
xhr.open('GET', '/time', true)
xhr.send(null)
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 这里的代码最后执行
    console.log('request done')
  }
}
console.log('after ajax')
```

如果采用同步方式执行，则代码会卡死在 `xhr.send()` 这一步：

```javascript
console.log('before ajax')
var xhr = new XMLHttpRequest()
// 同步方式
xhr.open('GET', '/time', false)
// // 同步方式 执行需要 先注册事件再调用 send，否则 readystatechange 无法触发
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     // 会按代码执行顺序执行这行代码
//     console.log('request done')
//   }
// }
xhr.send(null)
// 因为 send 方法执行完成 响应已经下载完成
console.log(xhr.responseText)
console.log('after ajax')
```

演示同步异步差异。

> 了解同步模式即可，切记不要使用同步模式。

## 9.3 兼容方案(介绍)

XMLHttpRequest 在老版本浏览器（IE5/6）中有兼容问题，可以通过另外一种方式代替。

```javascript
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
// xhr 的成员相同
```

至此，我们已经大致了解了 AJAX 所的提供的基本 API 。

## 9.4 XMLHttpRequest API 总结

#### 属性

- `readyState`  xhr的状态  4 响应体接收完毕
- `status`       获取状态码
- `responseText`  获取响应体，文本格式
- `responseXML`  获取响应体，xml格式
- `onreadystatechange`   事件，当xhr.readyState属性发生改变触发，或当接收到的数据发生变化的时候也会触发
- `onload` 事件，响应接收完毕

#### 方法

- `open(method, url, async)`   设置请求的方式，请求的路径， 同步/异步
- `send(requsetBody)`    发送请求(体)
- `setRequestHeader(key, value)`  设置请求头
- `getResponseHeader(key)`   获取响应头

# 10. 响应数据格式

## 10.1 简介

服务器返回的数据不一定是非常简单的字符串，比如在获取留言板中的所有留言的时候，这时获取的数据就比较多，思考，如果是你，你希望返回什么格式的数据呢？希望是一大段拼接到一起的字符串还是一个JS数组或对象呢？

答案肯定是数组或对象，因为数组或对象操作起来更加方便。

```js
// 下面的表示所有留言的数据格式不好，不易处理
var liuyan = '张三,哈哈哈哈哈哈.李四,呵呵呵呵.王五,嘎嘎嘎嘎';

// 将所有的留言设计成数组
var liuyan = [
    {name:'张三', content:'哈哈哈哈'}，
    {name:'李四', content:'呵呵呵呵'}
];

// php 中的数组
array(
	'name'=>'张三'
);
```



但是不同语言之间的数组和对象语法又不同，所以服务器直接返回该语言的数组或对象是不行的。

语言设计人员早已意识到这个问题，所以专门设计了两种数据表示格式，他们分别是`JSON`和`XML`。在服务器和浏览器之间传输数据的时候，需要先把数据转换成双方都能够识别的格式，即`JSON`和`XML`。这就犹如中国人和其他国家人交流时需要找个翻译一样。

![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax6.png)

## 10.2 JSON

JSON（JavaScript Object Notation：JS对象表示法） 是一种通过普通**字符串**描述数据的手段，用于表示有结构的数据。类似于编程语言中字面量的概念，语法上跟 JavaScript 的字面量非常类似。

> 别看JSON长得像JS中的各种数据，但JSON的本质是字符串。

### 数据类型

* null

  ```
  null
  ```

* number

  ```
  2048
  ```

* boolean

  ```
  true
  ```

* string

  ```
  "hello"
  ```

* object

  ```
  {
    "name": "zce",
    "age": 18,
    "gender": true,
    "girl_friend": null,
    "arr": []
  }
  ```

* array

  ```
  ["zhangsan", "lisi", "wangwu"]
  ```

### 注意

1. JSON 中属性名称必须用双引号包裹
2. JSON 中表述字符串（值）必须使用双引号
3. JSON 中不能有单行或多行注释
4. JSON 没有 `undefined` 这个值
5. 一个完整的JSON，不能有其他内容掺杂

### JSON 数据转换

- JSON 格式转JS数据
    - `JS = JSON.parse(JSON)`

- JS数据转JSON
    - `JSON = JSON.stringify(JS);`

### JSON 表述

有了 JSON 这种格式，我们就可以更加容易的表示拥有复杂结构的数据了。

> **注意**：
>
> - 不管是 JSON 也好，还是 XML，只是在 AJAX 请求过程中用到，并不代表它们与 AJAX 之间有必然的联系，它们只是数据协议罢了。
> - 不管服务端是采用 XML 还是采用 JSON 本质上都是将数据返回给客户端。
> - 服务端应该根据响应内容的格式设置一个合理的 Content-Type。

## 10.3 XML

HTML：超文本标记语言

XML: e==X==tension  ==M==arkup  ==L==anguage  可扩展标记语言

一种数据描述手段

老掉牙的东西，简单演示一下，不在这里浪费时间，基本现在的项目不用了。

淘汰的原因：数据冗余太多

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<students>
	<stu id="1">
    	<name>张三</name>
        <age>18</age>
        <sex>男</sex>
        <other height="175cm" weight="65kg" />
    </stu>
    <stu id="2">
    	<name>李四</name>
        <age>20</age>
        <sex>女</sex>
        <other height="170cm" weight="60kg" />
    </stu>
</students>

<script>
	// 假设服务器返回的是XML格式的数据
    var data = xhr.responseXML;
    // 接收到的data就直接当做document来处理即可，比如下面查找 “张三”
    data.getElementsByTagName('name')[0].innerHTML;
</script>
```

XML语法规范：

- 和html写法差不多
- 有且只有一个根标签
- 标签区分大小写
- 标签必须闭合
- 属性值必须加引号

如果服务器返回的是XML格式的数据，JS收到数据之后，把收到的数据当做document对象来处理即可。

# 11. 留言板案例

## 11.1 功能介绍及postman工具

- 案例功能介绍
    - 刷新页面，发送Ajax请求，向服务器请求数据（所有的留言）
    - 点击提交按钮，发送Ajax请求，向服务器发送新添加的数据，完成添加

- 用到的接口
    - getMsg
    - addMsg
- 测试接口的软件postman介绍
    - 安装软件
    - 演示发送请求

    ![](https://renquanxi.github.io/iamgeWarehouse/img/12-Ajax/ajax7.png)

## 11.2 发送请求，获取所有留言

首先将资料中的模板（message.html和assets文件夹）拿到public中。浏览器访问127.0.0.1:3000/message.html即可看到初始的页面效果。

```js
// 发生Ajax请求，请求 /getMsg 接口，获取所有的留言
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/getMsg');
  xhr.send();
  xhr.onload = function () {
    // console.log(this.responseText);
    var result = this.responseText; // 得到JSON格式的数据
    var data = JSON.parse(result);
    // console.log(data);
    // data.push();
    var str = '';
    data.forEach(function (value, index, arr) {
      // console.log(value);
      // console.log(arr);
      str += `<li class="media">
                <img class="mr-3" src="./assets/avatar.png" alt="张三">
                <div class="media-body">
                  <h4>${value.name}</h4>
                  <p>${value.content}</p>
                </div>
              </li>`;
    });
    // 将连接好的10个li，放到id为messages的ul中
    document.getElementById('messages').innerHTML = str;
  }
```

## 11.3 点击按钮，发送请求，添加留言

> 添加完留言，要想实时看到新添加的留言，则需要在添加完成之后，从新从服务器获取所有留言。为了方便，将前面的获取留言的代码封装成 `loadData` 函数。
>
> 为了不让表单提交，应设置表单的提交按钮的type属性为button

下面是添加留言的代码：

```js
// 点击“提交”按钮的时候，发送Ajax请求，完成留言的添加
document.getElementById('btn_send').onclick = function () {
	// 获取用户输入的称呼和内容
    var name = document.getElementById('txt_name').value;
    var content = document.getElementById('txt_content').value;
    // 发送Ajax请求，完成留言的添加
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/addMsg');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + name + '&content=' + content);
    xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.responseText) {
				// 继续调用获取留言的接口，获取所有的留言
				loadData();
			}
		}
	};
};
```

# 12. 模板引擎 #

## 12.1 模板引擎介绍

客户端中拿到请求的数据过后最常见的就是把这些数据呈现到界面上。

如果数据结构简单，可以直接通过字符串操作（拼接）的方式处理，但是如果数据过于复杂，字符串拼接维护成本太大，就不推荐了。

> 模板引擎：
>
> - artTemplate：https://aui.github.io/art-template/

模板引擎实际上就是一个 API，模板引擎有很多种，使用方式大同小异，目的为了可以更容易更高效的将数据渲染到HTML字符串中。

## 12.2 使用模板引擎步骤

1. 准备一个存放数据的盒子（不是必须的，使用body即可）
2. 引入template-web.js文件
3. 定义模板（具体语法可以去官网查看），==一定要指定script的id和type属性==
4. 调用template函数，为模板分配数据，template函数有两个参数一个返回值
    1. 参数1：模板的id
    2. 参数2：分配的数据，==必须是一个JS对象的形式==
    3. 一个返回值：是数据和模板标签组合好的结果（==一般这个大盒子都是直接使用一个变量名接收一下并并赋值给外面准备好的大盒子中的==）
5. 将 “拼接” 好的结果放到准备好的盒子中（不是必须的，console出来也可以看结果）

```html
	<script src="./assets/template-web.js"></script>

    <!-- 下面的script是模板 -->
    <script id="test" type="text/html">
        <h1>{{title}}</h1>
        <ul>
            <li>{{name}}</li>
            <li>{{content}}</li>
        </ul>
    </script>
    
    <script>
        // 
        var data = {
            title:'留言板-71',
            name: '李四',
            content: '呵呵呵呵呵'
        }
        // 调用template函数
        // template函数有两个参数，一个返回值
        // 参数1：模板标签的id
        // 参数2：要展示的数据，必须是JS对象
        // 返回值：数据和模板标签组合好的结果
        var html = template('test', data);

        console.log(html);
        document.body.innerHTML = html;
    </script>
```

> 定义模板时的script标签一定好指定id和type
>
> tempalte函数语法：var html = template(模板id,  Object);

## 12.3 模板语法

- 输出普通数据（字符串、数值等）

    ```html
    </--模板写法>
    <!-- 下面的内容在线上会报错，所以注释掉 -->
    <!-- <script id = "id名" type = "text/html">
    	{{var}}
    </script>-->
    
    </--template函数写法>
    <!-- <script>
    	var html = template（'id名'，{var：'hellow word'}）
    </script> -->
    
    ```

- 条件

    ```html
    </--模板写法>
    <!-- 下面的内容在线上会报错，所以注释掉 -->
    <script id="id名" type="text/html">
    	{{if age > 18}}
    		大于18时要执行的代码
    	{{else}}
    		小于18时要执行的代码了】
    	
    	{{/if}}
    	
    </script>
    <script>
    	var html = template('id名'，{age：20})；
    </script>
    </--template函数写法>
    ```

- 循环

    ```html
    </--模板写法>
    <!-- 下面的内容在线上会报错，所以注释掉 -->
    <!-- <script id="id名" type=text/html >
    	{{each arr}}
    		{{$index}}   //--数组的下标
    		{{$value}}   //数组的值
    	{{/each}}
    </script>
    <script>
    	var html = template('id名'，{arr:数组})
    </script> -->
    </--template函数写法>
    ```

## 12.4 案例中使用模板引擎处理响应数据

<!--13.4-模板引擎-应用到案例中-->

```html
<!-- 引入template-web.js -->
<script src="/template-web.js"></script>

<!-- 定义模板 -->
<script id="data" type="text/html">
    {{each arr}}
    <li class="media">
      <img class="mr-3" src="avatar.png" alt="">
      <div class="media-body">
        <h4>{{$value.name}}</h4>
        <p>{{$value.content}}</p>
    </div>
    </li>
    {{/each}}
</script>
```

```js
xhr.onreadystatechange = function () {
	if (this.readyState === 4) {
		// 完全接收到服务器返回的数据
    	var data = this.responseText;
    	// 将JSON格式的数据，转换成JS数据
    	data = JSON.parse(data);

    	// 使用模板引擎，不用拼接字符串了
    	var html = template('data', {
      		arr: data
    	});
    
    	// 把处理好的html放到ul中
    	document.getElementById('messages').innerHTML = html;
  }
};
```

# 13. 封装

## 13.1 jQuery 中封装的 AJAX

jQuery 中有一套专门针对 AJAX 的封装，功能十分完善，经常使用，需要着重注意。

> 一个你会用我会用他会用到的点，就一定有一个已经封装好的

> 参考：
> - http://www.jquery123.com/category/ajax/
> - http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp

### 13.1.1 $.ajax

```javascript
$.ajax({
  url: '/time',
  type: 'get',
  dataType: 'json',
  data: { id: 1 },
  beforeSend: function (xhr) {
    console.log('before send')
  },
  success: function (data) {
    console.log(data)
  },
  error: function (xhr) {
    console.log(xhr)
  },
  complete: function (xhr) {
    console.log('request completed')
  }
})
```

常用选项参数介绍：

- cache: 设置ie浏览器的缓存问题， cache: false 不缓存
- ==url==：请求地址
- ==type== / method：请求方法，默认为 `get`
- dataType：预期服务端响应数据类型（服务器返回数据的类型）
- contentType：请求体内容类型，如果是POST请求，默认值 `application/x-www-form-urlencoded`
- ==data==：（object|string）传递到服务端的数据，如果是对象类型，则jQuery内部会将对象转化成字符串
- timeout：请求超时时间
- beforeSend：请求发起之前触发
- complete：请求完成触发（不管成功与否）
- ==success==：请求成功之后触发（响应状态码 200）
- error：请求失败触发
- processData：是否让jQuery帮我们将发送给服务器的数据进行处理（默认：true表示将对象处理成字符串）

### 13.1.2 jQuery封装的发送Ajax请求的快捷方法

**GET 请求快捷方法**

`$.get(url, [data], [callback], [dataType])`

`$.get({settings})`

**POST 请求快捷方法**

`$.post(url, [data], [callback], [dataType])`

`$.post({settings})`

### 13.1.3 全局事件处理

每次Ajax请求都需要的事件，比如给一个请求响应过程进度提示，可以使用全局事件处理。反过来说，通过全局事件处理的事件，后续的每个ajax请求都会触发。

- 语法

    - `$.ajaxSetup({事件: 处理函数, 事件:处理函数, ...});`

- 示例

    ```js
    // 设置全局事件处理
    $.ajaxSetup({
        // 设置发送请求前的事件
        beforeSend: function () {
            // 这里可以提示，玩命加载中...
        },
        // 设置完全接收响应数据后的事件
        complete: function () {
            // 这里可以去掉“玩命加载中...”
        }
    });
    ```

- 进度提示插件--Nprogress

    - https://github.com/rstacruz/nprogress
    - 使用方式
        - 引入nprogress.css
        - 引入nprogress.js
        - beforeSend方法中，调用 `NProgress.start();`
        - complete方法中，调用 `NProgress.done();`

参考链接：

> http://www.jquery123.com/category/ajax/global-ajax-event-handlers/

## 13.2 其他封装库Axios

Axios 是目前应用最为广泛的 AJAX 封装库，相对于 jQuery 的优势在于功能能强劲，职责更单一，后期专门有介绍。

```javascript
axios.get('/time')
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (err) {
    console.error(err)
  })
```

> *扩展：https://github.com/axios/axios

## 13.3 自己封装ajax函数

前面发送ajax请求的时候，总是要写大量重复的代码，用起来非常麻烦，为了简化ajax的使用，自己封装一个函数。

> 函数就可以理解为一个想要做的事情，函数体中约定了这件事情做的过程，直到调用时才开始工作。

```javascript
/**
 * 发送一个 AJAX 请求
 * @param  {String}   url    请求地址
 * @param  {String}   method 请求方法
 * @param  {Object}   params 请求参数
 * @param  {Function} done   请求完成过后需要做的事情（委托/回调）
 */
function ajax (method, url, params, done) {
  // 统一转换为大写便于后续判断
  method = method.toUpperCase()

  // 对象形式的参数转换为 urlencoded 格式
  var queryArray = []
  for (var key in params) {
    queryArray.push(key + '=' + params[key])
  }
  var queryString = queryArray.join('&')

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

  xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      done(this.responseText);
  };

  // 如果是 GET 请求就设置 URL 地址 问号参数
  if (method === 'GET') {
    url += '?' + queryString
  }

  xhr.open(method, url)

  // 如果是 POST 请求就设置请求体
  var data = null
  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    data = queryString
  }
  xhr.send(data)
}

// 测试
ajax('get', '/query-get', { id: 123 }, function (data) {
  console.log(data)
})

ajax('post', '/query-post', { foo: 'posted data' }, function (data) {
  console.log(data)
})
```

> **委托**：将函数作为参数传递就像是将一个事情交给别人，这就是委托的概念

# 14. XMLHttpRequest 2.0

> 暂作了解，无需着重看待

**HTML5 中对 XMLHttpRequest 类型全面升级，更易用，更强大**

## 14.1 responseType / response

- responseType -- 预期服务器返回数据的类型
    - “”  -- 空，表示文本，和text一样。空为默认值
    - text -- 文本
    - json -- JSON格式数据
    - document -- 文档对象，当服务器返回的是XML格式的数据，则设置为document
- response
    - response 可以接收任何类型的服务器返回的数据
    - 根据responseType的值自动处理返回结果，可以接收任何类型的结果

## 14.2 onload / onprogress

> 课后自行了解 onloadstart();  onloadend();

- onload：当readyState==4的时候触发，表示已经完全接收到了返回的数据
- onprogress：当readyState==3的时候会触发，表示数据正在返回途中，数据正在下载中
- onloadstart：当请求开始时，会触发
- onloadend：当请求响应整个过程结束，会触发

```javascript
var xhr = new XMLHttpRequest()
xhr.open('GET', '/time')
xhr.onload = function () {
  // onload readyState => 4
  // 只在请求完成时触发
  console.log(this.readyState)
}
xhr.onprogress = function () {
  // onprogress readyState => 3
  // 只在请求进行中触发
  console.log(this.readyState)
}
xhr.send(null)

// 结果是 3 4
// 因为 onprogress事件会先触发，onload事件最后触发
```

## 14.3 FormData（重要）

FormData是h5中新增的一个内置对象。

FormData对象用以将数据编译成键值对，以便用`XMLHttpRequest`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。

以前 AJAX 操作只能提交字符串，现在可以提交 **二进制** 的数据

- 使用方法一（有form表单）

    ```html
    <form id="fm">
        <input type="text" name="user"><br>
        <input type="password" name="pwd"><br>
        <input type="radio" name="sex" value="男" checked>男
        <input type="radio" name="sex" value="女">女<br>
        <input type="file" name="pic"><br/>
        <input type="button" id="btn" value="提交">
    </form>
    
    <script>
        // 点击按钮的时候，收集表单中的数据，并发送给服务器
        document.getElementById('btn').onclick = function () {
            // 使用FormData步骤1：找到表单
            var fm = document.getElementById('fm');
            // 使用FormData步骤2：创建FormData对象，并传递表单
            var fd = new FormData(fm);
    
            // 发送ajax请求到服务器
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/fd'); // 接口fd，收到提交的数据后，会返回收到的数据
            // 使用FormData收集表单数据的时候，Content-Type不用设置
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(fd);
            xhr.onload = function () {
                console.log(this.response);
            };
        };
    </script>
    ```

- 使用方法二（没有form表单）

    ```php+HTML
    
    <input type="text" id="user"><br>
    <input type="password" id="pwd"><br>
    <input type="file" id="pic"><br/>
    <input type="button" id="btn" value="提交">
    
    <script>
        // 点击按钮的时候，收集表单中的数据，并发送给服务器
        document.getElementById('btn').onclick = function () {
    
            // 没有表单，只能先实例化FormData
            var fd = new FormData();
    		// 调用FormData对象中的方法，向对象中添加数据
            fd.append("username", document.getElementById('user').value);
    		fd.append("pwd", document.getElementById('pwd').value); 
    		//添加的第一个值是key  第二个值是value
    		// HTML 文件类型input，由用户选择
    		fd.append("userfile", document.getElementById('pic').files[0]);
            // 发送ajax请求到服务器
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/fd'); // 接口fd，收到提交的数据后，会返回收到的数据
    
            // 使用FormData收集表单数据的时候，Content-Type不用设置
            xhr.send(fd);
            xhr.onload = function () {
                console.log(this.response);
            };
        };
    </script>
    ```

jQuery中使用FormData：

在jquery中使用formDate时候一定要把==contentType==和==processData==设置为false；

```html
	<form id="fm">
        <input type="text" name="user"><br>
        <input type="password" name="pwd"><br>
        <input type="radio" name="sex" value="男" checked>男
        <input type="radio" name="sex" value="女">女<br>
        <input type="file" name="pic"><br />
        <input type="button" id="btn" value="提交">
    </form>

    <script src="/jquery.js"></script>
    <script>

        $('#btn').click(function () {
            var fm = $('#fm');
            var fd = new FormData(fm[0]); // 这里fm必须是DOM对象
            console.log(fd);

            $.ajax({
                type: 'post',
                url: '/fd',
                // 如果data使用的是对象，ajax方法会把对象转成字符串，
                // 即把{name: 'zs', age: 18}转成name=zs&age=18
                // data: {name: 'zs', age: 18}, 
                data: fd,
                // processData: false, 表示不让jQuery把fd对象转成字符串，而是直接发送fd对象
                processData: false,
                // contentType：false，表示不让jQuery去设置content-type，让FormData去处理
                contentType: false,
                success: function (res) {
                    console.log(res);
                }
            });
        });

        // xhr.send('name=zs&age=18');
    </script>
```



参考链接：

https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects

# 15. HTTP 协议

<!--17.1-HTTP协议-了解HTTP协议及报文-->

## 15.1 HTTP 协议概述

- HTTP(HyperText Transfer Protocol) 超文本传输协议
- HTTP 是一种能够获取如 HTML 这样的网络资源的 [protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol) (通讯协议)。
- 是一种 client-server 同时要遵守的协议
- 请求通常是由像浏览器这样的接受方发起的
- HTTP 协议中规定了请求数据和响应数据的格式(**报文**)

## 15.2 请求报文

- 请求报文
    - 浏览器再向服务器发送请求的时候，会携带的数据
    - 该数据是特定格式的字符串
    - 可以使用 chrome 监视请求并查看请求报文

- 请求报文格式
    - 请求行

        - 请求方法(常见的 GET 和 POST)

        - 请求路径

        - 协议版本

            ```http
            GET / HTTP/1.1
            GET /index.html HTTP/1.1
            ```

    - 请求头

        - 浏览器再向服务器发送请求的时候携带了附加信息
        - 由键值对组成
        - [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)

        | 键              | 值                                      |
        | --------------- | --------------------------------------- |
        | Host            | 请求的主机                              |
        | Cache-Control   | 控制缓存（例如：max-age=60 缓存 60 秒） |
        | Accept          | 客户端想要接收的文档类型，逗号分隔      |
        | User-Agent      | 标识什么客户端帮你发送的这次请求        |
        | Referer         | 这次请求的来源                          |
        | Accept-Encoding | 可以接受的压缩编码                      |

    - 请求体

        - GET 请求没有请求体
        - POST 请求有请求体，请求体就是发送给服务器的数据

## 15.3 响应报文

- 请求报文
    - 浏览器向服务器获取响应数据的时候，服务器返回的一些特定的数据
    - 该数据是特定格式的字符串
    - 可以使用 chrome 监视请求并查看请求报文

- 响应报文组成

    - 响应行

        - 协议版本

            ```js
            HTTP/1.1 200 OK
            // 需要主题的是200，它表示状态码
            // 状态码：
            // - 描述了请求过程中所发生的情况
            // - 每个状态码的第一位数字都用于描述状态的一般类别("成功"、"出错"等)
            // - 常见状态码
            //   - 200 - 成功
            //   - 404 - 请求的资源部存在
            //   - 500 - 服务器内部错误
            // 参考链接 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
            ```

    - 响应头

        - 服务器返回响应的时候携带了附加信息
        - 由键值对组成

        | 键               | 值               |
        | ---------------- | ---------------- |
        | Date             | 响应时间         |
        | Server           | 服务器信息       |
        | **Content-Type** | 响应体的内容类型 |
        | Content-Length   | 响应的内容大小   |

    - 响应体

        - 返回的主体内容，如果请求的是网页返回网页的内容，如果请求的是图片返回图片的内容

## 15.4 Ajax请求遵循 HTTP

<!--17.4-Ajax请求中如何获取报文相关内容-->

本质上 XMLHttpRequest 就是 JavaScript 在 Web 平台中发送 HTTP 请求的手段，所以我们发送出去的请求任然是 HTTP 请求，同样符合 HTTP 约定的格式：

```javascript
// 设置请求报文的请求行
xhr.open('GET', '/time')
// 设置请求头
xhr.setRequestHeader('Accept', 'text/plain')
// 设置请求体
xhr.send(null)

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    // 获取响应状态码
    console.log(this.status)
    // 获取响应状态描述
    console.log(this.statusText)
    // 获取响应头信息
    console.log(this.getResponseHeader('Content-Type')) // 指定响应头
    console.log(this.getAllResponseHeaders()) // 全部响应头
    // 获取响应体
    console.log(this.responseText) // 文本形式
    console.log(this.responseXML) // XML 形式，了解即可不用了
  }
}
```

> 参考链接：
>
> - https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
> - https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest