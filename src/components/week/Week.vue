<template>
  <div class="week">
    <week-header></week-header>
    <week-list :weekdata='weekdata'></week-list>
  </div>
</template>

<script>
import {getWeeks} from '@/api'
import WeekHeader from './base/Header'
import WeekList from './base/List'
  export default {
    name:'Week',
    data() {
      return {
        weekdata:[]
      }
    },
    components:{
      WeekHeader,
      WeekList
    },
    created(){
      this.getData()
    },
    methods:{
      async getData(){
        let {weekInfo}=await getWeeks(this.$route.params.id)
        this.weekdata=weekInfo
        console.log(weekInfo)
      }
    },
    activated(){
      console.log('拉取第'+this.$route.params.id+'页数据')
      this.getData()
    },
  }
</script>

<style scoped>


</style>
