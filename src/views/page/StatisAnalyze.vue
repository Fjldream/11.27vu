<template>
  <div id="statisAnalyze">
    <nav class="title-con">
      <ul>
        <li class="hover-dec">统计表</li>
        <li>统计图</li>
      </ul>
    </nav>
    <section class="statisBody">
      <div class="body-con">
        <div class="bodyTable">
          <div class="table-con">
            <table>
              <tr>
                <th>统计对象</th>
                <th>模型类型</th>
                <th>起报时间</th>
                <th>提前时间</th>
                <th>预测时间</th>
                <th>新能源类型</th>
                <th>偏差</th>
                <th>均方根误差</th>
                <th>平均绝对误差</th>
                <th>准确率</th>
                <th>相关性系数</th>
                <th>合格率</th>
                <th>极大误差率</th>
              </tr>
              <tr v-for="(value,index) in tableInnerDate" :class="{'back-color':value.id === lineId}" :key="index" @click="exchangeLineChart(value.id)">
                <td>{{ value.object }}</td>
                <td>{{ value.modelType }}</td>
                <td>{{ value.startingTime }}</td>
                <td>{{ value.advanceTime }}</td>
                <td>{{ value.forecateTime }}</td>
                <td>{{ value.energyType }}</td>
                <td>{{ value.deviation }}</td>
                <td>{{ value.rmsError }}</td>
                <td>{{ value.averageError }}</td>
                <td>{{ value.accuracy }}</td>
                <td>{{ value.relateNum }}</td>
                <td>{{ value.passRate }}</td>
                <td>{{ value.maximumRate }}</td>
              </tr>
            </table>
          </div>
          <div class="panginate-con">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="paginateDate.size"
                :pager-count="paginateDate.pageCount"
                :current-page="paginateDate.currentPage"
                layout="total, pager, jumper"
                :total="paginateDate.total">
            </el-pagination>
          </div>
        </div>
        <div class="bodyPic">
          <div id="lineChart"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StatisAnalyze",
  data() {
    return {
      /*
      * object-统计对象
      * modelType-模型类型
      * startingTime-起报时间
      * advanceTime-提前时间
      * forecateTime-预测时间
      * energyType-能源类型
      * deviation-偏差
      * rmsError-均方根误差
      * averageError-平均绝对误差
      * accuracy-准确率
      * relateNum-相关性系数
      * passRate-合格率
      * maximumRate-极大误差率
      * */
      tableData: [
        {
          id: 1,
          object: '北京',
          modelType: '预测模型一',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        }, {
          id: 2,
          object: '北京',
          modelType: '预测模型二',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        }, {
          id: 3,
          object: '北京',
          modelType: '预测模型三',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        }, {
          id: 4,
          object: '北京',
          modelType: '预测模型四',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },      {
          id: 5,
          object: '北京',
          modelType: '预测模型5',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 6,
          object: '北京',
          modelType: '预测模型6',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 7,
          object: '北京',
          modelType: '预测模型7',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 8,
          object: '北京',
          modelType: '预测模型8',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 9,
          object: '北京',
          modelType: '预测模型9',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 10,
          object: '北京',
          modelType: '预测模型10',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 11,
          object: '北京',
          modelType: '预测模型11',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 12,
          object: '北京',
          modelType: '预测模型12',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 13,
          object: '北京',
          modelType: '预测模型13',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 14,
          object: '北京',
          modelType: '预测模型四',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        }, {
          id: 15,
          object: '北京',
          modelType: '预测模型14',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 16,
          object: '北京',
          modelType: '预测模型15',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 17,
          object: '北京',
          modelType: '预测模型16',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 18,
          object: '北京',
          modelType: '预测模型17',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 19,
          object: '北京',
          modelType: '预测模型18',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 20,
          object: '北京',
          modelType: '预测模型19',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 21,
          object: '北京',
          modelType: '预测模型20',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 22,
          object: '北京',
          modelType: '预测模型21',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 23,
          object: '北京',
          modelType: '预测模型22',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 24,
          object: '北京',
          modelType: '预测模23',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 25,
          object: '北京',
          modelType: '预测模型24',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 26,
          object: '北京',
          modelType: '预测模型25',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 27,
          object: '北京',
          modelType: '预测模型26',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 28,
          object: '北京',
          modelType: '预测模型27',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        },
        {
          id: 29,
          object: '北京',
          modelType: '预测模型28',
          startingTime: '08:00',
          advanceTime: '第3天',
          forecateTime: '06:10-06:30',
          energyType: '风电',
          deviation: 3.6,
          rmsError: 4.3,
          averageError: 14.3,
          accuracy: 6.8,
          relateNum: '***',
          passRate: 70,
          maximumRate: 16
        }
      ],
      tableInnerDate: [],
      paginateDate: {
        size: 4,
        pageCount: 4,
        total: 0,
        currentPage: 1
      },
      lineId: 0,
      lineData: {
        practicalPower: [243, 300, 236, 900, 810, 508, 820],
        forecastPower: [502, 200, 810, 780, 300, 850, 630]
      },
      lineDataCon: [
        {
          id: 1,
          practicalPower: [243, 300, 236, 900, 810, 508, 820],
          forecastPower: [502, 200, 810, 780, 300, 850, 630]
        },
        {
          id: 2,
          practicalPower: [385, 701, 990, 541, 605, 339, 821],
          forecastPower: [563, 381, 643, 320, 891, 611, 655]
        },
        {
          id: 3,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 4,
          practicalPower: [493, 907, 704, 886, 602, 757, 768],
          forecastPower: [891, 787, 940, 921, 765, 572, 587]
        },
        {
          id: 5,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 6,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 7,
          practicalPower: [493, 907, 704, 886, 602, 757, 768],
          forecastPower: [891, 787, 940, 921, 765, 572, 587]
        },
        {
          id: 8,
          practicalPower: [877, 515, 343, 821, 813, 604, 385],
          forecastPower: [796, 957, 324, 783, 946, 541, 488]
        },
        {
          id: 9,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 10,
          practicalPower: [877, 515, 343, 821, 813, 604, 385],
          forecastPower: [796, 957, 324, 783, 946, 541, 488]
        },
        {
          id: 11,
          practicalPower: [243, 300, 236, 900, 810, 508, 820],
          forecastPower: [502, 200, 810, 780, 300, 850, 630]
        },
        {
          id: 12,
          practicalPower: [385, 701, 990, 541, 605, 339, 821],
          forecastPower: [563, 381, 643, 320, 891, 611, 655]
        },
        {
          id: 13,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 14,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 15,
          practicalPower: [877, 515, 343, 821, 813, 604, 385],
          forecastPower: [796, 957, 324, 783, 946, 541, 488]
        },
        {
          id: 16,
          practicalPower: [493, 907, 704, 886, 602, 757, 768],
          forecastPower: [891, 787, 940, 921, 765, 572, 587]
        },
        {
          id: 17,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        },
        {
          id: 18,
          practicalPower: [540, 581, 582, 385, 629, 511, 649],
          forecastPower:[326, 458, 970, 372, 927, 891, 885]
        },
        {
          id: 19,
          practicalPower: [848, 652, 720, 752, 561, 558, 780],
          forecastPower: [841, 851, 531, 601, 990, 894, 871]
        },
        {
          id: 20,
          practicalPower: [898, 826, 675, 935, 360, 812, 480],
          forecastPower: [326, 458, 970, 372, 927, 891, 885]
        },
        {
          id: 21,
          practicalPower: [540, 581, 582, 385, 629, 511, 649],
          forecastPower: [979, 492, 982, 914, 912, 496, 936]
        },
        {
          id: 22,
          practicalPower: [496, 730, 517, 810, 511, 313, 478],
          forecastPower: [979, 492, 982, 914, 912, 496, 936]
        },
        {
          id: 23,
          practicalPower: [540, 581, 582, 385, 629, 511, 649],
          forecastPower: [326, 458, 970, 372, 927, 891, 885]
        },
        {
          id: 24,
          practicalPower: [898, 826, 675, 935, 360, 812, 480],
          forecastPower: [326, 458, 970, 372, 927, 891, 885]
        },
        {
          id: 25,
          practicalPower: [540, 581, 582, 385, 629, 511, 649],
          forecastPower: [802, 385, 990, 806, 843, 870, 570]
        },{
          id: 26,
          practicalPower:  [563, 443, 771, 783, 570, 463, 656],
          forecastPower: [540, 581, 582, 385, 629, 511, 649]
        },{
          id: 27,
          practicalPower: [898, 826, 675, 935, 360, 812, 480],
          forecastPower: [979, 492, 982, 914, 912, 496, 936]
        },{
          id: 28,
          practicalPower: [493, 907, 704, 886, 602, 757, 768],
          forecastPower: [891, 787, 940, 921, 765, 572, 587]
        },
        {
          id: 29,
          practicalPower: [419, 468, 812, 529, 429, 825, 655],
          forecastPower: [865, 438, 354, 916, 452, 956, 898]
        }
      ]
    }
  },
  methods: {
    //初始化表格里的数据
    initTableDate() {
      this.paginateDate.total = this.tableData.length;
      this.paginateDate.currentPage = 1;
      this.tableInnerDate = this.tableData.slice(this.paginateDate.currentPage * 4 - 4, this.paginateDate.currentPage * 4);
      this.exchangeLineChart(this.tableInnerDate[0].id);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //切换分页的函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paginateDate.currentPage = val;
      this.tableInnerDate = this.tableData.slice(this.paginateDate.currentPage * 4 - 4, this.paginateDate.currentPage * 4);
      if (this.tableInnerDate.length < 4) {
        while (this.tableInnerDate.length < 4) {
          this.tableInnerDate.push({
            object: '',
            modelType: '',
            startingTime: '',
            advanceTime: '',
            forecateTime: '',
            energyType: '',
            deviation: '',
            rmsError: '',
            averageError: '',
            accuracy: '',
            relateNum: '',
            passRate: '',
            maximumRate: ''
          })
        }
      }
    },
    //画折线图func
    drawLineChart() {
      let that = this;
      that.lineChart = that.$echarts.init(document.getElementById('lineChart'));
      window.onresize = function () {
        that.lineChart.resize();
      }
      let option = {
        textStyle: {
          color: '#fff',
          fontSize: '12px',
        },
        legend: {
          orient: 'horizontal',
          x: '5%',
          y: '5%',
          data: ['实际功率', '预测功率'],
          icon: 'roundRect',
          itemWidth: 20,
          itemHeight: 13,
          symbolKeepAspect: false,
          //间距
          itemGap: 15,
          textStyle: {
            color: '#fff',
            fontSize: '12px',
          }
        },
        grid: {
          left: '6%',
          top: '18%',
          height: '68%',
          width: '90%'
        },
        xAxis: {
          type: 'category',
          data: ['10-5', '10-15', '10-25', '11-5', '11-15', '11-25', '12-5'],
          name: '时间',
          nameLocation: "middle",
          nameTextStyle: {
            fontSize: 14,
            fontWeight: 200,
            padding: 10
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(43,55,74)',
              width: 3
            }
          },
        },
        yAxis: {
          type: 'value',
          min: 0, // 设置y轴刻度的最小值
          splitNumber: 4,  // 设置y轴刻度间隔个数
          name: '功率(MW)',
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 14,
            fontWeight: 200,
            padding: 20,
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(131,141,158,0)',
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: 'rgb(43,55,74)'
            }
          },
        },
        series: [
          {
            name: '预测功率',
            data: this.lineData.forecastPower,
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5AD8A6'
            },
            itemStyle: {
              color: '#5AD8A6'
            }
          },
          {
            name: '实际功率',
            data: this.lineData.practicalPower,
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#E8684A'
            },
            itemStyle: {
              color: '#E8684A'
            }

          }
        ]
      };
      that.lineChart.setOption(option);
    },
    /*
    * 点击表格行事件
    * id-Number-点击事件传过来的id值
    * */
    exchangeLineChart(id) {
      if (id) {
        this.lineId = id;
        this.lineData = this.lineDataCon[this.lineId - 1];
        this.drawLineChart();
      }
    }
  },
  mounted() {
    this.initTableDate();
    this.drawLineChart();
  },
  beforeDestroy() {
    let that = this;
    window.removeEventListener('resize',function () {
      that.lineChart.resize();
    });
  }
}
</script>
<style scoped lang="scss">
.maxsize {
  width: 100%;
  height: 100%;
}

