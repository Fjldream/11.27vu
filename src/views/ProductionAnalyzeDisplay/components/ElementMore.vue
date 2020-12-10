<template>
<div class="more-select-con">
  <el-input v-model="selectValue" placeholder="placeholder"></el-input>
</div>
</template>

<script>
export default {
  name: "ElementMore",
  data(){
    return{
      selectValue:''
    }
  }
}
</script>

<style scoped>
  .more-select-con{
    width: 100%;
    height: 90px;
    background: #F5F5F5;
  }
</style>