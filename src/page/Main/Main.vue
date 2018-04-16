<template>
  <div class="main_container">
    <div class="main_header">
      <img class="main_id" src="./images/ad.jpg" alt="">
      <div class="main_header_top">
        <a class="main_location">
          <span>狗狗|重庆
            <i class="iconfont icon-jiantou"></i>
          </span>
        </a>
        <div class="main_search">
          <input class="search_input" placeholder="搜索商品和品牌" disabled="disabled"/>
          <span class='search_icon'>
            <img src="./images/search-icon .png" alt="">
          </span>
        </div>
        <img class="message" src="./images/message.png" alt="">
    </div>
      <div class="nav_wrapper">
        <ul class="content">
          <li class="current"><span>首页</span></li>
          <li>狗狗主粮</li>
          <li>零食</li>
          <li>医疗保险</li>
          <li>玩具</li>
          <li>外出</li>
          <li>厨饰城</li>
        </ul>
      </div>
    </div>
    <div class="main_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/01 (1).jpg" alt=""></div>
          <div class="swiper-slide"><img src="./images/01 (2).jpg" alt=""></div>
          <div class="swiper-slide"><img src="./images/01 (1).jpg" alt=""></div>
          <div class="swiper-slide"><img src="./images/01 (2).jpg" alt=""></div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <div class="main_nav">
      <ul>
        <li >
          <a href="">
            <img src="./images/nav.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav1.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav2.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav3.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav4.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav5.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav6.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav7.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav8.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/nav9.jpg" alt="">
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    new BScroll('.nav_wrapper', {
      scrollX: true,
      click: true
    })
    new Swiper('.swiper-container', {
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main_container
    display flex
    flex-direction column
    .main_header
      z-index 99
      position fixed
      display flex
      flex-direction column
      width 100%
      .main_id
        width 100%
        height 55px
      .main_header_top
        display flex
        flex-direction row
        height 22px
        padding 13px 10px
        a
         font-size 13px
         line-height 25px
         span
           font-size 14px
        .main_search
          position relative
          width 230px
          .search_input
            margin-left 8px
            width 230px
            height 27px
            border-radius 5px
            background-color #E9E9E9
            border 0
          .search_icon
            position absolute
            top 4px
            right 0px
            z-index 22
            img
              width 11px
              height 11px
        .message
            width 25px
            height 25px
            vertical-align middle
            margin-left 15px
      .nav_wrapper
        width 100%
        height 36px
        background pink
        .content
          white-space nowrap
          width 140%
          display flex
          flex-direction row
          li
           display inline-block
           width 20%
           text-align center
           font-size 14px
           line-height 36px
           color #666
          .current
            color green
            span
             padding-bottom 7px
             border-bottom 1px green solid
    .main_swiper
      margin-top 140px
      width 100%
      height 160px
      background orange
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          display flex
          flex-direction row
          .swiper-slide
            img
              width 375px
              height 160px
              display inline-block
</style>
