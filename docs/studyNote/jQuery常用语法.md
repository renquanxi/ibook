## jQuery常用语法

jQuery本质是一个函数

参数selector表示调用该函数时传入的一个字符串格式的选择器

调用完毕以后返回了一个jQuery对象

返回的这个  jQuery对象的本质是一个伪数组

这个伪数组中的个体都是DOM对象



### jQuery对象

获取对象

​	$('选择器')；返回一个jquery对象

DOM对象传jquery对象

​	$(DOM对象)；返回一个jQuery对象

```html
<div>我是一个盒子</div>
<script src="lib/jquery-1.12.4.js"></script>
<script>
 // DOM对象
 var element = document.querySelector('div');
 // 调用DOM对象中的属性
 console.log(element.innerText);
 // 把DOM对象转换成jQuery对象
 var $element = $(element);
 console.log($element.text());
</script>
```



jquery对象转DOM对象

​	jQuery对象[索引]





### jQuery注册事件

<!--jQuery注册的事件和事件监听是一样的-->

​	$(‘选择器’).事件名（事件处理程序）；<!--事件名不带on-->

```html
<button>按钮1</button>
<script src="lib/jquery-1.12.4.js"></script>
<script>
 // $('选择器'). 事件名(事件处理程序);
 // $('button').click( function(){
 //   //  事件触发要执行的程序
 //   alert('燃烧我的卡路里！');
 // } );

 $('button').mouseenter(function(){
   alert('鼠标进入按钮')
 });
</script>
```

### jQuery事件操作

* 简单方式注册事件

  $().事件名（事件处理程序）；

* on方式注册事件

  * 注册简单事件语法：

    ​        $().on('事件名'，'选择器'，'事件处理程序')

  * 事件委托的时间：

    ​        $(父元素选择器).on('事件名'，'要用事件的元素的选择器'，'事件处理程序')

    代码

    ```js
    // 注册简单的事件
        $('button').on('click',function(){
          alert(1);
        });
    
        // 【JQ方式实现事件委托-把li委托给ul】
        $('ul').on('click','li',function(){
          // this 是谁？ 当前点击的li
          console.log(this);
          alert($(this).text());
        });
    ```

* off方法移除事件

  * 解绑简单的事件：$().off('事件名'，事件处理程序名称)

  * 解绑事件委托注册的事件：$(父元素选择).off（‘事件名’，事件处理程序名称）

    <!--一般事件需要解绑的话，都需要将事件处理程序单独定义在外面。然后事件注册时里面直接调用事件处理程序的名称-->

    代码

    ```js
       // 解绑按钮的事件处理程序：fn1和fn2
        $('button').off('click',fn1);
        $('button').off('click',fn2);
    
        // 解绑通过事件委托给p注册的事件处理程序 fn2
        $('div').off('click','p',fn2);
    ```

* 触发事件

  $(需要触发事件的元素).trigger(’事件名‘)；

  代码

  ```js
  $('button').trigger('click');
  ```

* 事件对象                                                                                        

  > 如何获取事件对象？
  >
  > ​	事件处理程序的第一个形参-e
  > e||window.event

  * 鼠标事件对象相关的属性
    * 事件对象.clientX/Y   参照浏览器
    * 事件对象.pageX/Y    参照文档
    * 事件对象.offsetX/Y   参照元素
  * 键盘事件对象相关的属性
    * 事件对象.keyCode   返回键码数字
    * 事件对象.alt/shift/ctrlKey   返回是布尔值。 检测是否按下（true）
  * 公共的属性或方法
    * 属性
      * 事件对象.target;
    * 方法：
      * 事件对象.preventDefault();   阻止默认行为
      * 事件对象.stopPropagation();  阻止事件冒泡

### jQuery的css方法操作样式

* 设置单个样式：$('选择器').css('name','value');

