
window.addEventListener('load', function () {
    //数据面积图
    // (function () {
    //     var myChart = echarts.init(document.querySelector('.footer'));
    //
    //     let base = +new Date(2013, 1, 1);
    //     let oneDay = 24 * 3600 * 1000;
    //     console.log(oneDay);
    //     let date = [];
    //
    //     let data1 = [Math.random() * 300];
    //     let data2 = [Math.random() * 300];
    //     let data3 = [Math.random() * 300];
    //     let data4 = [Math.random() * 300];
    //     let data5 = [Math.random() * 300];
    //     let data6 = [Math.random() * 300];
    //     let data7 = [Math.random() * 300];
    //     let data8 = [Math.random() * 300];
    //
    //     for (let i = 1; i < 356*6 + 1; i++) {
    //         var now = new Date((base += oneDay));
    //         // console.log(now);
    //
    //         date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    //         // console.log(date);
    //         data1.push(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
    //         data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
    //         data3.push(Math.round((Math.random() - 0.5) * 20 + data3[i - 1]));
    //         data4.push(Math.round((Math.random() - 0.5) * 20 + data4[i - 1]));
    //         data5.push(Math.round((Math.random() - 0.5) * 20 + data5[i - 1]));
    //         data6.push(Math.round((Math.random() - 0.5) * 20 + data6[i - 1]));
    //         data7.push(Math.round((Math.random() - 0.5) * 20 + data5[i - 1]));
    //         data8.push(Math.round((Math.random() - 0.5) * 20 + data6[i - 1]));
    //     }
    //     console.log(data1);
    //     var option = {
    //         legend: {},
    //         tooltip: {
    //             trigger: 'axis',
    //             position: function (pt) {
    //                 return [pt[0], '10%'];
    //             }
    //         },
    //         toolbox: {
    //             feature: {
    //                 dataZoom: {
    //                     yAxisIndex: 'none'
    //                 },
    //                 restore: {},
    //                 saveAsImage: {}
    //             }
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: false,
    //             data: date
    //         },
    //         yAxis: {
    //             type: 'value',
    //             boundaryGap: [0, '100%']
    //         },
    //         dataZoom: [{
    //             type: 'inside',
    //             start: 0,
    //             end: 10
    //         },
    //         {
    //             start: 0,
    //             end: 10
    //         }
    //         ],
    //         series: [
    //             {
    //                 name: 'temperature',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(20, 70, 10)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'rgb(120, 18, 31)'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'rgb(110, 240, 131)'
    //                     }
    //                     ])
    //                 },
    //                 data: data1
    //             },
    //             {
    //                 name: 'humidity',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(233, 213, 123)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'red'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'red'
    //                     }
    //                     ])
    //                 },
    //                 data: data2
    //             },
    //             {
    //                 name: 'PM25',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'blue'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'blue'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'rgb(144, 213, 131)'
    //                     }
    //                     ])
    //                 },
    //                 data: data3
    //             },
    //             {
    //                 name: 'PM10',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(223, 143, 134)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'skyblue'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'skyblue'
    //                     }
    //                     ])
    //                 },
    //                 data: data4
    //             },
    //             {
    //                 name: 'SO2',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(54, 231, 213)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'pink'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'pink'
    //                     }
    //                     ])
    //                 },
    //                 data: data5
    //             },
    //             {
    //                 name: 'NO2',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(76, 23, 134)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'orange'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'orange'
    //                     }
    //                     ])
    //                 },
    //                 data: data6
    //             },
    //             {
    //                 name: 'CO',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(72, 213, 159)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'rgb(255, 158, 68)'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'rgb(255, 70, 131)'
    //                     }
    //                     ])
    //                 },
    //                 data: data7
    //             },
    //             {
    //                 name: 'O3',
    //                 type: 'line',
    //                 symbol: 'none',
    //                 sampling: 'lttb',
    //                 itemStyle: {
    //                     color: 'rgb(255, 70, 131)'
    //                 },
    //                 areaStyle: {
    //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'rgb(255, 158, 68)'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'rgb(255, 70, 131)'
    //                     }
    //                     ])
    //                 },
    //                 data: data8
    //             },
    //         ],
    //     }
    //
    //
    //     myChart.setOption(option);
    // })();
    //地图
    //地图
    (function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector('.contentLeft'));
        var geoCoordMap = {
            "江苏": [118.8062, 31.9208],
            "吉林": [125.8154, 44.2584],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "四川": [103.9526, 30.7617],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "湖南": [113.0823, 28.2568],
            "云南": [102.73, 25.04],
            "北京": [116.46, 39.92],
            "天津": [117.2, 39.13],
            "哈尔滨": [126.63, 45.75],
            "武汉": [114.31, 30.52],
        };

        var d1 = {
            '河南': 6331,
            '山东': 5002,
            '安徽': 3962,
            '吉林': 3879,
            '江苏': 3513,
            '河北': 3505,
            '湖南': 2971,
            '四川': 2779,
            '湖北': 2792,
            '辽宁': 2134,
            '云南': 2000,
            "北京": 1980,
            "天津": 1900,
            "哈尔滨": 5324,
            "武汉": 2313
        };

        var d2 = {
            '河南': 6360,
            '山东': 5202,
            '安徽': 3852,
            '吉林': 4054,
            '江苏': 3466,
            '河北': 3645,
            '湖南': 2937,
            '四川': 2822,
            '湖北': 2677,
            '辽宁': 2259,
            '云南': 2000,
            "北京": 2313,
            "天津": 1900,
            "哈尔滨": 2324,
            "武汉": 4673
        };

        var d3 = {
            '河南': 6382,
            '山东': 5259,
            '安徽': 3907,
            '吉林': 4043,
            '江苏': 3536,
            '河北': 3674,
            '湖南': 2955,
            '四川': 2831,
            '湖北': 2716,
            '辽宁': 2261,
            '云南': 2000,
            "北京": 1980,
            "天津": 2131,
            "哈尔滨": 3251,
            "武汉": 6523

        };

        var d4 = {
            '河南': 6483,
            '山东': 5190,
            '安徽': 3889,
            '吉林': 3533,
            '江苏': 3572,
            '河北': 3524,
            '湖南': 2891,
            '四川': 2830,
            '湖北': 2704,
            '辽宁': 2131,
            '云南': 2000,
            "北京": 1980,
            "天津": 1423,
            "哈尔滨": 2351,
            "武汉": 2413
        };

        var d5 = {
            '河南': 6529,
            '山东': 5203,
            '安徽': 3934,
            '吉林': 3769,
            '江苏': 3612,
            '河北': 3566,
            '湖南': 2846,
            '四川': 2825,
            '湖北': 2579,
            '辽宁': 2375,
            '云南': 2000,
            "北京": 2314,
            "天津": 1900,
            "哈尔滨": 3141,
            "武汉": 3213


        };

        var d6 = {
            '河南': 6631,
            '山东': 5276,
            '安徽': 3901,
            '吉林': 3698,
            '江苏': 3631,
            '河北': 3617,
            '湖南': 2876,
            '四川': 2836,
            '湖北': 2581,
            '辽宁': 2283,
            '云南': 2000,
            "北京": 2314,
            "天津": 5132,
            "哈尔滨": 2313,
            "武汉": 1412
        };

        var colors = [
            // ["#9e1de9", "#f46236", "#FFDB5C", "#21312D", "#55ff7f", "#ff1365"],
            // ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
            // ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
            ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
        ];
        var colorIndex = 0;
        $(function () {
            var year = ["2013", "2013", "2015", "2016", "2017", "2018"];
            var mapData = [
                [],
                [],
                [],
                [],
                [],
                [],
            ];

            /*柱子Y名称*/
            var categoryData = [];
            var barData = [];

            for (var key in geoCoordMap) {
                mapData[0].push({
                    "year": '2013',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d1[key] / 100,
                });
                mapData[1].push({
                    "year": '2014',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d2[key] / 100,
                });
                mapData[2].push({
                    "year": '2015',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d3[key] / 100,
                });
                mapData[3].push({
                    "year": '2016',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d4[key] / 100,
                });
                mapData[4].push({
                    "year": '2017',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d5[key] / 100,
                });
                mapData[5].push({
                    "year": '2018',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d6[key] / 100,
                });
            }

            for (var i = 0; i < mapData.length; i++) {
                mapData[i].sort(function sortNumber(a, b) {
                    return a.value - b.value
                });
                // console.log(mapData[0])
                barData.push([]);
                categoryData.push([]);
                for (var j = 0; j < mapData[i].length; j++) {
                    barData[i].push(mapData[i][j].value1);
                    categoryData[i].push(mapData[i][j].name);
                }
            }
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                console.log(geoCoord)
                return res;
            };

            var convertToLineData = function (data, gps) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var toCoord = geoCoordMap[dataItem.name];
                    //debugger;
                    var fromCoord = gps; //郑州
                    //  var toCoord = geoGps[Math.random()*3];
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }
                }
                return res;
            };

            optionXyMap01 = {
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    left: '10%',
                    right: '10%',
                    bottom: '0%',
                    width: '60%',
                    //  height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },

                },
                baseOption: {

                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    grid: {
                        right: '1%',
                        top: '15%',
                        bottom: '5%',
                        width: '20%'
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        zoom: 1,
                        center: [113.83531246, 34.0267395887],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                // shadowColor: 'rgba(128, 217, 248, 1)',
                                shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },
                },
                options: []

            };

            for (var n = 0; n < year.length; n++) {

                optionXyMap01.options.push({
                    /*backgroundColor: '#013954',*/
                    title:


                        [{
                            subtext: '   ',
                            left: '20%',
                            top: '0%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 17
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + "数据(100万吨)",
                            left: '73%',
                            top: '0%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 17
                            }
                        }
                        ],
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        max: 65,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 16,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: categoryData[n]
                    },

                    series: [
                        //未知作用
                        {
                            //文字和标志
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n]),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            }
                        },
                        //地图？
                        {
                            type: 'map',
                            map: 'china',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: mapData
                        },

                        //柱状图
                        {
                            zlevel: 1,
                            type: 'bar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            },
                            data: barData[n]
                        }
                    ],

                })
            }
            myChart.setOption(optionXyMap01);
            /*});*/
        });
        function randomNum(minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                    break;
                default:
                    return 0;
                    break;
            }
        }

        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
    //雷达图
    (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector('.box1'));
        // 配置项和数据
        var option = {
            color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
            legend: {},
            radar: [
                {
                    indicator: [
                        { text: '华北' },
                        { text: '华东' },
                        { text: '港台' },
                        { text: '西南' },
                        { text: '东北' }
                    ],
                    radius: 120,
                    center: ['50%', '60%'],
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    axisName: {
                        formatter: '【{value}】',
                        color: '#428BD4'
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(211, 253, 250, 0.8)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(211, 253, 250, 0.8)'
                        }
                    }
                },
            ],
            series: [
                {
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },

                    data: [
                        {
                            value: [100, 8, 0.4, -80, 2000],
                            name: '气候'
                        },
                        {
                            value: [60, 5, 0.3, -100, 1500],
                            name: '湿度',
                            areaStyle: {
                                color: 'rgba(255, 228, 52, 0.6)'
                            }
                        }
                    ]
                },

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })();
    (function () {
        var myChart = echarts.init(document.querySelector('.box2'));
        // 初始化 ECharts 实例
        // 指定图表的配置项和数据
        var option = {
            legend: {
                show: true,
                data: ['2级风', '3级风', '1级风', '3级风', '3级风', '4级风', '4级风', '5级风', '6级风', '1级风', '2级风', '4级风', '4级风',
                    '2级风', '2级风'
                ],
                x: 'left'
            },

            tooltip: {
                trigger: 'item'
            },

            polar: {
                radius: ['0%', '80%'],
                center: ['50%', '50%']
            },
            angleAxis: {
                type: 'category',
                data: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW'],
                startAngle: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    rotate: 45
                }
            },
            radiusAxis: {
                min: 0,
                max: 8,
                interval: 1,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                }
            },
            series: [{
                type: 'bar',
                data: [{
                    value: 2,
                    name: '2级风',
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    value: 3,
                    name: '3级风',
                    itemStyle: {
                        color: 'blue'
                    }
                },
                {
                    value: 1,
                    name: '1级风',
                    itemStyle: {
                        color: 'green'
                    }
                },
                {
                    value: 3,
                    name: '3级风',
                    itemStyle: {
                        color: 'yellow'
                    }
                },
                {
                    value: 3,
                    name: '3级风',
                    itemStyle: {
                        color: 'purple'
                    }
                },
                {
                    value: 4,
                    name: '4级风',
                    itemStyle: {
                        color: 'orange'
                    }
                },
                {
                    value: 4,
                    name: '4级风',
                    itemStyle: {
                        color: 'pink'
                    }
                },
                {
                    value: 5,
                    name: '5级风',
                    itemStyle: {
                        color: 'gray'
                    }
                },
                {
                    value: 6,
                    name: '6级风',
                    itemStyle: {
                        color: 'brown'
                    }

                },
                {
                    value: 1,
                    name: '1级风',
                    itemStyle: {
                        color: 'black'
                    }
                },
                {
                    value: 2,
                    name: '2级风',
                    itemStyle: {
                        color: 'navy'
                    }
                },
                {
                    value: 4,
                    name: '4级风',
                    itemStyle: {
                        color: 'teal'
                    }
                },
                {
                    value: 4,
                    name: '4级风',
                    itemStyle: {
                        color: 'maroon'
                    }
                },
                {
                    value: 2,
                    name: '2级风',
                    itemStyle: {
                        color: 'olive'
                    }
                },
                {
                    value: 2,
                    name: '2级风',
                    itemStyle: {
                        color: 'aqua'
                    }
                }
                ],
                coordinateSystem: 'polar',
                stack: 'wind'
            }]
        };

        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
    })();
    //联动
    (function () {
        var data = [{
            month: '1月',
            PM2_5: 56.2,
            PM10: 72.3,
            SO2: 32.4,
            temp: 5.4,
            rainfall: 24.5
        },
        {
            month: '2月',
            PM2_5: 63.5,
            PM10: 80.2,
            SO2: 35.6,
            temp: 7.1,
            rainfall: 27.8
        },
        {
            month: '3月',
            PM2_5: 49.3,
            PM10: 65.8,
            SO2: 28.9,
            temp: 11.5,
            rainfall: 32.1
        },
        {
            month: '4月',
            PM2_5: 38.4,
            PM10: 53.1,
            SO2: 22.7,
            temp: 16.2,
            rainfall: 38.9
        },
        {
            month: '5月',
            PM2_5: 31.8,
            PM10: 43.2,
            SO2: 18.6,
            temp: 21.8,
            rainfall: 51.2
        },
        {
            month: '6月',
            PM2_5: 36.7,
            PM10: 48.3,
            SO2: 20.3,
            temp: 26.7,
            rainfall: 71.3
        },
        {
            month: '7月',
            PM2_5: 43.1,
            PM10: 56.4,
            SO2: 24.1,
            temp: 28.9,
            rainfall: 77.8
        },
        {
            month: '8月',
            PM2_5: 48.9,
            PM10: 62.1,
            SO2: 27.7,
            temp: 30.1,
            rainfall: 83.2
        },
        {
            month: '9月',
            PM2_5: 44.2,
            PM10: 57.2,
            SO2: 25.2,
            temp: 25.8,
            rainfall: 61.7
        },
        {
            month: '10月',
            PM2_5: 41.5,
            PM10: 53.1,
            SO2: 22.4,
            temp: 20.7,
            rainfall: 40.2
        },
        {
            month: '11月',
            PM2_5: 52.1,
            PM10: 66.8,
            SO2: 30.5,
            temp: 14.2,
            rainfall: 27.1
        },
        {
            month: '12月',
            PM2_5: 58.4,
            PM10: 73.2,
            SO2: 33.2,
            temp: 7.9,
            rainfall: 22.6
        }
        ];

        // 将数据按月份分组
        var dataGroupByMonth = {};
        data.forEach(function (item) {
            var month = item.month;
            if (!dataGroupByMonth[month]) {
                dataGroupByMonth[month] = {
                    PM2_5: 0,
                    PM10: 0,
                    SO2: 0
                };
            }
            dataGroupByMonth[month].PM2_5 += item.PM2_5;
            dataGroupByMonth[month].PM10 += item.PM10;
            dataGroupByMonth[month].SO2 += item.SO2;
        });

        // 将数据转换为饼图所需的格式
        var pieData = [];
        for (var key in dataGroupByMonth) {
            pieData.push({
                name: key,
                value: dataGroupByMonth[key].PM2_5
            });
        }

        // 将数据转换为堆叠图表所需的格式
        var stackedData = {
            PM2_5: [],
            PM10: [],
            SO2: []
        };
        data.forEach(function (item) {
            stackedData.PM2_5.push(item.PM2_5);
            stackedData.PM10.push(item.PM10);
            stackedData.SO2.push(item.SO2);
        });

        // 初始化饼图和堆叠图表
        var pieChart = echarts.init(document.getElementById('pie-chart'));
        var stackedChart = echarts.init(document.getElementById('stacked-chart'));

        // 饼图配置项
        var pieOption = {
            title: {
                text: 'PM2.5浓度分布图'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [{
                name: 'PM2.5',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: pieData
            }]
        };

        // 堆叠图表配置项
        var stackedOption = {
            title: {
                text: '污染浓度趋势'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['PM2.5', 'PM10', 'SO2']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.map(function (item) {
                    return item.month;
                })
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'PM2.5',
                type: 'line',
                stack: '总量',
                data: stackedData.PM2_5
            },
            {
                name: 'PM10',
                type: 'line',
                stack: '总量',
                data: stackedData.PM10
            },
            {
                name: 'SO2',
                type: 'line',
                stack: '总量',
                data: stackedData.SO2
            }
            ]
        };
        // 渲染饼图和堆叠图表
        pieChart.setOption(pieOption);
        stackedChart.setOption(stackedOption);

        pieChart.group = 'group1';
        stackedChart.group = 'group1';
        echarts.connect('group1');
    })();
})