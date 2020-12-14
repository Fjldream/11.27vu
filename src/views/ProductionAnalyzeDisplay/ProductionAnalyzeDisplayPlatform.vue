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
          <element-more
              v-show="displayElement==='垂直速度'||displayElement==='水成物分布'"
              :elementMore="elementMore"
              :templatePosition="position"
              @changeValue = "changeDisplayElement"
          ></element-more>
          <el-radio v-model="displayElement" label="温度对压力图">温度对压力图</el-radio>
          <el-radio v-model="displayElement" label="闪电潜势指数">闪电潜势指数</el-radio>
          <element-more
              v-show="displayElement==='温度对压力图'"
              :elementMore="elementMore"
              :templatePosition="position"
              @changeValue = "changeDisplayElement"
          ></element-more>
        </section>
        <section class="objective-products">
          <h5>客观产品</h5>
          <el-radio v-model="objectiveProduct" label="短时强降水">短时强降水</el-radio>
          <el-radio v-model="objectiveProduct" label="雷暴">雷暴</el-radio>
          <el-radio v-model="objectiveProduct" label="雷暴大风">雷暴大风</el-radio>
          <el-radio v-model="objectiveProduct" label="冰雹">冰雹</el-radio>
        </section>
      </div>
      <div class="platform-main-right">
        <div class="main-right-top">
          <h4>时间选择</h4>
          <div class="select-con">
            <div class="pattern-date-con">
              <span>模式日期</span>
              <el-date-picker
                  v-model="patternDate"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="start-time-con">
              <span>起报时间</span>
              <el-select v-model="startTime" placeholder="选择起报时间">
                <el-option label="2020-12-14" value="2020-12-14"></el-option>
                <el-option label="2020-12-11" value="2020-12-11"></el-option>
              </el-select>
            </div>
            <div class="timer-shaft">
              <span>时间轴</span>
              <div class="timer-shaft-con">
                  <div class="timer-btn-left" @click="handleTimerShaftRight"></div>
                  <div class="timer-btn-right" @click="handleTimerShaftLeft"></div>
                  <div class="timer-shaft-mask-con">
                  <div class="timer-shaft-mask" ref="timerShaftMask">
                    <el-radio
                        v-model="timerShaft"
                        v-for="(value,index) in timeList"
                        :label="index"
                        :key="index"
                        border
                        size="medium"
                    >{{value}}</el-radio>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right-bottom">
          <h4>2020年06月01日09时雷达回波</h4>
          <div class="image-display-con">
<!--            <img src="../../assets/img/exampleImg.png" alt="">-->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ElementMore from "@/views/ProductionAnalyzeDisplay/components/ElementMore";