* 设置多个样式：

  > $(‘选择器’).css{
  >
  > ​	name:value,
  >
  > ​	name:value,
  >
  > ​	name:value,
  >
  > ​	name:value
  >
  > }

  ```js
   // 设置单个样式
   $('div').css('width',500);
   $('div').css('height','500px');
   // 设置多个样式,传入对象
   $('div').css({
     width:600,
     height:600,
     background:'pink'
   });
  ```

  

获取样式值：$('选择器').css('样式属性名')；

```js
 // 获取样式值
 var v = $('div').css('font-size');
 console.log(parseInt(v));
```

### 通过选择器获取jQuery对象

**基本选择器**

| 名称       | 用法              | 描述                                 |
| ---------- | ----------------- | :----------------------------------- |
| ID选择器   | $('#id')          | 获取指定ID的元素                     |
| 类选择器   | $('.class')       | 获取同一类class的元素                |
| 标签选择器 | $('div')          | 获取同一类标签的所有元素             |
| 并集选择器 | $('div,p,li')     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $('div.redClass') | 获取class为redClass的div元素         |

**层级选择器**

| 名称       | 用法         | 描述                                                        |
| ---------- | ------------ | :---------------------------------------------------------- |
| 子代选择器 | $('ul > li') | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $('ul li')   | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |

 **过滤器选择器**

* 这类选择器都带冒号:

| 名称       | 用法                              | 描述                                                         |
| ---------- | --------------------------------- | :----------------------------------------------------------- |
| :eq(index) | $('li:eq(2)').css('color', 'red') | 获取到的li元素中，选择索引号为2的元素，索引号index**从0开始。** |
| :odd       | $('li:odd').css('color', 'red')   | 获取到的li元素中，选择索引号为奇数的元素                     |
| :even      | $('li:even').css('color', 'red')  | 获取到的li元素中，选择索引号为偶数的元素                     |

案例：隔行变色

**选择器筛选方法**

* 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称               | 用法                       | 描述                             |
| ------------------ | -------------------------- | :------------------------------- |
| children(selector) | \$('ul').children('li')    | 相当于\$('ul > i')，子类选择器   |
| find(selector)     | \$('ul').find('li')        | 相当于\$('ul li'),后代选择器     |
| siblings(selector) | $('#first').siblings('li') | 查找兄弟节点，不包括自己本身。   |
| parent()           | $('#first').parent()       | 查找父亲                         |
| eq(index)          | $('li').eq(2)              | 相当于$('li:eq(2)'),index从0开始 |
| next()             | $('li').next()             | 找下一个兄弟                     |
| prev()             | $('li').prev()             | 找上一次兄弟                     |

### jquery操作类名

* 添加类名

  ​	$('选择器 ').addClass('类名')

  ```html
  <div></div>
  <script>
     $('div').addClass('show');
  </script>
  ```

* 移除类名

  ​	$('选择器').removeClass('类名')；

* 检测类名是否存在

  ​	$('选择器').hasClass('类名')；返回布尔值

* 类名切换

  $('选择器').toggleClass('类名') 会检测是否存在该类名，存在就移除，不存在就追加

  **案例：tab切换**

  <!--参考jq-day-2-->

### jQuery操作标签属性

标签属性：

​	系统自带的：id，src，title，href······

​	自定义的：bigsrc           <!--自定义属性一般用于暂时储存值，eg：范大惊案例，就自定义了一个属性暂存大图的地址-->

​	一系列方法： getAttribute(name)  、setAttribute(name,value)、removeAttribute(name)

* 设置标签属性（吹biu特）

  ​	$('选择器').attr（name，value）；

  ```html
  <div></div>
  <script>
      $('div').attr('pid',10010);
  </script>
  ```

*  获取标签属性值

  ​	$('选择器').attr（name）;

*  移除标签的属性

  ​	$('选择器').remove（name）

