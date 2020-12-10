<template>
<div class="display-platform-container">
  <header>
    <div class="platform-header-title">
      <span>高分辨率模式产品分析显示平台</span>
    </div>
  </header>
  <main>
    <div class="platform-main-left">
      <h4>展示内容</h4>
      <section class="left-model-production">
        <h5>模式产品</h5>
        <el-radio-group v-model="modelProduction">
          <el-radio-button
              v-for="(item,index) in modelProductionArr"
              :label="item"
              :key="index">
          </el-radio-button>
        </el-radio-group>
      </section>
      <section class="display-element">
        <h5>显示要素</h5>
        <el-radio v-model="displayElement" label="雷达回波">雷达回波</el-radio>
        <el-radio v-model="displayElement" label="短时强降水">短时强降水</el-radio>
        <el-radio v-model="displayElement" label="地面风场">地面风场</el-radio>
        <el-radio v-model="displayElement" label="最大对流有效位能">最大对流有效位能</el-radio>
        <el-radio v-model="displayElement" label="0℃高度">0℃高度</el-radio>
        <el-radio v-model="displayElement" label="提升凝结高度">提升凝结高度</el-radio>
        <el-radio v-model="displayElement" label="垂直速度">垂直速度</el-radio>
        <el-radio v-model="displayElement" label="水成物分布">水成物分布</el-radio>
        <element-more></element-more>
        <el-radio v-model="displayElement" label="温度对压力图">温度对压力图</el-radio>
        <el-radio v-model="displayElement" label="闪电潜势指数">闪电潜势指数</el-radio>
      </section>
    </div>
    <div class="platform-main-right">
      <div class="main-right-top">
        <h4>时间选择</h4>
      </div>
      <div class="main-right-bottom">
        <h4>2020年06月01日09时雷达回波</h4>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import ElementMore from "@/views/ProductionAnalyzeDisplay/components/ElementMore";
export default {
name: "ProductionAnalyzeDisplayPlatform",
  data(){
    return{
      modelProductionArr:['GRAPES-3KM','RMAPS-3KM','WAPMS-3KM',"GRAPES-10KM",'RAMPS-9KM','GRAPES-9KM'],
      modelProduction:'',
      displayElement:''
    }
  },
  components:{
    ElementMore
  }
}
</script>

<style lang="scss" scoped>
@mixin font-style($color,$size){
  font-size: $size;
  font-family: "PingFang SC Medium";
  color: $color;

}
.title-style{
    @include font-style(rgba(0,0,0,0.85),18px);
    margin-bottom: 16px;
    &:before{
      content: '';
      display: inline-block;
      width: 3px;
      height: 16px;
      margin: 0 5px 0 0 ;
      background: #1989FA;
      border-radius: 2px;
      transform: translateY(2px);
    }
}
.display-platform-container{
  background: #F6F7F8;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 1500px;
  min-height: 800px;
  header{
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    .platform-header-title{
      width: 40%;
      margin: 0 auto;
      height: 100%;
      text-align: center;
      span{
          //font-size: 28px;
          //font-family: "PingFang SC Medium";
          line-height: 80px;
        @include font-style(rgba(0,0,0,0.85),28px);
      }
    }
  }
  main{
    flex: 1;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    >.platform-main-left{
      width: 450px;
      height: 100%;
      background: #fff;
      padding: 24px;
      margin-right: 24px;
      box-sizing: border-box;
      h4{
        @extend .title-style;
      }
      .left-model-production{
        width: 100%;
        h5{
          @include font-style(rgba(0,0,0,.85),16px);
          margin-bottom: 20px;
        }
        margin-bottom: 19.5px;
      }
      .display-element{
        width: 100%;
        border-top: 1px solid rgba(151,151,151,0.2);
        border-bottom: 1px solid rgba(151,151,151,0.2);
        padding: 29.5px 0 5.5px 0;
        h5{
          @include font-style(rgba(0,0,0,.85),16px);
        }
      }
    }
    >.platform-main-right{
      width: calc(100% - 474px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .main-right-top{
        width: 100%;
        height: 137px;
        background: white;
        padding: 24px;
        box-sizing: border-box;
        h4{
          @extend .title-style;

        }
      }
      .main-right-bottom{
        width: 100%;
        height: calc(100% - 158px);
        background: #ffffff;
        padding: 24px;
        box-sizing: border-box;
        h4{
          @extend .title-style;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.display-platform-container{
.left-model-production{
  .el-radio-group{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .el-radio-button__inner{
    width: 126px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    text-align: center;
    line-height: 46px;
    padding: 0;
    margin-bottom: 10px;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    box-shadow: none;
  }
}
  .display-element {
    .el-radio {
      width: 50%;
      margin-right: 0;
      margin-top: 24px;
      font-size: 14px;
    }
  }
}
</style>