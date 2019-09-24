<template>
  <div class="swiper">
    <swiper :options="swiperOption"  v-if="isShow"> <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index" @click="change" >
        <img class='swiper-img' :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeSwiper',
    props:['swiperList'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          loop:true,
          autoplay:true
        }
      }
    },
    methods:{
      change(){
        console.log(3)
      },
    },
    computed:{
      isShow(){
        return this.swiperList.length>0
      }
    }
 }
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
    background-color:#fff
.swiper
  height:2.19rem
  .swiper-container
    height:100%
    .swiper-img
      width:100%
      height:100%
</style>