*  prop方法操作标签属性

  <!--prop是针对表单元素的selected，disabled，checked属性-->

  * 获取

    ​	$('选择器').prop('属性名')

    ```html
    <input type="checkbox" />
    </script>
      var isC = $('input').prop('checked');  
      console.log(isC); // false;
    </script>
    ```

  * 设置

    ​	$().prop('属性名'，值)；

    ```html
    <input type="checkbox" />
    </script>
      $('input').prop('checked',true);  
    </script>
    ```

    **案例：放大镜切换项**

    **案例2**：**发送验证码控制按钮禁用**

  ​	<!--参考jq-day-2-->

### jQuery操作标签的内容

* **操作标签内部的文本**

  * 获取的仅仅是文本

    ​	$('选择器').text();

  * 设置时只能设置文本，如果写进去了标签，标签也会被当成是普通文本来解析

    ​	$('选择器').text（‘文本内容’）

*  **操作标签内部的所有内容**

  * 获取的是文本和内部的所有标签

    ​	$('选择器').html();	

  * 设置时标签会被渲染

    ​	$('选择器').text（‘标签+文本内容’）

* **操作表单元素的内容**

  * 获取的表单元素的value

    ​	$('选择器').val();

  * 设置

    ​	$('选择器').val(‘文本内容’);

  

### jQuery动画

* **基本动画1（缩放）**<!--一般情况下jQuery动画只写一个时间参数即可 ，其余的不写-->

  * $('选择器').show(speed,easing,fn) 	显示
  *  $('选择器').hide(speed,easing,fn)          隐藏
  * $('选择器').toggle(speed,easing,fn)        切换

* **基本动画1（上卷下拉）**

  * $('选择器').slideDown(speed,easing,fn)          下拉
  * $('选择器').slideUP(speed,easing,fn)                上卷
  * $('选择器').slideToggle(speed,easing,fn)          切换

* **基本动画3（淡入淡出）**

  * $('选择器').fadeIn(speed,easing,fn);                 淡入

  * $('选择器').fadeOut(speed,easing,fn);              淡出

  * $('选择器').fadeInToggle(speed,easing,fn);      切换

    <!--参数speed，动画时长，数字→毫秒-->

    <!--参数easing，运动的方式，默认swing表示缓冲,还有linear表示匀速-->

    <!--参数fn，动画完毕后要执行的函数，函数-->

    

    **案例参考：京东轮播图**

    <!--参考jq-day-2练习-->

### 自定义动画

* 动画

  ​	$('选择器').animage(params,[speed],[fn]);

  ​		参数：param 需要传入一个对象

  * > animage({
    >
    > ​	样式属性名:目标值,
    >
    > ​	样式属性名:目标值
    >
    > <!--此处设置的目标值只能设置纯数字的目标值，样式也必须设置值为纯数字的属性值，eg：可以动画设置宽高，但不能设置颜色，后面的参数一般也是只写一个执行时间即可-->
    >
    > },1000)
    >
    > <!--fn为动画执行完了以后执行的代码，fn是要写进去一个函数的-->

```html
<button>开始</button>
    <div></div>
    <script src="./lib/jquery-1.12.4.js"></script>
    <script>
        $('div').mouseenter(function () {
            $('div').animate({
                left:1000,
                width:400,
            },1000，function（）{$('div').css({backgroundcolor：green})})
        })
    </script>
```

* **停止动画**

  jQuery对象.stop(clearQueue,jumpToEnd);

  * 参数：clearQueue
    * true，表示清空该物体所有动画（清空队列）
    * false，表示仅仅清除当前正在运动这一个动画，默认是false
  * 参数：jumpToEnd
    * true，表示停止动画，并且直接完成运动目标。
    * false，表示停止动画，保持当前停止的状态。 不会运动到目标。 默认是false
  * 注意：开发中常用的stop方法，一般不传入实参。使用默认值。

<!--停止动画的参数一把不使用一般只在动画前面加上一个.stop()即可-->

**参考案例：手风琴**

<!--参考jq-day-2练习-->

### jQuery动态创建删除元素

* **创建**

   $('<li></li>'),返回一个新创建的jQuery对象

