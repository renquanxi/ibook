# js，cs常见问题
## 过滤空格

```js
var testStr="sssss

vvvvv";
var resultStr=testStr.replace(/\ +/g,"");//去掉空格
resultStr=testStr.replace(/[ ]/g,"");    //去掉空格
resultStr=testStr.replace(/[\r\n]/g,""));//去掉回车换行
// 我平时过滤空格的话用第一个就行了
```

## 正则验证

```js
// 正则验证
// 正整数
let reg = /^\d+$/;
/^[+]{0,1}(\d+)$/, // 验证正整数 包含0
/^[1-9]\d*$/, // 验证正整数 不包含0
/^[1-9][0-9]{0,1}$/, // 验证1-99以内的正整数
/^[0-9]+(\.[0-9]{1,2})?$/, // 验证大于等于0且可以保留1-2为小数
reg.test(number);
```

## 文字在盒子内均匀放置

```html
<div class="name">名字</div>
<style>
  .name {
    width: 75px;
    display: inline-block;
    text-align: justify;
    text-align-last: justify;
  }
</style>
```

## 文案过长省略号显示

```html
<style>
  span {
		text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 200px;
  }
</style>
```



## 快速获取时间

```js
// 当天0点
new Date(new Date().toLocaleDateString()).getTime()
// 当天24点 也就是下一天的0点
new Date(new Date().toLocaleDateString()).getTime()+86400


// 时间格式化
export function formatDate(time, need) { 
  let now = new Date(time)
  let year=now.getFullYear() 
  let month=now.getMonth()+1
  if(month<10) month = '0'+month
  let date=now.getDate() 
  if(date<10) date = '0'+date
  let hour=now.getHours()
  if(hour<10) hour = '0'+hour
  let minute=now.getMinutes()
  if(minute<10) minute = '0'+minute
  var second=now.getSeconds()
  if(second<10) second = '0'+second
  if(need === 1) {
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second 
  } else if (need === 2) {
    return year+"-"+month+"-"+date
  } else if (need === 3) {
    return hour+":"+minute+":"+second
  }
}

```

## 防抖

```js
// 防抖一般都是用在输入框input标签里了，把这个事件绑定给输入框的input事件上面
debounce() {
  var _this = this;
  // data中放一个timer：null
  if (_this.timer) {
    clearTimeout(_this.timer);
  }
  _this.timer = setTimeout(function() {
    // 在这里执行你要处理的逻辑
    _this.checkInput();
  }, 1000);
},
```

## 忽略某一行的Eslint报错

在需要忽略的那一行上面加一个`<!-- eslint-disable-next-line -->`

