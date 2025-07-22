<!-- // Comment.vue -->
<template>
    <div class="gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'

  export default {
    name: 'comment',
    mounted() {
      const commentConfig = {
        clientID: 'ba2aad9111c8985b6415',
        clientSecret: 'd78f1bcb2905c228383c07e8b42d0bd4e8ee260d',
        repo: 'ibook', // 托管评论的仓库名
        owner: 'renquanxi', // github 用户名
        admin: ['renquanxi'] // 管理员
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    }
  };
</script>
