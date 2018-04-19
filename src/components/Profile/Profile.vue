<template>
  <div class="login_content">
    <div class="login_username">
      <span class="iconfont icon-xingmingyonghumingnicheng"></span>
      <input type="text" placeholder="手机号/邮箱/用户名" v-model="username">
    </div>
    <div class="login_password">
      <span class="iconfont icon-password"></span>
      <input type="text" placeholder="输入密码">
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login_content
    box-sizing border-box
    width 100%
    height 92%
    padding 6px
    margin 0 15px 10px
    .login_username
      width 303px
      height 21px
      padding 12px 0 12px 10px
      border-bottom 1px solid #ababab
      .icon-xingmingyonghumingnicheng
        font-size 20px
      input
        outline none
        border none
        &::-webkit-input-placeholder
          color #ababab
          font-size 15px
    .login_password
      width 303px
      height 21px
      padding 12px 0 12px 10px
      border-bottom 1px solid #ababab
      .icon-xingmingyonghumingnicheng
        font-size 20px
      input
        outline none
        border none
        &::-webkit-input-placeholder
          color #ababab
          font-size 15px
</style>
