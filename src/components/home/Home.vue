<template>
  <div class="home">
    <home-header></home-header>
    <div class='contaniner' ref='wrapper'>
      <div>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-nav :imgsList='iconList'></home-nav>
        <home-favourite :favourite='recommendList'></home-favourite>
        <home-weekend :homeweek='weekendList'></home-weekend>
      </div>
    </div>
  </div> 
</template>

<script> 
  import {getHome} from '@/api'
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HomeWeekend from './base/Weekend'
  import HomeFavourite from './base/Favourite'
  import BScroll from 'better-scroll'
  //import BScroll from 'better-scroll'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeNav,
      HomeSwiper,
      HomeWeekend,
      HomeFavourite  
    },
    data() {
      return {
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    created(){
      this.getData()
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      async getData(){
        let {iconList,recommendList,swiperList,weekendList} = await getHome()
        this.swiperList=swiperList
        this.iconList=iconList
        this.recommendList=recommendList
        this.weekendList=weekendList
      }
    },
    activated(){//当组件被展示的时候触发
      this.getData()
      console.log('home activated')
    },
    deactivated(){//当组件没有展示的时候触发
      console.log('home deactivated')
    }
  }
</script>

<style lang="stylus" scoped>
.contaniner
  position:fixed
  overflow:hidden
  right:0
  left:0
  bottom:0
  top:.88rem
</style>

