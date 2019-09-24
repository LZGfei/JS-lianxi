<template>
  <div class="list">
    <ul>
      <li class="item-li" v-for="(item,index) in weekdata" :key='index'>
        <img class="item-img" :src="item.imgUrl">
        <div class="item-text">
          <div>
            <h2 class="item-h2">{{item.title}}</h2>
            <h4 class="item-h4">{{item.desc}}</h4>
          </div>
          <div>
            <p class="item-price">￥{{item.price}}起</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'WeekList',
    props:['weekdata']
  }
</script>

<style lang='stylus' scoped>
  .list
    .item-li
      border :.1rem solid #ddd
      .item-img
        width :100%
        height :4rem
      .item-text
        display :flex
        height :1rem
        -webkit-justify-content: space-between;
        justify-content: space-between;
        .item-h2
          line-height :.6rem
          font-size :.3rem
        .item-h4
          font-size :.26rem
        .item-price
          color:#FF8300
          line-height :1rem
          font-size:.36rem
          text-align :center
          padding-right :.6rem
</style>
