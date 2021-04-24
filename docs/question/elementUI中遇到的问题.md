# elementUI中遇到的问题
## 一、Element时间选择器的问题
### ①日期选择问题

element时间选择器在前后都选择同一天时间的话，后面的时间和前面的时间是一样的,都是当天的00:00:00点

而且其他情况也是的选择的结束日期也是在在结束日期的00:00:00点，也就是说，我们如果直接按照选择的时间传给后端的话是不会计算选择结束的这一天中的情况的，但实际情况是我们希望洗完的结束日期是当天23:59:59点所以我们解决方法是==在传给后端参数的时候我们把结束时间+24*60*60*1000 - 1，==这样得到的就是选择当天也算

### ②时间默认值

```html
<el-date-picker
  v-model="timer"
  type="daterange"
  range-separator="-"
  @change="timeChange"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  :picker-options="pickerOptions">
</el-date-picker>
<script>
	data() {
    // 处理时间

    timer: [new Date(2021, 1, 20), new Date(2021, 1, 21)],
    pickerOptions: {  
      disabledDate(time) {
        let _now = Date.now();
        let seven = 180 * 24 * 60 * 60 * 1000;
        let sevenDays = _now - seven;
        return time.getTime() > _now || time.getTime() < sevenDays;
        // 大于当前的禁止，小于180天前的禁止（半年前的日期和未来的日期不能选择）
      }
    },
  }
</script>
```



## 二、table表格中的问题

### ①table表格表头自定义

添加自定义表头的时候一定要加一个 slot="header"  和  slot-scope="scoped"不然自定义的表头不会生效

<!-- eslint-disable-next-line -->然后在上面一行再加一行这个注释，这个意思是忽略下面一行的eslint校验，如果不忽略这个的话scoped会报eslint错误

```html
<el-table-column
   align="center"
   prop="name"
   width="200px">
   <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scoped">
        <span class="cursor">测评名称<br>测评有效时间</span>
      </template>
</el-table-column>
```



### ②统一修改某一行全部的颜色

在el-table上添加一个row-class-name，这个是给某一行添加一个类名可以给他绑定一个方法，他的方法中可以默认接收两个参数，一个row是tableData中对应的每一行的内容，rowIndex是每一行的index注意这个rowIndex是从1开始的，没有0，我们可以在这个方法中写入判断逻辑，如果符合逻辑的话就给他返回一个类名，他就会在对应行上的元素上加上这个类名，也可以返回一个 ' '。

```html
<el-table
        center
        :data="tableData"
        :row-class-name="tableRowClassName"
        :header-cell-style="{background:'#F3F6FA',color:'#353B45'}"
      >
</el-table>
<script>
tableRowClassName({row, rowIndex}) {
	if(row.name === '张三') {
		return 'red'
  }
  if(row.name === '李四') {
		return 'green'
  }
  if(rowIndex === 10) {
		return 'gray'
  }
}
</script>

<style>
  .red {
    color: red
  }
  .green {
    color: green
  }
  .gray {
    color: gray
  }
</style>
```



## 三、用upload自定义上传的问题

element文件上传，如果直接使用action内写上传地址请求，需要完整的把请求地址写上，不能使用代理配置base路径，如果使用代理的话在本地是可以的，但是如果换到测试环境或者正式环境是不行的，因为到测试环境或者正式的时候它是会把域名直接拼到请求地址上面去，如下面这样

```html
<template>
    <div>
        <el-button type="text"><a class="down" style="color: #409eff;text-decoration: none; " href="https://jcpt-coupons-schedule-lan.yunxiao.com/v1/weimeng/downloadTemplate">下载模版文件</a></el-button>
        <el-button type="primary" @click="dialogVisible = true">购买信息上传</el-button>
        <el-dialog
        title="订单文件上传"
        :visible.sync="dialogVisible"
        width="50%">
            <el-upload
            drag
            multiple
            :accept="`xlsx`"
            class="upload-demo"
            :show-file-list="false"
            action="https://jcpt-coupons-schedule-lan.yunxiao.com/v1/weimeng/importExcel"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            style="text-align: center">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">请<em>点击上传</em>,只能上传xlsx文件</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'Upload',
  data() {
    return {
      dialogVisible: false,
      Cookie: document.cookie
    };
  },
  methods: {
    uploadSuccess(e) {
      console.log(e);
      if (Number(e.code) === 0) {
        this.$message({
          type: 'success',
          message: '上传成功'
        });
      } else {
        this.$message({
          type: 'error',
          message: e.msg
        });
      }
    },
    uploadError(e) {
      console.log(e);
      if (Number(e.code) === 0) {
        this.$message({
          type: 'error',
          message: '上传失败'
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>

```

