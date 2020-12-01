<template>
  <div class="page-con">
    <header>
      <div class="header-img" style="width:91px;">
        <img src="../assets/page/head_one_part.png" alt="">
      </div>
      <div class="header-img header-title">
        <img src="../assets/page/head_two_part.png" alt="">
        <h1>全国新能源功率预测平台</h1>
      </div>
      <div class="header-img" style="width:119px;">
        <img src="../assets/page/head_three_part.png" alt="">
      </div>
      <div class="header-img" style="width: 220px;">
        <img src="../assets/page/head_four_part.png" alt="">
        <h3 ref="dateCon">{{ currentTime }}</h3>
      </div>
      <div class="header-img" style="width: 78px;">
        <img src="../assets/page/head_five_part.png" alt="">
      </div>
      <ul class="nav-con">
        <li :class="{'nav-select':navStyle.firstNav}" @click="navStyleReset(); navStyle.firstNav=true">首页</li>
        <li :class="{'nav-select':navStyle.secNav}" @click="navStyleReset(); navStyle.secNav=true">中长期预测</li>
        <li :class="{'nav-select':navStyle.thirNav}" @click="navStyleReset(); navStyle.thirNav=true">短期预测</li>
        <li :class="{'nav-select':navStyle.fouNav}" @click="navStyleReset(); navStyle.fouNav=true">超短期预测</li>
        <li :class="{'nav-select':navStyle.fifNav}" @click="navStyleReset(); navStyle.fifNav=true">统计分析</li>
        <li :class="{'nav-select':navStyle.sixNav}" @click="navStyleReset(); navStyle.sixNav=true">系统管理与设置</li>
      </ul>
      <div class="menu-con"></div>

    </header>
    <main>
      <div class="main-con">
        <div class="main-left">
          <h1 class="left-title">短期功率预测</h1>
          <div class="left-form">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="统计对象">
                <el-select v-model="form.object" placeholder="请选择统计对象">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="预测模型">
                <el-select v-model="form.model" placeholder="请选择预测模型">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="起报时间">
                <el-radio-group v-model="form.time" size="medium">
                  <el-radio border label="08：00"></el-radio>
                  <el-radio border label="20：00"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="提前时间">
                <el-select v-model="form.model" placeholder="请选择提前时间">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="预测时间">
                <el-date-picker
                    v-model="form.date"
                    type="date"
                    placeholder="请选择预测日期">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <div class="btn-con">
              <el-button type="primary">全部统计</el-button>
              <el-button type="primary">逐月统计</el-button>
            </div>
          </div>
        </div>
        <div class="main-mid">
          <div class="mid-container">
            <div id="radar-pic" style="width: 100%;height: 100%;"></div>
          </div>
          <div class="mid-container">
            <div id="radar-light" style="width: 100%;height: 100%;"></div>
          </div>
        </div>
        <div class="main-right">
          <div class="right-con">
            <div id="column" style="width: 100%;height: 100%;"></div>
          </div>
          <div class="right-con">
            <div id="lightColumn" style="width: 100%;height: 100%;"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import 'echarts/lib/chart/radar'