* **追加**

  新创建的jQuery对象.appendTo('父元素选择器  或者  父元素jQuery对象')；

  $('父元素选择器').append(新创建的元素的jQuery对象)

```html
  <ul>
    <!-- <li>后裔</li> -->
  </ul>
  <script src="lib/jquery-1.12.4.js"></script>
  <script>
    var datas = ['后裔','安其拉','鲁班','小乔','虞姬'];
    for(var i = 0;i < datas.length; i++) {
        //方式一
     // $('<li></li>').text(datas[i]).appendTo('ul');
        //方式二
        $('<li></li>')
        $('ul')append($('<li></li>'));
    }
  </script>
```



* 追加到最前面**

  新创建的jQuery对象.prependTo（‘父元素选择器’）；

  $('父元素选择器').prepend(新创建的元素的jQuery对象)；

```html
  <ul>
    <!-- <li>后裔</li> -->
  </ul>
  <script src="lib/jquery-1.12.4.js"></script>
  <script>
    var datas = ['后裔','安其拉','鲁班','小乔','虞姬'];
    for(var i = 0;i < datas.length; i++) {
      // $('<li></li>')
      // .text(datas[i])
      // .prependTo('ul');

      $('ul').prepend(   $('<li></li>').text(datas[i])   );
    }
  </script>
```

* 删除元素

  $(要删除的元素).remove();

  <!--谁用删谁-->

* 清空元素

  方式①     ==$('选择器').empty()==推荐使用，清空内部所有元素及相关的事件

  方式②     $('选择器').html(''):仅仅是把内部的元素清空了，但不清理内部的元素事件

**参考案例：购物车综合案例**

<!--参考jq day-3-->



### 模板字符串

**创建的新元素如果要往元素里面添加内容的话，有时候标签比较多或者标签内的内容要写成活的的时候，需要用到大量的字符串拼接，这样会造成代码太复杂了不好看，经常看错，那就用Es6里面的一个属性==模板字符串==来代替字符串拼接**

加两个点点，两个点点中间写内容，标签什么的都可以象html那样的去写或者直接从模板中把样式粘过来

需要写成活的的变量就==写个${}，然后把变量写进去==这样就不用再去写++然后进行字符串拼接了 

那个点点就是==esc下面那个点的英文格式==



```html
<script>
    // ES6   ECMAScript→ ES   ES3.0  ES5.0  ES6.0
    // 模板字符串
    var obj = {name:'程咬金',type:'坦克'};
    // 定义字符串
    var str = `abc`;
    var str = `
      <li>
        <span title="${obj.type}">${obj.name}</span>
        <a href="javascript:">删除</a>
      </li> 
    `;
    console.log(str);

    // 模板引擎→ 后端
  </script>
```

### jQuery操作元素的尺寸

DOM对象：

设置：DOM对象.style.属性名 = 值；

获取：

​	DOM对象.offsetWidth  /  clientWidth

​	DOM对象.offsetHeight  /  clientHeight

* **jQery获取和设置width和height**

  <!--操作的仅仅是内容部分-->

设置：$('选择器').width(数字)；

获取：$('选择器').width();

<!--高度一样，只需将width改为height即可-->

```js
 // 获取
    var w = $('div').width();
    console.log(w);
    // 设置
    $('div').width(300);
```

* **jQery获取和设置innerWidth和innerHeight**

  <!--操作的大小是内容部分 + padding-->

  设置：$('选择器').innerWidth(数字)；

  获取：$('选择器').innerWidth();

  <!--高度一样只需将innerWidth改成innerHeight即可-->

* **jQery获取和设置outerWidth和outerHeight**

  设置：$('选择器').outerWidth(数字)；

  获取：$('选择器').outerWidth()；

  ```js
      // 获取
      var w = $('div').outerWidth();
      console.log(w);
      // 设置
      $('div').outerWidth(300);
  ```

  

### jQuery操作元素的位置

