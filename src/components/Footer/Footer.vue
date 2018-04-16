<template>
  <div class="footer_guide">
      <a class="footer_item" href="javascript:;" @click="goTo('/main')"
      :class="{on:'/main'===$route.path}">
        <span class="iconfont">
          <i class="iconfont icon-main"></i>
        </span>
        <span>首页</span>
      </a>
      <a class="footer_item" href="javascript:;" @click="goTo('/category')"
         :class="{on:'/category'===$route.path}">
        <span class="iconfont">
          <i class="iconfont icon-sort"></i>
        </span>
        <span>分类</span>
      </a>
      <a class="footer_item" href="javascript:;" @click="goTo('/cart')"
         :class="{on:'/cart'===$route.path}">
        <span class="iconfont">
          <i class="iconfont icon-cart"></i>
        </span>
        <span>购物车</span>
      </a>
      <a class="footer_item" href="javascript:;" @click="goTo('/login')"
         :class="{on:'/login'===$route.path}">
        <span class="iconfont">
          <i class="iconfont icon-mine"></i>
        </span>
        <span>我的e宝</span>
      </a>
    </div>

</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer_guide
  display flex
  position fixed
  right 0
  bottom 0
  left 0
  width 100%
  height 55px
  background #fff
  .footer_item
    display flex
    flex 1
    flex-direction column
    align-items center
    color #333
    &.on
     color green
    span
     font-size 14px
     margin-top 2px
     .iconfont
       font-size 25px

</style>
