module.exports = {
  logo: '/image/logo_smile.png',
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
    { text: '学习笔记', 
      items: [
        {text: 'JS语法基础', link: '/studyNote/JS语法基础'},
        {text: 'JS进阶语法', link: '/studyNote/JS进阶语法'},
        {text: 'webAPI', link: '/studyNote/webAPI'},
        {text: 'jQuery常用语法', link: '/studyNote/jQuery常用语法'},
        {text: 'ES6', link: '/studyNote/ES6'},
        {text: 'Ajax 笔记整理', link: '/studyNote/Ajax 笔记整理'},
        {text: 'nodejs', link: '/studyNote/nodejs'},
        {text: 'git学习', link: '/studyNote/git学习'},
        {text: '常用数组方法整理', link: '/studyNote/常用数组方法整理'},
      ]
    },
    { text: '解决问题', link: '/question/' },
    { text: '搭建博客', link: '/createblog/' },
    { text: '查看源码', link: 'https://github.com/renquanxi/ibook' },
  ],
  sidebar: {
    '/studyNote/JS语法基础': ['/studyNote/JS语法基础'],
    '/studyNote/JS进阶语法': ['/studyNote/JS进阶语法'],
    '/studyNote/webAPI': ['/studyNote/webAPI'],
    '/studyNote/jQuery常用语法': ['/studyNote/jQuery常用语法'],
    '/studyNote/ES6': ['/studyNote/ES6'],
    '/studyNote/Ajax 笔记整理': ['/studyNote/Ajax 笔记整理'],
    '/studyNote/nodejs': ['/studyNote/nodejs'],
    '/studyNote/git学习': ['/studyNote/git学习'],
    '/studyNote/常用数组方法整理': ['/studyNote/常用数组方法整理'],
    '/question/': [
      '',
      'elementUI中遇到的问题',
      'js，cs常见问题',
      '报错处理合集',
      'github公钥配置',
    ],
    '/createblog/': [
      '',
      'markDown语法',
      'vuepress踩坑',
      '域名解析问题',
    ],
    
  },
  // 这个是会把侧边栏所有的标题都展示    
  // displayAllHeaders: true,

  // 侧边栏展示的层级数，默认值为1打开到二级标题，设置为2会打开到三级标题
  sidebarDepth: 2
}