DOM对象

​	设置：DOM对象.style.属性 = 值；

​	获取：DOM对象.offsetLeft / offsetTop

* 获取元素距离文档的位置

  $('选择器素的位置

  注意事项：

  ​	**通过DOM对象获取的元素的位置，**

  ​	**juqery对象.offset获取的元素位置，始终是参照的文档，和定位没有关系**

  ```js
    var o = $('.s').offset();
      console.log(o);
      console.log(o.top);
  ```


* 获取元素距离上级定位元素的位置

  $().position();     返回一个对象，对象中包含了元素的位置	

  <!--position（）方法获取的元素的位置，参照最近的定位元素（和定位有关系）-->

  代码

  ```js
      var o = $('.s').position();
      console.log(o);
      console.log(o.top);
  ```

* 操作卷去的页面边距

  设置：DOM对象.scrollTop = 值；

  获取：DOM对象.scrollTop；

  事件：onscroll滚动条事件

  特殊：滚动条==在窗口上时==，事件注册给==注册给window==

  ​	获取页面卷去的间距：

  ​		document.body.scrollTop||document.documentElement.scrollTop

  ​	设置：

  ​		document.body.scrollTop = 值；

  ​		document.documentElement.scrollTop = 值；

  正常情况下：

  ​	获取：

  ​	$().scrollTop();     返回数字；

  ​	设置：

  ​	$().scrollTop(数字)；

  代码

  ```js
  $('div').scroll(function(){
        // 获取被卷起的间距
        var v = $(this).scrollTop();
        console.log(v);
      });
  
      $('button').click(function(){
        // 设置卷起的间距
        $('div').scrollTop(0);
      });
  ```

  

  ​	

### 链式编程

​	在jquery中，若jQUery对象调用一些方法来做==设置==时，方法完毕后，内部会==重新返回返回当前的jQuery对象==，所以可以继续调用jQuery对象的其他方法，这种现象就是链式编程  。

​	注意：若jQuery对象调用一些方法来做==获取==（内容，大小，位置，样式值等），方法完毕后，==内部返回的不是jQuery对象==，所以无法再继续调用jQuery对象的其他方法。

* end方法的使用

  end方法，在链式上可以回到上一个jQuery对象

![](https://renquanxi.github.io/iamgeWarehouse/img/end方法.png)

* 链式编程原理

  在对象的方法中除了实现功能外，最后还要返回当前方法所属的对象  return this 

  ```js
    var my$ = {
        name: '张三',
        age: 11,
        song: function (v) {
          console.log('我会唱 《' + v + '》');
          // 返回本方法所属的对象，便于可以继续调用其他方法
          return this;
        },
        writeCode: function (v) {
          console.log('我会' + v + '编程');
          // 返回本方法所属的对象，便于可以继续调用其他方法
          return this;
        },
        sayHi: function () {
          console.log('我叫' + this.name + '，今年' + this.age);
          // 返回本方法所属的对象，便于可以继续调用其他方法
          return this;
        }
  
      };
  
      my$.song('因为爱情').writeCode('JavaScript').sayHi()
  ```

  **案例星级评价**

  <!--jQuery  day-5-->

### 多库共存问题【了解】

> 问题：关于`$`冲突的问题 ？
>
> 解决方案：==jQuery.noConflict();==  释放 $,把的函数返回给用户，用户可以用其他变量接收
>
> ```javascript
>  // $('button').click(function(){
>  //   alert(1);
>  // });
> 
>  // 解决方案1：jQuery中不使用$,使用jQuery
>  // jQuery('button').click(function(){
>  //   alert(1);
>  // });
> 
>  // 解决方案2：jQuery库释放$符合的使用权，用其他简单的符号代替
>  // jQuery.noConflict(); 释放$,把$代表的函数返回给用户，用户可以用其他变量接收
>  var $1 = jQuery.noConflict();
>  $1('button').click(function(){
>    alert(1);
>  });
> 
> ```