export default {
  name: "ProductionAnalyzeDisplayPlatform",
  data() {
    return {
      modelProductionArr: ['GRAPES-3KM', 'RMAPS-3KM', 'WAPMS-3KM', "GRAPES-10KM", 'RAMPS-9KM', 'GRAPES-9KM'],
      modelProduction: '',//选择模式产品
      displayElement: '',
      displayElementValue:'',//选择显示要素
      objectiveProduct: '',//客观产品
      elementMore: {title: '', options: [{label: '', value: ''}]},//显示更多组件的传入值
      position: '',//select-more组件的位置
      patternDate: '',//模式日期
      startTime:'',//起报时间
      timerShaft:'',//时间轴的值
      timeList:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
      leftNum:1,//时间轴移动的数值
    }
  },
  components: {
    ElementMore
  },
  methods:{
    handleTimerShaftLeft(){
      if(this.leftNum>-350){
        this.leftNum -=120;
        this.$refs.timerShaftMask.style.left = this.leftNum+'px';
      }
    },
    handleTimerShaftRight(){
      if(this.leftNum<0){
      this.leftNum +=120;
      this.$refs.timerShaftMask.style.left = this.leftNum+'px';}
    },
    changeDisplayElement(data){
      this.displayElementValue = data;
    }
  },
  watch: {
    //判断是否要弹出组件
    displayElement: {
      handler(newVal) {
        if (newVal === '水成物分布') {
          this.elementMore = {
            title: this.displayElement,
            options: [{label: '水成物分布', value: 'value1'}, {label: '水成物分布2', value: 'value2'}, {
              label: '水成物分布3',
              value: 'value3'
            }]
          };
          this.position = 'right';
        } else if (newVal === '垂直速度') {
          this.elementMore = {
            title: this.displayElement,
            options: [{label: '垂直速度1', value: 'value1'}, {label: '垂直速度23', value: 'value2'}, {
              label: '垂直速度3',
              value: 'value3'
            }]
          };
          this.position = 'left';
        } else if (newVal === '温度对压力图') {
          this.elementMore = {
            title: this.displayElement,
            options: [{label: '温度对压力图1', value: 'value1'}, {label: '温度对压力图2', value: 'value2'}, {
              label: '温度对压力图3',
              value: 'value3'
            }]
          };
          this.position = 'left';
        }else{
          this.displayElementValue = newVal;
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$medium:"PingFang SC Medium";
$SC : "PingFang SC";
@mixin font-style($color,$size,$family,$flag) {
  font-size: $size;
  font-family: $family;
  color: $color;
 @if $flag == true{
  font-weight: bold;
  }
}

.title-style {
  @include font-style(rgba(0, 0, 0, 0.85), 18px,$medium,true);
  margin-bottom: 16px;

  &:before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 16px;
    margin: 0 5px 0 0;
    background: #1989FA;
    border-radius: 2px;
    transform: translateY(2px);
  }
}

.display-platform-container {
  background: #F6F7F8;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 1820px;
  min-height: 800px;

  header {
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

    .platform-header-title {
      width: 40%;
      margin: 0 auto;
      height: 100%;
      text-align: center;

      span {
        line-height: 80px;
        @include font-style(rgba(0, 0, 0, 0.85), 28px,$medium,true);
      }
    }
  }

  main {
    flex: 1;
    padding: 24px;
    display: flex;
    justify-content: space-between;

    > .platform-main-left {
      width: 450px;
      height: 100%;
      background: #fff;
      padding: 24px;
      margin-right: 24px;
      box-sizing: border-box;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
      h4 {
        @extend .title-style;
      }

      .left-model-production {
        width: 100%;

        h5 {
          @include font-style(rgba(0, 0, 0, .85), 16px,$SC,true);
          margin-bottom: 20px;
        }

        margin-bottom: 19.5px;
      }

      .display-element {
        width: 100%;
        border-top: 1px solid rgba(151, 151, 151, 0.2);
        border-bottom: 1px solid rgba(151, 151, 151, 0.2);
        padding: 29.5px 0 29.5px 0;

        h5 {
          @include font-style(rgba(0, 0, 0, .85), 16px,$SC,true);
        }
      }

      .objective-products {
        padding-top: 29.5px;

        h5 {
          @include font-style(rgba(0, 0, 0, .85), 16px,$SC,true);
        }
      }
    }

    > .platform-main-right {
      width: calc(100% - 474px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .main-right-top {
        width: 100%;
        height: 137px;
        background: white;
        padding: 24px;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        h4 {
          @extend .title-style;
          width: 100%;
        }
        .select-con {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .pattern-date-con, .start-time-con,.timer-shaft {
            span {
              margin-right: 10px;
              @include font-style(rgba(0, 0, 0, .85), 14px,$SC,true);
            }
          }
        }
        .timer-shaft{
          display: flex;
          line-height: 40px;
          span{
            margin-right: 20px !important;
          }
          .timer-shaft-con{
            width: 600px;
            height: 41px;
            background: #F0F2F5;
            border-radius: 4px;
            position: relative;
            .timer-btn-left{
              position: absolute;
              top: 13px;
              left: -13px;
              width: 0;
              height: 0;
              border-right: 7px solid rgba(0,0,0,.65);
              border-top: 6px solid transparent;
              border-bottom: 6px solid transparent;
              cursor: pointer;
            }
            .timer-btn-right{
              position: absolute;
              top: 13px;
              right: -13px;
              width: 0;
              height: 0;
              border-left: 7px solid rgba(0,0,0,.65);
              border-top: 6px solid transparent;
              border-bottom: 6px solid transparent;
              cursor: pointer;
            }
            .timer-shaft-mask-con{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              overflow: hidden;

            .timer-shaft-mask{
              height: 41px;
              background: #F0F2F5;
              border-radius: 4px;
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              transition: left 1s ease-in-out;
            }
            }
          }
        }
      }

      .main-right-bottom {
        width: 100%;
        height: calc(100% - 158px);
        background: #ffffff;
        padding: 24px;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        h4 {
          @extend .title-style;
        }
        .image-display-con {
          width: 100%;
          flex: 1;
          text-align: center;
          vertical-align: middle;
          background-image: url("../../assets/img/exampleImg.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border: 1px solid  rgba(0,0,0,.1);
          //img{
          //  width: auto;
          //  height: 100%;
          //  object-fit: cover;
          //  object-position: center;
          //  border: 1px solid  rgba(0,0,0,.1);
          //}
        }
      }
    }
  }
}
</style>
<style lang="scss">
.display-platform-container {
  .left-model-production {
    .el-radio-group {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .el-radio-button__inner {
      width: 126px;
      height: 46px;
      border-radius: 4px;
      border: 1px solid #DCDFE6;
      text-align: center;
      line-height: 46px;
      padding: 0;
      margin-bottom: 10px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      box-shadow: none;
    }
  }

  .display-element, .objective-products {
    .el-radio {
      width: 50%;
      margin-right: 0;
      margin-top: 24px;
      font-size: 14px;
    }
  }
  .timer-shaft-con{
    .timer-shaft-mask{
      .el-radio__input{
        display: none;
      }
      .el-radio.is-bordered{
        padding: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        margin:5px;
        background: #FFF;
        text-align: center;
        .el-radio__label{
          padding: 0;
        }
      }
      .el-radio.is-bordered.is-checked{
        border: 1px solid #1989FA;
        background: #1989FA;
        .el-radio__input.is-checked+.el-radio__label{
          color: white;
        }
      }
    }
  }
}
</style>