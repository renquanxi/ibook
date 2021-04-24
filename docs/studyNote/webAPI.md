# webApI

## JavaScript组成

​	**ECMAScript核心语法**

​		i变量

​		数据类型

​		分支结构

​		运算符

​		数组函数  

​		对象

​		内置对象	

​	**DOM**<!--文档对象模型  这个页面就是文档即document-->

 	**BOM**  <!--浏览器对象模型-->

<!--DOM属于BOM的一部分，因为DOM在BOM中占据的分量重，而且操作频繁，所以一般都是单独抽出来的-->

### API和webAPI

API是应用程序编程接口（）

webapi是浏览器提供了帮助我们操作网页和浏览器的工具（DOM和BOM）



## DOM部分----操作元素

### 1.获取元素

#### 	**根据id值获取元素**

​	语法：document.getElementById（‘id值’）；

![](https://renquanxi.github.io/iamgeWarehouse/img/id获取标签.png)



#### 	**根据标签名获取一组元素**

​	语法：document.getElementsByTagName('标签名')；

<!--标签名得到的是一组元素，打印出的是一个伪数组-->

​	eg：

```html
<ul>
    <li></li>
     <li></li>
     <li></li>
     <li></li>
</ul>
<script> 
    var a = document.getElementsByTagName('li');
    console.log(a);
    
</script>

```

![](https://renquanxi.github.io/iamgeWarehouse/img/标签名获得元素.png)

#### **==根据选择器获取元素==**<!--最常用的-->

语法：var 变量名 = document.querySelector('选择器')<!--选择单独的一个标签-->

​	   var 变量名 = document.querySelectorAll('选择器')<!--选择所有的该标签-->

![](https://renquanxi.github.io/iamgeWarehouse/img/根据选择器获取元素2.png)

![](https://renquanxi.github.io/iamgeWarehouse/img/通过标签选择元素1.png)

<!--括号中可以写任何选择器-->

### 事件基础

#### 定义

​	在浏览器中js所侦测到的操作行为（和网页的交互行为），比如鼠标点击，鼠标进入，鼠标离开等

#### 事件三要素

* 事件源→如被点击的按钮

* 事件类型→鼠标的什么样的操作，比如鼠标点击（onclick），进入等等

* 事件处理程序→事件发生后的结果

  

#### 给元素注册事件

* 语法：元素.事件类型=事件处理程序；

  * 元素：获取元素

    

  * 事件类型：鼠标点击：onclick

    ​                   鼠标进入： onmouseenter

    ​                   鼠标离开：onmouseleave

  * 事件处理程序：函数

  ![](https://renquanxi.github.io/iamgeWarehouse/img/给元素注册事件.png)



#### 事件处理程序中的this





#### 取消a标签的默认属性行为

1.给函数中添加return false；

2.给a标签的href值改为javascript：

### 操作元素的属性

1.获取   元素.属性名；

   设置     元素.属性名 = 值；

2.常见的属性  id，title，src，className，innerText/textContent，innerHTML

​     一般是先获取到需要设置的标签并赋值给一个变量，

​     然后是   **变量.属性名= 值**

eg

操作className（其余的也是一样的操作，提取更改即可）

![](https://renquanxi.github.io/iamgeWarehouse/img/操作属性名.png)

**innerText/textContent**  这两两个是之提取文字不会提取标签，

**innerHTM**L文字和标签样式都会提取；

innerText和textContent的区别

innerText：野路子的   兼容性好（常用）

textContent：官方的  但是兼容性不好（一般不用）



### 操作元素的样式

#####  1.通过style设置属性样式

​	语法：元素style.样式.属性名 = '样式属性值'；

![](https://renquanxi.github.io/iamgeWarehouse/img/通过设置元素样式.png)

##### 2.通过className设置元素样式（即修改类名）

![](https://renquanxi.github.io/iamgeWarehouse/img/操作属性名.png)

<!--案例详见wapi练习篇day-2-->



### 操作表单元素的属性

##### 	value操作表单元素的内容

​		1.获取：元素.value；返回字符串

​		2.设置：元素.value = 布尔值；

##### 	disabled操作表单元素是否禁用

​		1.获取：元 素.disabled ；返回布尔值（true禁用，false不禁用）

​		2.设置：元素.disabled = 布尔值；

##### 	checked操作表单元素是否选中

​		获取：元素.checked；返回布尔值

​		设置：元素.checked = 布尔值；

##### 	selected操作表单元素的是否选中

​		获取：元素.selected；

​		设置：元素.selected = 布尔值

<!--案例详见wapi练习篇day-2-->



​	

### 自定义属性行内属性【了解】

* 获取

  > * 语法：**元素.getAttribute(name);** 

* 设置

  > * 语法：**元素.setAttribute(name,value);** 

* 移除

  > * 语法：**元素.removeAttribute(name);** 

### 节点的层级

* 根据**子节点获取父节点**

  > * 语法：==**子节点.parentNode**  【重点】==

* 根据**父节点获取子节点**

  > * 语法：**父节点.childNodes;** 
  > * 语法：==**父元素.children;**  【重点】==
  > * 语法：**父节点.firstElementChild;** 
  > * 语法：**父节点.lastElementChild;** 

* 节点的nodeType、nodeName、nodeValue的属性【了解】

  * nodeType 检测节点的类型

  * nodeName 检测标签的名称（大写）

  * nodeValue 检测文本节点的内容

    ```html
    <!--元素节点类型 nodeType-->
    
    <div id="foo" class="xxx"></div>hello<p id="foo2"></p><!-- comment -->
    <script>
        //元素节点 nodeType = 1
        console.log(document.getElementById('foo').nodeType); 
        //属性节点 nodeType = 2
        console.log(document.getElementById('foo').attributes['id'].nodeType);
        //文本节点 nodeType = 3
        console.log(document.getElementById('foo').nextSibling.nodeType);
        //注释节点 nodeType = 8
        console.log(document.getElementById('foo2').nextSibling.nodeType);
        //文档节点 nodeType = 9
        console.log(document.nodeType);
        //fragment节点 nodeType = 11
        console.log((document.createDocumentFragment()).nodeType);
    </script>
    ```

    

* 获取兄弟节点

  > * 获取下一个兄弟元素（==只是指的下一个元素节点而已==）
  >
  >   * 语法：**节点.nextElementSibling** 
  >
  >     <!--要区别于 节点.nextsibling 他指的是下一个节点，包括 文本节点，注释节点，元素节点 等等-->
  > * 获取上一个兄弟
  >
  >   * 语法：**节点.previousElementSibling** 

### 元素的动态增删

#### 动态创建元素

###### **通过innerHTML创建元素**

语法:元素.innerHTML = 内容;

###### **通过document.createElement()创建元素**

语法   document.createElement('标签名');<!--返回一个新的元素对象-->

**区别**

innerHTML执行速度慢(大量字符串拼接的情况下),性能差,不推荐使用

createElement 方法执行速度快,性能高,在实际开发中  推荐使用

#### 动态追加元素

语法:父元素.appendChild(新创建的子元素);

eg**动态创建和增加元素**

![](https://renquanxi.github.io/iamgeWarehouse/img/动态创建增加元素.png)

#### 动态删除元素

语法:父元素.removeChild (子元素);

eg:**删除元素**

![](https://renquanxi.github.io/iamgeWarehouse/img/删除元素.png)

<!--元素增删注意事项-->

<!--1.增元素时括号中要写字符串格式，并且字符串中只写标签名即可-->

<!--2.追加给父元素和删除元素时括号内都只写创建的元素赋值的变量名即可-->



#### 其他操作

#####  插入元素

* 语法：**父节点.insertBefore(新的节点,旧的子节点)** 

  注意细

  ​	当鼠标点击按钮以后新创建的元素插入之前旧的元素前面时候

  ​	获取旧的元素需写在给按钮注册点击事件的函数里面

  ![](https://renquanxi.github.io/iamgeWarehouse/img/插入元素最顶部.png)

##### 替换元素

* 语法：**父节点.replaceChild(新的节点,旧的子节点)** 

##### 克隆元素

* 语法：元素.cloneNode(true或false);  返回一份新的克隆后的元素，默认值false
  * true，克隆该元素的所有内容
  * false，仅仅克隆外层标签

##### 

### 事件对象

定义 ：在事件触发后，在事件处理程序中（函数体），所获取并操作的对象

获取：**事件源.事件类型 = function（e）{//第一个形参e就是事件对象  }**

* **鼠标事件类型**

  * onclick                  鼠标点击
  * onmouseenter   鼠标进入（不支持冒泡，即不能进行事件委托）
  * onmouseover     鼠标进入（支持冒泡，即可以进行事件委托）
  * onmouseleave    鼠标离开
  * onmouseout       鼠标离开
  * onmousemove   鼠标移动
  * onmousedown   鼠标按下
  * onmouseup        鼠标抬起

* 鼠标事件相关属性--获取鼠标位置

  * 事件对象.clientX      |   事件对象.clientY     参照的浏览器
  * 事件对象.pageX       |  事件对象.pageY       参照的文档
  * 事件对象.affsetX      |  事件对象.offsetY     参照当前的元素

* **

  <!--一般键盘事件都绑定给了document-->

* 键盘事件相关属性---键盘按下哪个键
  * ==事件对象.keyCode==   获取键盘按键对应的键码值

  * 事件对象.altKey        表示alt键是否按下，返回布尔值

  * 事件对象.shiftKey     表示shift键是否按下，返回布尔值

  * ==事件对象.ctrlKey==       表示ctrl键是否按下，返回布尔值

    ![](https://renquanxi.github.io/iamgeWarehouse/img/判断特殊键是否按下.png)

==**事件源.on事件类型（）**==  **用程序触发事件**

### 事件的公共属性和方法

* 属性

  * 事件对象.target      获取最先触发的元素

  * 和 this的区别            

    * this在事件处理程序中始终指向事件源
    * e.target代表的不一定是事件源，代表的最先触发的元素

    

* 方法

  * 事件对象.preventDefault   阻止默认行为
  * 事件对象.stoppropagation   停止冒泡传播

* 





### 事件监听

<!--事件监听的事件，只能叠加不会覆盖之前注册的事件-->

1. 事件监听注册事件

   语法：**事件源.addEventlistener（‘事件类型’，事件处理程序，是否捕获）**；

   ​			<!--事件源 → 操作的元素-->

   ​			<!--事件类型 → 事件除去on的部分-->

   ​			<!--是否捕获，可选参数，默认是false，true是捕获，false是冒泡-->

   ![](https://renquanxi.github.io/iamgeWarehouse/img/监听事件.png)

2. 事件监听移除事件

   <!--这是标准方法 IE8以下兼容性有问题-->

   语法：**事件源removeEventListener('事件类型'，事件处理程序名称)**

   ![](https://renquanxi.github.io/iamgeWarehouse/img/标准方式移除监听事件.png)

   <!--这是传统的 兼容性较好-->

   语法：事件源.事件类型 = ‘none’

   ![](https://renquanxi.github.io/iamgeWarehouse/img/传统方式移除事件.png)


### 事件委托

事件委托（事件代理）：把子孙元素的事件注册，完全交给子孙元素的上级代理元素代理。

<!--只有下级委托上级，没有上级委托下级的-->

实现：

1. 给子孙元素的上级元素注册事件

2. 在事件处理程序，通过事件==对象.target==获取最先触发事件的元素

3. 可以通过==事件对象.target.nodeNamel==来检测最先出发的是否是指定元素

   ![](https://renquanxi.github.io/iamgeWarehouse/img/事件委托.png)

事件委托作用

* 减少事件的绑定，节省内存。
* 上级元素可以代理添加未来的新动态添加的元素

事件委托的原理

* 关键：事件对象.target；可以获取最先触发的元素。
* 原理：因为事件冒泡的存在，我们才可以获取到最先触发的元素

### BOM操作部分

概念：浏览器对象模型

![](https://renquanxi.github.io/iamgeWarehouse/img/01.png)

#### 顶级对象window（定时器）

1. window对象

   被称为  全局对象  或  顶级对象

   ​	因为全局变量和全局函数本质上都是window对象的属性和方法

   ​		window对象可以省略

   ​	window中的弹出框

   ​		alert  警告框

   ​		prompt  输入框

   ​		confirm   删除确认框

   **定时器1：window.setTimeout (callback,time);**

   <!--callback，函数定义，函数体中存放定义器要执行的代码-->

   <!--time等待的时间，数字表示毫秒-->

   

   <!--当定时器代码与非定时器代码同时出现时，优先执行非定时器代码-->

   

   ​	作用：延迟执行一段程序，==仅仅执行一次（定时炸弹）==，返回一个数字表示是哪个定时器

   清除定时器：window.clearTimeouot(n)<!--n表示清除哪个定时器-->

   

   ![](https://renquanxi.github.io/iamgeWarehouse/img/定时炸弹定时器.png)

   **定时器2：window.setlnterval（callback，time）；**

   * 作用：延迟执行一段程序==重复执行（闹钟）==返回一个数字，表示哪个定时器

     <!--callback，函数定义，函数体中存放定义器要执行的代码-->

     <!--time等待的时间，数字表示毫秒-->

   * 清除定时器

     window.clearlnterval(定时器的标识)

     ![](https://renquanxi.github.io/iamgeWarehouse/img/循环定时器闹钟.png)

     

2. location对象

   * location对象，是来操作地址栏的

   * 属性

     * location.href  设置或获取地址栏地址

       location.href = 'https://www.jd.com';

   * 方法

     * location.reload();刷新页面

3. history对象

   用来操作历史记录的

   属性：history.length；获取历史记录长度

   方法 ：

   ​	history.back()  ;会退到上一个历史记录

   ​	history.forward(); 前进到笑一个历史记录

   ​	history.go（数字）；正数表示前进，负数表示回退

4. navigator对象

   用来获取浏览器信息

   ​	属性

   ​	avigator.userAgent; 用来获取浏览器的信息

### 元素的三大系列的属性

​		元素.style.样式属性名   只能设置元素的样式，和获取行内样式的值，无法获取外链样式和内部样式的值，所以才学习了元素三大系列的属性

#### 元素的offset属性

1. 获取元素大小

   元素的offset系列的属性

   * 元素.offsetWidth / 元素.offsetHeight;

     返回的是数字,           大小包含：内容 + padding + border；

     该属性是==只读的，只能调用不能设置==

     ![](https://renquanxi.github.io/iamgeWarehouse/img/offset属性1.png)

2.  获取元素位置

   元素.offsetTop / 元素.offsetLeft ;

   * 返回的是数字，（参照谁？看定位关系）
   * ![](https://renquanxi.github.io/iamgeWarehouse/img/offset属性2.png)
   * ![](https://renquanxi.github.io/iamgeWarehouse/img/offset属性2.1.png)

3.  获取元素父元素

   元素.offsetParent  和  元素.parentNode 的区别

   * 元素.offsetParent 获取 ‘父元素’ 是按照定位关系的
   * 元素.parentNode 获取 ‘ 父元素’  是按照标签关系的
   * ![](https://renquanxi.github.io/iamgeWarehouse/img/offset属性4.png)

#### 元素的client的属性（了解）

获取元素的大小

* 元素.clientWidth / 元素.clientHeight

  获取元素的大小   包含【内容+padding】不包含边框

* ​	![](https://renquanxi.github.io/iamgeWarehouse/img/client的属性1.png)















































 

