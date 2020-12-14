<template >
<div id="displayPlatformSelectMore" class="more-select-con">
  <span>{{elementMore.title}}</span>
  <el-select v-model="selectValue" :placeholder="'请选择'+elementMore.title">
    <el-option
        v-for="(value,index) in elementMore.options"
        :key="index"
        :label="value.label"
        :value="value.value"
    ></el-option>
  </el-select>
  <div v-show="templatePosition==='right'" class="triangle-decoration-right"></div>
  <div v-show="templatePosition==='left'" class="triangle-decoration-left"></div>
</div>
</template>

<script>
export default {
  name: "ElementMore",
  props:{
    elementMore:{
      type:Object,
      require:true
    },
    templatePosition:{
      type:String,
      default:'left'
    }
  },
  data(){
    return{
      selectValue:''
    }
  },
  watch:{
    selectValue:{
      handler(newVal){
        if(newVal){
          this.$emit('changeValue',newVal);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.triangle-decoration{
  width: 0;
  height: 0;
  border-bottom: 10.4px solid #F5F5F5;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  position: absolute;
  top: -9px;
}
  .more-select-con{
    width: 100%;
    height: 84px;
    padding: 22px 15px;
    margin-top: 10px;
    box-sizing: border-box;
    background: #F5F5F5;
    display: flex;
    position: relative;
    flex-direction: row;
    animation: opacityD 2s ease;
    span{
      font-size: 14px;
      color: rgba(0,0,0,0.85);
      font-weight: bold;
      line-height: 40px;
      margin-right: 20px;
      font-family: "PingFang SC";
    }
    .triangle-decoration-right{
      @extend .triangle-decoration;
      right: 150px;
    }
    .triangle-decoration-left{
      @extend .triangle-decoration;
      left: 30px;
    }
  }
</style>
<style lang="scss">
  #displayPlatformSelectMore{
    .el-select{
      flex: 1;
      height: 40px;
      max-width: 292px;
    }
  }
</style>