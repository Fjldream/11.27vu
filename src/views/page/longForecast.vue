<template>
<div id="longForecast">
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
</template>

<script>
export default {
  name: "longForecast",
  data(){
    return{
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
                lineStyle: {
                  type:'dashed',
                  color: 'rgb(82,135,238)',
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(82,135,238)',
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
    }
  },
  methods:{
    drawRadar() {
      this.myChart = this.$echarts.init(document.getElementById('radar-pic'));
      this.myLightChart = this.$echarts.init(document.getElementById('radar-light'));
      this.mycolumn = this.$echarts.init(document.getElementById('column'));
      this.myLightColumn = this.$echarts.init(document.getElementById('lightColumn'));
      let that = this;
      window.onresize = () => {
        that.myChart.resize();
        that.myLightChart.resize();
        that.mycolumn.resize();
        that.myLightColumn.resize();
      }
      this.myChart.setOption(this.option);
      this.myLightChart.setOption(this.lightOption);
      this.mycolumn.setOption(this.column);
      this.myLightColumn.setOption(this.lightColumn);
    },
  },
  mounted() {
    setTimeout(() => {
      this.drawRadar();
    }, 100);
  }
}
</script>

<style scoped>
#longForecast{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.main-mid {
  height: 100%;
  width: 30.069%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mid-container {
  width: 100%;
  height: 49.1%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow:inset 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
}

.main-right {
  height: 100%;
  width: 68.315%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-con {
  width: 100%;
  height: 49.1%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow:inset 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
}
</style>