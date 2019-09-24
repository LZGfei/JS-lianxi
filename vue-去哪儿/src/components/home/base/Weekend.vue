<template>
  <div class="weekend">
    <h3 class="weekh3">周末去哪儿</h3>
    <ul>
      <router-link
        class="weekli"
        v-for="item in homeweek"
        :key="item.id"
        tag="li"
        :to="{name:'weeklink',params:{id:item.id}}"
      >
        <img :src="item.imgUrl" class="weekimg">
        <h3 class="title">{{item.title}}</h3>
        <p class="p">{{item.desc}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:['homeweek']
  }
</script>

<style lang='stylus' scoped>
  .weekend
    .weekh3
      margin-top: 0.2rem
      line-height: 0.8rem
      background: #dddddd
      text-indent: 0.2rem
      font-size: 0.32rem
      color: orange 
  .weekend
    .weekimg
      width :8.28rem
    .title
      color:#25A4BB
      line-height :.6rem
      font-size:.3rem
      margin-left :.3rem
    .p
      color:#25A4BB
      font-size:.24rem
      line-height :.6rem
      margin-left :.3rem
</style>

