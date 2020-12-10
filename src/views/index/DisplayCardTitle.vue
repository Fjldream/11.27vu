<template>
  <nav class="cardTitle-con">
      <ul>
        <li v-for="item of navData" :key="item.title" :class="{'active':item.active}"
            @click="handleSelect(item)">{{item.title}}
        </li>
      </ul>
    <span>{{currentTime}}</span>
  </nav>
</template>

<script>
export default {
  props:['currentTime','navData'],
  name: "DisplayCardTitle",
  data(){
    return{

    }
  },
  methods:{
    handleSelect(item){
      this.$emit('link',item);
    }
  }
  }
</script>

<style scoped lang="scss">
  .cardTitle-con{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    padding: 0 10px;
    box-sizing: border-box;
    ul{
      cursor: pointer;
      display: flex;
      background: none;
      height: auto;
      color: #ffffff;
      margin: 0 20px;
      li{
        font-size: 0.8rem;
        margin-right: 1rem;
      }
    }
    .selectActive{
      border-bottom: white 1px solid;
    }
    span{
      height: 1.5rem;
      font-size: 0.6rem;
    }
  }
</style>