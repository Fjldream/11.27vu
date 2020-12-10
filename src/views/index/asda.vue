<!-------------中长期电量预测--------------->
<template>
  <section class="home-main-chart-section">
    <el-dialog :visible.sync="zoomActive">
      <div class="home-main-chart-content big-home-main-chart-content">
        <header>
          <div>{{chartTitle}}</div>
          <img :src=zoomImg.zoomBig @click="zoomClick">
        </header>
        <nav>
          <ul>
            <li v-for="item of navData" :key="item.title" :class="{'active':item.active}"
                @click="handleSelectClick(item)">{{item.title}}
            </li>
          </ul>
          <p>{{currentTime}}</p>
        </nav>
        <!--画图区域-->
        <main id="histogram_long_forecast_big"/>
      </div>
    </el-dialog>
    <div class="home-main-chart-content">
      <header>
        <div>{{chartTitle}}</div>
        <img :src=zoomImg.zoomSmall @click="zoomClick">
      </header>
      <nav>
        <ul>
          <li v-for="item of navData" :key="item.title" :class="{'active':item.active&&!zoomActive}"
              @click="handleSelectClick(item)">{{item.title}}
          </li>
        </ul>
        <p>{{currentTime}}</p>
      </nav>
      <!--画图区域-->
      <main id="histogram_long_forecast"/>
    </div>
  </section>
</template>

<script>
import homeChart from './js/homeChart';
import {FuncChart} from '../../d3_chart/FuncChart';

export default {
  mixins: [homeChart],
  name: "HomeClimaticPrediction",
  data() {
    return {
      chartTitle: '中长期电量预测',
      chartId: ['histogram_long_forecast_big', 'histogram_long_forecast'],//第一个放大id,第二个正常大小的id
      windData: [],//短期预测误差风电
      lightData: [],//短期预测误差光伏
      currentTime: '',
      axisUnit: ['电量(亿千瓦时)', '时间(年月)']//短期预测误差统计坐标单位
    }
  },
  methods: {
    reloadChart(zoomActive, currentType) {
      //风电
      if (currentType === 1) {
        if (this.windData.length === 0) {
          //请请求数据
          this.getData(currentType)
        } else {
          if (zoomActive) {
            //风
            FuncChart.drawHistogramChart(this.chartId[0], this.axisUnit, this.windData, this.zoomRatio);
          } else {
            //缩小
            FuncChart.drawHistogramChart(this.chartId[1], this.axisUnit, this.windData);
          }
        }
      } else {
        //光伏
        if (this.lightData.length === 0) {
          //请求数据
          this.getData(currentType)
        } else {
          if (zoomActive) {
            //放大
            FuncChart.drawHistogramChart(this.chartId[0], this.axisUnit, this.lightData, this.zoomRatio);
          } else {
            //光
            FuncChart.drawHistogramChart(this.chartId[1], this.axisUnit, this.lightData);
          }
        }
      }
    },
    /**
     * 获取数据
     * @param type 1代表风电，2代表光伏
     */
    getData(type) {

    },
    /**(
     * 初始化图表显示
     */
    initChart() {
      if (this.showData.middle_long_electric_prediction.data_time !== undefined) {
        this.currentTime=this.showData.middle_long_electric_prediction.data_time
        this.$nextTick(function () {
          //短期预测误差统计, //格式说明  最大，第二大 平均值，次小，最小值
          this.windData = this.showData.middle_long_electric_prediction.wind;
          this.lightData = this.showData.middle_long_electric_prediction.pv;
          this.reloadChart(this.zoomActive, this.currentType);
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./css/chart";

#histogram_long_forecast {
  width: 100%;
  min-height: 8rem;
  position: relative;
  height: calc(100% - 3.9rem);
}

#histogram_long_forecast_big {
  width: 100%;
  min-height: 8rem;
  position: relative;
  height: calc(100% - 3.9rem);
}
</style>
