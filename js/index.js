//柱状图左
(function(){
  var myChart =echarts.init(document.
    querySelector('.bar .chart'));
     var option = {
      color: ["#2f89cf"],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top:"10px",
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: [
                '虞书欣', 
                '刘雨昕', 
                '喻言', 
                '许佳琪', 
                '孔雪儿', 
                '安琪', 
                '金子涵'],
              axisTick: {
                  alignWithLabel: true
              },
              axisLabel:{
                color: "rgba(255,255,255,.6)",
                fontSize: "9"
              },
            axisLine:{
              show:false
            }  
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLabel:{
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              },
            axisLine:{
              lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 2,
              type: "solid"
            }  
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
      ],
      series: [
          {
              name: '直接访问',
              type: 'bar',
              barWidth: '35%',
              data: [500, 450, 300, 350, 390, 330, 250],
              itemStyle:{
                barBorderRadius:5
              }
          }
      ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });//图表自适应屏幕
})();

//柱状图右
(function(){
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
      grid: {
        top: "10%",
        left: "22%",
        bottom: "10%"
      },
      xAxis: {
          show:false
      },
      yAxis: [
        {
          type: 'category',
          inverse:true,
          data: ["vocal", "rap", "素质", "舞蹈", "气质"],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            color:"#fff"
          }
      },
      {
        show: true,
        inverse:true, 

        data:[702, 350, 610, 793, 664],
           // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
      series: [
        {
            name: "条",
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 10,//柱子的宽度
            yAxisIndex: 0,
            data: [70, 34, 60, 78, 69],
            itemStyle: {
              normal: {
                barBorderRadius: 20,    
                color: function(params){
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          },
          label: {
            normal: {
                 show: true,
                 // 图形内显示
                 position: "inside",
                 // 文字的显示格式
                 formatter: "{c}%"
             }
          }    
        },

        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100],
          itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
          },
        
        }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });//图表自适应屏幕
})();


//折线图左
(function(){
  var myChart = echarts.init(document.querySelector('.line .chart'));
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
           [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
           [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
           [50, 175, 112, 197, 121, 67, 98, 21, 70, 120, 76, 38],
       [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
   ];
   var option = {
      color: ['#00f2f1', '#ed3f35'],
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          textStyle: {
            color: '#4c9bfd' // 图例文字颜色
          },
          right: '10%' // 距离右边10%
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,// 显示边框
        borderColor: '#012f4a',// 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      xAxis: {
        type: 'category',
        data: ['1月初', '1月中', '2月初', '2月中', '3月初', '3月中', '4月初', '4月中', '5月初', '5月中', '6月初', '6月中'],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          boundaryGap: false  // 去除轴内间距
      },
      yAxis: {
        type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
          }
       }

      },
      series: [
  
          {
            name:'新增粉丝',
            data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
          },
          {
            name:'新增游客',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],  
            type: 'line',
            smooth: true,
          }
      ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });//图表自适应屏幕
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();

//折线图右
(function(){
  var myChart =echarts.init(document.querySelector('.line2 .chart'));
  var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        top:"0%",
        textStyle:{
          color:"rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '10',
        right: '30',
        bottom: '10',
        bottom:"10",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
            "21","22","23","24","25","26","26","28","29","30"],
            axisLabel:{
              textStyle:{
                color:"rgba(255,255,255,.6)",
                fontSize:12
              }
            },
            axisLine:{
              lineStyle:{
                color: "rgba(255,255,255,.2)"
              }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
          color: "rgba(255,255,255,.1)"
          }
        }
        }
    ],
    series: [
        {
            name: '经验选手',
            smooth:true,
            type: 'line',
            areaStyle: {},
            data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 
              30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
            lineStyle:{
              color: "#0184d5",
              width: 2
            },
            areaStyle: {
              // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
       itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        },
        {
          name: "新人选手",
          type: "line",
          smooth: true,
          areaStyle: {},
          data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,
            20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
          lineStyle: {
            normal: {
              color: "#00d887",
              width: 2
            }
           },
           areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
           itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
        },
    ]
};

myChart.setOption(option)
window.addEventListener("resize", function() {
  myChart.resize();
});//图表自适应屏幕
})();

//饼图左
(function(){
  var myChart=echarts.init(document.querySelector(".pie .chart"));
  var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom:"0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
        data: ["2岁以上", "23-25岁", "21-22岁", "18-20岁"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ["50%", "50%"],
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            data: [
              { value: 4, name: "18-20岁" },
              { value: 2, name: "21-22岁" },
              { value: 2, name: "23-25岁" },
              { value: 1, name: "25岁以上" }
            ]
        }
    ]
};

  myChart.setOption(option)
  window.addEventListener("resize",function(){
    myChart.resize();
  });
})();

//饼图右
(function(){
  var myChart =echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
   
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: '80%',
        top: 'bottom',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
    },

    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', 
    '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: "radius",
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }
            ],
            label: {
              fontSize: 10
            },
            labelLine: {
             // 连接扇形图线长
              length: 6,
              // 连接文字线长
              length2: 8
             } 
        }
    ]
};
myChart.setOption(option)
window.addEventListener("resize", function() {
  myChart.resize();
});//图表自适应屏幕
})();



