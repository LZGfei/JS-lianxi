<template>
  <div class="like">
    <h3 class="likeh3">猜你喜欢</h3>
    <ul>
      <router-link
        class="likeli"
        v-for="item in favourite"
        :key="item.id"
        tag="li"
        :to="{name:'detaillink',params:{id:item.id}}"
      >
        <!-- :to="{name:'detaillink',params:{id:item.id}}" -->
        <img :src="item.imgUrl" class="likeliimg">
        <div>
          <h4 class="item-name">{{item.title}}</h4>
          <p class="item-price">￥{{item.price}}</p>
          <div class='item-fav-info clearfix'>
            <p class='item-fav-text'>
              <i v-for='i in 5' class='iconfont icon-star' :key='i'></i>
              <span class='item-fav-star' :style="item.score|star">
                  <i v-for='i in 5' class='iconfont icon-star' :key='i'></i>
              </span>
            </p>
            <p class='item-text-right'>
              <span>{{item.comment}}条评论</span>
            </p>
          </div>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeFavourite',
    props:['favourite'],
    data() {
      return {
        //list:[]
      }
    },
    created(){
      // console.log(this.props)
    },
    filters:{
      star(score){
        return { 
          width:score*100/5+'%'
        }
      }
    }
  } 
</script>

<style lang='stylus' scoped>
.like
  .likeh3
    margin-top: 0.2rem
    line-height: 0.8rem
    background: #dddddd
    text-indent: 0.2rem
    font-size: 0.32rem
    color: orange 
  .likeli
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    padding: 0.2rem
    border :.1rem solid #ddd
    .likeli div
      -webkit-box-flex: 1
      -ms-flex: 1
      flex: 1
      padding: 0.1rem
      margin-left: 0.1rem
      min-width: 0rem
    .likeliimg
      width :2rem
      height :2rem
    .item-name,.item-desc
      display :flex
      font-size: 0.3rem
      line-height :.6rem
      margin-left :.3rem
    .item-price
      color: #ff8300
      font-size: 0.3rem
      line-height: 0.4rem
      margin-left :.3rem
    .item-fav-info
      margin-left :.3rem
      line-height:.6rem
      .item-fav-text
        position:relative
        display:inline-block
        float:left
        color:#ccc
        margin-right:.5rem
        .item-fav-star
          overflow:hidden
          position:absolute
          left:0
          top:0
          color:#ffb436
      .item-text-right
        float:left
</style>