当然如果按照上面的写法的话是需要配置cookie的，如果cookie是后端直接种在浏览器里面可以自己拿到的，那就可以直接去用无需配置，但是如果不是的,那需要自己去取然后配置上去

自己在取到cookies以后可以直接在el-upload上配置一个header属性写进去，上面因为是在项目中cookies被后端设置了httpOnly所以前段不能读取，于是就拿不到，所以上面也就没写拿cookies并配置的问题

所以就导致了用上面的代码去上传文件就会导致无法上传成功报的错误也是权限验证不通过，当然了这里是因为取不到cookie才导致的这样问题的出现，如过能取到cookie的话直接配置上去就不会有这样的问题了，这里我们最后的解决办法时候后端把上传文件的权鉴去掉了

过后又找了一种更靠谱的解决方式，就是使用自定义上传，使用自定义上传的话就无需再用`action`配置路径了，这里需要做的是加上`http-request`属性，这里面绑定的是一个函数，需要注意的是，再这个函数中的请求完全是可以按照之前的请求去写的，无需再像action中的那样

先用`on-change`去监听文件的变化，如果文件变化的就会触发on-change，在触发change的时候可以把变化的文件存起来，在http-request发起请求的时候传给后端，同时如果用自定义上传的话就不再需要写on-success，和on-error去监听上传成功和失败了，直接在请求里面写就行了

```HTML
<template>
    <div>
        <!--  -->
        <el-button type="text"><a class="down" style="color: #409eff;text-decoration: none; " href="http://testcoupons-schedule.yunxiao.com/v1/weimeng/downloadTemplate">下载模版文件</a></el-button>
        <el-button type="primary" @click="dialogVisible = true">购买信息上传</el-button>
        <el-dialog
        title="订单文件上传"
        :visible.sync="dialogVisible"
        width="50%">
            <el-upload
            drag
            multiple
            class="upload-demo"
            :accept="`xlsx`"
            :show-file-list="false"
            :on-change="handleFileChange"
            :http-request="uploadFile"
            style="text-align: center">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传xlsx文件</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'Upload',
  data() {
    return {
      dialogVisible: false,
      file: ''
    };
  },

  methods: {
		// 监听文件流变化
    handleFileChange(file) {
      console.log(file);
      this.file = file.raw;
    },
    // 自定义的上传方法
    uploadFile() {
      let index = this.file.name.lastIndexOf('.');
      let suffix = this.file.name.substr(index + 1);
      // 创建表单对象
      let formData = new FormData();
      // 后端接受参数 ，可以接受多个参数
      formData.append('file', this.file);
      formData.append('uploadFileName', 'git');
      formData.append('uploadFileContentType', suffix);
      // 这里请求可以用自己的方式封装方式
      this.$http.post('/upload-serve/v1/weimeng/importExcel', formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
```

## 四、el-tooltip换行显示

![image-20210422144822142](/Users/rqx/Library/Application Support/typora-user-images/image-20210422144822142.png)

```HTML
<el-table-column
              align="center"
              prop=""
              label="考察范围">
              <template slot-scope="scoped">
                <div v-if="scoped.row.scope.length < 2">
                  <span class="scopedItem">{{ scoped.row.scope[0] }}</span>
                </div>
                <el-tooltip v-else placement="top">
                  <div v-html="scoped.row.scope.join('<br/>')" slot="content"></div>
                  <span class="scopedItem">{{ `${scoped.row.scope[0]}` }}……</span>
                </el-tooltip>
              </template>
            </el-table-column>
```

## 五、element去掉表格hover效果
> 这个方法其实就是把整一行的所有事件都给禁用掉了
```html
<style>
  /deep/tr {pointer-events: none;}
</style>
```