export default {
  name: "page.vue",
  data() {
    return {
      form: {
        object: '',
        model: '',
        time: '',
        adtime: '',
        date: ''
      },
        navStyle:{firstNav:false,secNav:false,thirNav:false,fouNav:false,fifNav:true,sixNav:false},
      option: {
        title: {
          text: '风电',
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
          top: '0',
          left: '3%'
        },
        tooltip: {
          backgroundColor: '#07142B',
          borderColor: '#2383C9',
          borderWidth: 1,
          borderRadius: 3,
          boxShadow: 'inset 0px 0px 20px 0px rgba(0, 61, 131, 0.7)',
          textStyle: {
            color: 'white',
            decoration: 'none',
            fontSize: 12,
            lineHeight: 14
          },
        },
        textStyle: {
          color: 'rgba(255,255,255,1)', //标题颜色
          fontSize: 12,
          lineHeight: 60,
        },
        legend: {
          left: '2%',
          top: '7%',
          icon: 'rect',
          itemHeight: 12,
          itemWidth: 12,
          textStyle: {
            color: '#ffffff',
          },
          type: 'scroll',
          data: ['全国', '国网', '南网', '蒙西']
        },
        radar: {
          splitNumber: 4,
          radius: 120,
          center: ['50%', '60%'],
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              type:'dashed',
              color: 'rgba(131,141,158,.1)',
            }
          },
          indicator: [{
            name: '偏差', max: 100,
            axisLabel: {
              show: true,
              fontSize: 12,
              color: '#838D9E',
              showMaxLabel: false, //不显示最大值，即外圈不显示数字30
              showMinLabel: true, //显示最小数字，即中心点显示0
            }
          },
            {name: '相关性系数', max: 100},

            {name: '合格率', max: 100},
            {name: '极大误差率', max: 100},
            {name: '平均误差率', max: 100},
            {name: '准确率', max: 100},
            {name: '均方根误差', max: 100},
          ],
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type:'dashed',
              width: 1,
              color: '#354053', // 设置网格的颜色
            },
          },
        },
        series: [
          {
            name: '雷达图',
            type: 'radar',
            symbol: 'angle',
            radius: ['30%', '60%'],
            symbolSize: 2, // 拐点的大小
            areaStyle: {
              normal: {
                width: 1,
                opacity: 0.2,
              },
            },
            data: [
              {
                value: [75, 80, 95, 45, 60, 66, 40],
                name: '全国',
                itemStyle: {
                  normal: {
                    color: 'rgb(82,135,238)',
                    lineStyle: {
                      color: 'rgb(82,135,238)',
                    },
                  }
                }
              },
              {
                value: [60, 83, 45, 50, 45, 90, 55],
                name: '国网',
                itemStyle: {
                  normal: {
                    color: 'rgb(95,232,197)',
                    lineStyle: {
                      color: 'rgb(95,232,197)',
                    },
                  }
                }
              },
              {
                value: [23, 80, 77, 50, 45, 32, 99],
                name: '南网',
                itemStyle: {
                  normal: {
                    color: 'rgb(198,91,70)',
                    lineStyle: {
                      color: 'rgb(198,91,70)',
                    },
                  }
                }
              },
              {
                value: [44, 60, 56, 24, 45, 32, 23],
                name: '蒙西',
                itemStyle: {
                  normal: {
                    color: 'rgb(245,198,50)',
                    lineStyle: {
                      color: 'rgb(245,198,50)',
                    },
                  }
                }
              }
            ]
          }
        ]
      },
      lightOption: {
        title: {
          text: '风电',
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
          top: '0',
          left: '3%'
        },
        tooltip: {
          backgroundColor: '#07142B',
          borderColor: '#2383C9',
          borderWidth: 1,
          borderRadius: 3,
          boxShadow: 'inset 0px 0px 20px 0px rgba(0, 61, 131, 0.7)',
          textStyle: {
            color: 'white',
            decoration: 'none',
            fontSize: 12,
            lineHeight: 14
          },
        },
        textStyle: {
          color: 'rgba(255,255,255,1)', //标题颜色
          fontSize: 12,
          lineHeight: 60,
        },
        legend: {
          left: '2%',
          top: '7%',
          icon: 'rect',
          itemHeight: 12,
          itemWidth: 12,
          textStyle: {
            color: '#ffffff',
          },
          type: 'scroll',
          data: ['全国', '国网', '南网', '蒙西']
        },
        radar: {
          splitNumber: 4,
          radius: 120,
          center: ['50%', '60%'],
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(131,141,158,.1)',
            }
          },

          indicator: [{
            name: '偏差', max: 100,
            axisLabel: {
              show: true,
              fontSize: 12,
              color: '#838D9E',
              showMaxLabel: false, //不显示最大值，即外圈不显示数字30
              showMinLabel: true, //显示最小数字，即中心点显示0
            }
          },
            {name: '相关性系数', max: 100},

            {name: '合格率', max: 100},
            {name: '极大误差率', max: 100},
            {name: '平均误差率', max: 100},
            {name: '准确率', max: 100},
            {name: '均方根误差', max: 100},
          ],
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#354053', // 设置网格的颜色
            },
          },
        },
        series: [
          {
            name: '雷达图',
            type: 'radar',
            symbol: 'angle',
            radius: ['30%', '60%'],
            symbolSize: 2, // 拐点的大小
            areaStyle: {
              normal: {
                width: 1,
                opacity: 0.2,
              },
            },
            data: [
              {
                value: [55, 45, 67, 89, 45, 78, 98],
                name: '全国',
                itemStyle: {
                  normal: {
                    color: 'rgb(82,135,238)',
                    lineStyle: {
                      color: 'rgb(82,135,238)',
                    },
                  }
                }
              },
              {
                value: [34, 56, 78, 66, 99, 76, 56],
                name: '国网',
                itemStyle: {
                  normal: {
                    color: 'rgb(95,232,197)',
                    lineStyle: {
                      color: 'rgb(95,232,197)',
                    },
                  }
                }
              },
              {
                value: [44, 66, 78, 96, 56, 78, 65],
                name: '南网',
                itemStyle: {
                  normal: {
                    color: 'rgb(198,91,70)',
                    lineStyle: {
                      color: 'rgb(198,91,70)',
                    },
                  }
                }
              },
              {
                value: [66, 87, 56, 88, 44, 77, 98],
                name: '蒙西',
                itemStyle: {
                  normal: {
                    color: 'rgb(245,198,50)',
                    lineStyle: {
                      color: 'rgb(245,198,50)',
                    },
                  }
                }
              }
            ]
          }
        ]
      },
      column: {
        textStyle: {
          color: '#fff',
          fontSize: '12px',
        },
        title: {
          text: '风电',
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
          top: '6%',
          left: '3%'
        },
        color: ['rgb(82,135,238)', 'rgb(95,232,197)', '#C65B46', 'rgb(245,198,50)'],
        legend: {
          left: '3%',
          top: '13%',
          icon: 'rect',
          itemHeight: 12,
          itemWidth: 12,
          textStyle: {
            color: '#ffffff',
          },
          data: ['全国', '国网', '南网', '蒙西']
        },
        grid: {
          left: '5%',
          top: '25%',
          height: '65%',
          width: '93%'
        },

        xAxis: [
          {
            type: 'category',
            data: ['偏差', '相关性系数', '合格率', '极大误差率', '平均误差率', '准确率', '均方根误差'],
            axisLine: {
              lineStyle: {
                color: 'rgba(131,141,158,0)',
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
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

        ],
        axisLine: {
          lineStyle: {
            color: 'rgba(131,141,158,.1)',
          }
        },

        series: [
          {
            name: '全国',
            type: 'bar',
            barGap: 0,
            data: [75, 80, 95, 45, 60, 66, 40],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '国网',
            type: 'bar',
            data: [60, 83, 45, 50, 45, 90, 55],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '南网',
            type: 'bar',
            data: [23, 80, 77, 50, 45, 32, 99],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '蒙西',
            type: 'bar',
            data: [44, 60, 56, 24, 45, 32, 23],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          }
        ]
      },
      lightColumn: {
        textStyle: {
          color: '#fff',
          fontSize: '12px',
        },
        title: {
          text: '风电',
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
          top: '6%',
          left: '3%'
        },
        color: ['rgb(82,135,238)', 'rgb(95,232,197)', '#C65B46', 'rgb(245,198,50)'],
        legend: {
          left: '3%',
          top: '13%',
          icon: 'rect',
          itemHeight: 12,
          itemWidth: 12,
          textStyle: {
            color: '#ffffff',
          },
          data: ['全国', '国网', '南网', '蒙西']
        },
        grid: {
          left: '5%',
          top: '25%',
          height: '65%',
          width: '93%'
        },

        xAxis: [
          {
            type: 'category',
            data: ['偏差', '相关性系数', '合格率', '极大误差率', '平均误差率', '准确率', '均方根误差'],
            axisLine: {
              lineStyle: {
                color: 'rgba(131,141,158,0)',
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
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

        ],
        axisLine: {
          lineStyle: {
            color: 'rgba(131,141,158,.1)',
          }
        },

        series: [
          {
            name: '全国',
            type: 'bar',
            barGap: 0,
            data: [55, 45, 67, 89, 45, 78, 98],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '国网',
            type: 'bar',
            data: [34, 56, 78, 66, 99, 76, 56],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '南网',
            type: 'bar',
            data: [44, 66, 78, 96, 56, 78, 65],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          },
          {
            name: '蒙西',
            type: 'bar',
            data: [66, 87, 56, 88, 44, 77, 98],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontsize: 12,
                  }
                }
              }
            }
          }
        ]
      },
      currentTime: ''
    }
  },
  methods: {
    initDate() {
      console.log(this.$refs.dateCon);
      let that = this;
      this.t = setInterval(function () {
        var date = new Date();
        that.currentTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      }, 1000)
    },
    drawRadar() {
      this.myChart = this.$echarts.init(document.getElementById('radar-pic'));
      this.myLightChart = this.$echarts.init(document.getElementById('radar-light'));
      this.mycolumn = this.$echarts.init(document.getElementById('column'));
      this.myLightColumn = this.$echarts.init(document.getElementById('lightColumn'));
      this.myChart.setOption(this.option);
      this.myLightChart.setOption(this.lightOption);
      this.mycolumn.setOption(this.column);
      this.myLightColumn.setOption(this.lightColumn);
    },
    navStyleReset(){
      this.navStyle.firstNav = false;
      this.navStyle.secNav = false;
      this.navStyle.thirNav = false;
      this.navStyle.fouNav = false;
      this.navStyle.fifNav = false;
      this.navStyle.sixNav = false;
    }
  },
  mounted() {
    let that = this;
    setTimeout(() => {
      this.drawRadar();
    }, 100);
    window.onresize = () => {
      that.myChart.resize();
      that.myLightChart.resize();
      that.mycolumn.resize();
      that.myLightColumn.resize();
    }
    this.initDate();
  },
  watch: {},
  beforeDestroy() {
    let that = this;
    clearInterval(that.t);
  }
}

