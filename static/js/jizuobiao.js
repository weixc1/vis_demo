var myChart2 = echarts.init(document.getElementById('jzb'));
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
        extraCssText: 'width: 100px; height: 20px;'
    },
    polar: {
        radius: ['0%', '75%'],
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
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid'
            }
        },
    },
    radiusAxis: {
        min: 0,
        max: 8,
        interval: 1,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                type: 'dashed'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid'
            }
        },
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
                    color: 'rgba(0,255,242,0.82)'
                }
            },
            {
                value: 6,
                name: '6级风',
                itemStyle: {
                    color: '#f5ff6a'
                }

            },
            {
                value: 1,
                name: '1级风',
                itemStyle: {
                    color: '#ffd046'
                }
            },
            {
                value: 2,
                name: '2级风',
                itemStyle: {
                    color: '#ffb6eb'
                }
            },
            {
                value: 4,
                name: '4级风',
                itemStyle: {
                    color: '#4ecfff'
                }
            },
            {
                value: 4,
                name: '4级风',
                itemStyle: {
                    color: '#2fff00'
                }
            },
            {
                value: 2,
                name: '2级风',
                itemStyle: {
                    color: '#0048ff'
                }
            },
            {
                value: 2,
                name: '2级风',
                itemStyle: {
                    color: '#ff00aa'
                }
            }
        ],
        coordinateSystem: 'polar',
        stack: 'wind'
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart2.setOption(option);
window.addEventListener("resize", function () {
    myChart2.resize();
});