/*边框以及阴影继承part*/
.item-border {
  box-shadow: inset 0px 0px 40px rgba(0, 61, 131, 0.7);
  background: #09172F;
  border-radius: 10px;
  border: 1px solid #2383C9;
}

#statisAnalyze {
  @extend .maxsize;
  display: flex;
  flex-direction: column;
  animation: opacityD 3s;
  -o-animation: opacityD 3s;
  -moz-animation: opacityD 3s;
  -webkit-animation: opacityD 3s;
}

/*导航栏*/
.title-con {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(35, 131, 201, 1);
  margin-bottom: 20px;

  ul {
    @extend .maxsize;
    overflow: hidden;

    li {
      color: rgba(255, 255, 255, 0.65);
      width: 120px;
      height: 100%;
      float: left;
      text-align: center;
      font: {
        size: 18px;
        family: "PingFang SC";
      }
      position: relative;

      &:nth-child(1) {
        color: rgb(3, 239, 255);
      }
    }

    .hover-dec:before {
      content: '';
      width: 120px;
      height: 2px;
      background: rgba(3, 239, 255, 1);
      position: absolute;
      left: 0;
      bottom: 0;
    }

  }
}

/*图标部分*/
.statisBody {
  width: 100%;
  flex: 1;
  position: relative;

  .body-con {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bodyTable {
      width: 100%;
      height: 45.11%;
      padding: 20px;
      @extend .item-border;
      box-sizing: border-box;

      .table-con {
        width: 100%;
        height: 82.611%;
        margin-bottom: 20px;

        > table {
          text-align: center;
          @extend .maxsize;
          color: rgba(255, 255, 255, 0.85);
          font: {
            size: 14px;
            family: "PingFang SC";
          }
          background-color: #0C2745;

          tr {
            height: 20%;

            &:hover {
              background-color: #144554;
            }

            &:nth-child(1) {
              background: rgba(36, 121, 208, 0.6) !important;
            }
          }
        }
      }
      .back-color{
        background-color: #144554;
      }
      //分页con
      .panginate-con {
        width: 100%;
        height: 12%;
      }
    }

    .bodyPic {
      width: 100%;
      height: 52.65%;
      @extend .item-border;

      #lineChart {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
<style lang="scss">
@font-face {
  font-family: 'PingFang SC';
  src: url("../../assets/font/PingFangRegular.ttf");
}

#statisAnalyze .panginate-con {
  .el-dialog, .el-pager li {
    background-color: rgba(0, 0, 0, 0);
  }

  .el-pagination {
    color: #828997;
    font-family: "PingFang SC";
    position: relative;

    .el-pagination__jump {
      float: right;
    }
  }

  [type="number"] {
    box-shadow: inset 0px 0px 40px rgba(0, 61, 131, 0.7);
    background: #09172F;
    border: 1px solid #2383C9;
    margin: 0 3px;
  }

  .el-pagination__editor {
    margin: 0 5px;
  }

  .el-pager {
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);

    li.active {
      color: #03EFFF;
    }

    li:hover {
      color: #03EFFF;
    }
  }

  .el-pagination__total {
    color: #828997;
  }
}
</style>