</script>

<style scoped>
.page-con {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #051425 url("../assets/page/body_bg.png") no-repeat padding-box;
  background-size: 100% 100%;
  padding: 10px 25px 27px 25px;
  box-sizing: border-box;
  min-height: 820px;
}

header {
  width: 100%;
  height: 93px;
  padding-bottom: 10px;
  position: relative;
  margin-bottom: 15px;
  display: flex;
}

header > .header-img:nth-child(2) {
  flex: 1;
}

.header-img {
  height: 93px;
  position: relative;
}

.header-title > h1 {
  position: absolute;
  left: 0;
  top: 28%;
  color: #03EFFF;
  font-size: 28px;
}

.header-img > h3 {
  font-size: 19px;
  color: #03EFFF;
  position: absolute;
  left: 0;
  top: 30%;
}

.header-img > img {
  width: 100%;
  height: 100%;
}

.nav-con {
  width: 49.479167%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.nav-con > li {
  font-size: 22px;
  height: 80px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 80px;
  text-align: center;

}

@media screen and (max-width: 1500px) {
  .header-title > h1 {
    font-size: 23px;
  }

  .nav-con > li {
    font-size: 20px;
  }
}

@media screen and (max-width: 1400px) {
  .header-title > h1 {
    font-size: 20px;
  }

  .nav-con > li {
    font-size: 18px;
  }
}

.nav-select {
  color: #09DEFF !important;
  position: relative;
}
.nav-select:before{
  content:'';
  background-image:url("../assets/page/head-menu-hover-bg.png");
  background-size: 100% 100%;
  width: 140%;
  height: 40px;
  position: absolute;
  top: 24%;
  left: -20%;
}
header > h3 {

}

/*主体部分*/
main {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.main-con {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.main-left {
  height: 100%;
  width: 17.593584%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow: 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.left-title {
  font-size: 20px;
  width: 100%;
  height: 60px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.left-form {
  width: 100%;
  flex: 1;
}

.btn-con {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.main-mid {
  height: 100%;
  width: 24.492%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mid-container {
  width: 100%;
  height: 49.1%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow: 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
}

.main-right {
  height: 100%;
  width: 55.40107%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-con {
  width: 100%;
  height: 49.1%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow: 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
<style>

/*表单控件*/
.left-form .el-form-item__label {
  float: none !important;
  width: 64px;
  height: 22px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 22px;
}

.left-form .el-form-item__content {
  margin-left: 0 !important;
  width: 100%;
  margin-top: 10px;
}

.left-form .el-select {
  width: 100%;
}

.left-form .el-select > .el-input > input {
  height: 32px;
  background: rgba(216, 216, 216, 0);
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
  border-radius: 3px;
  border: 1px solid #2383C9;
}

.left-form .el-select > .el-input > input::placeholder {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 20px;

}

.left-form .el-input__inner {
  padding: 0 10px;
}

.left-form .el-radio__inner {
  display: none;
}

.left-form .el-radio-group {
  width: 100%;
}

.left-form .el-radio.is-bordered {
  width: 25%;
  height: 32px;
  background: rgba(216, 216, 216, 0);
  border-radius: 3px;
  border: 1px solid rgba(35, 131, 201, 0.6);
  font-size: 14px;
  color: #FFFFFF;
  padding: 0;
  margin-right: 10%;
}

.left-form .el-radio__label {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  line-height: 32px;
}

.left-form .el-radio__input.is-checked + .el-radio__label {
  color: white;
}

.left-form .el-radio.is-bordered.is-checked {
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
}

.left-form .el-date-editor > .el-input__prefix {
  left: 86%;
}

.left-form .el-date-editor {
  width: 100% !important;
  height: 32px;


}

.left-form .el-date-editor > .el-input__inner {
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
  background: rgba(216, 216, 216, 0);
  height: 100%;
  border-radius: 3px;
  border: 1px solid #2383C9;
}

.left-form .btn-con > .el-button {
  width: 135px;
  height: 32px;
  background: #2479D0;
  border-radius: 3px;
  border: 1px solid #2383C9;
  padding: 0;
  margin-top: 50px;
}
/*选择框*/
.el-select-dropdown {
  border: 1px solid #2383c9;
}

 .el-scrollbar {
  background: #07142A;
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  color: white;
  background: none !important;
}
.el-picker-panel{
  color: white;
  background:#0D1A30;
  box-shadow: 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  opacity: 1;
  box-sizing: border-box;
}
.el-picker-panel .el-picker-panel__icon-btn,.el-date-picker__header-label{
  color: #FFFFFF;
}
</style>