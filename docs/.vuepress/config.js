module.exports = {
  "base": "/ibook/",
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
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
    ]
  ],
  theme: 'vuepress-theme-yilia-plus',
  themeConfig: {
    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      // 'github-corner': false,
      github: {
        url: "https://github.com/renquanxi"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2016,
        // 网站作者(关闭请设置为false)
        author: '<a href="https://github.com/renquanxi/" target="_blank">清欢先生</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/guide/' },
      { text: '解决问题', link: 'https://google.com' },
    ]
  },
}