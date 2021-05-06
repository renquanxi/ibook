module.exports = [
  [
    require('../plugins/love-me'), {
      color: '#11a8cd', // 爱心颜色，默认随机色
    }
  ],

  [
    'vuepress-plugin-helper-live2d', {
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'z16',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 185, // 模型的长度(default: 135)
          height: 350, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ],

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        // {
        //   title: '在MDN中搜索',
        //   frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //   behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        // },
        // {
        //   title: '在Runoob中搜索',
        //   frontUrl: 'https://www.runoob.com/?s=',
        // },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        },
        {
          title: '通过github搜索',
          frontUrl: 'https://github.com/search?q=',
        },
        {
          title: '通过google搜索',
          frontUrl: 'https://www.google.com/search?q=',
        },
        {
          title: '通过知乎搜索',
          frontUrl: 'https://www.zhihu.com/search?q=',
        },
      ],
    },
  ],

  // 参考官方插件 https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html
  ['@vuepress/back-to-top'], // 回到顶部
  ['@vuepress/last-updated'], // 最后更新时间，如果是用的官方默认主题的话，无需安装直接饮用即可，如果是别的主题的话需要自己安装一下
  ['@vuepress/medium-zoom'], // 放大图片
]