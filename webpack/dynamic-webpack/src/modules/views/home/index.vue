<template>
  <div class="page page-hello">
    <div class="page-content">
      <!-- 静态资源路径写法事例 -->
      <img src="~@assets/images/copyfiles/logo.png">
      <h1 v-text="msg"></h1>
      <h2 v-text="message"></h2>
    </div>
  </div>
</template>

<script>
  /**
   * 以下仅为事例代码，可以随意扩展修改
   */
  export default {
    data() {
      return {
        msg: '此处是Home页面',
        message: '现在时间是：'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "./style.less";
</style>
