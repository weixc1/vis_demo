let chart = echarts.init(document.getElementById('reli'));

$.ajax({
    url: '/place', // 不写默认往当前的地址提交
    type: 'get', //传输据的方式
    success: function (data) {
        province = data['province']
        data1 = []
        data2 = []
        for (var j = 1; j <= 12; j++) {
            data2.push(j)
            for (var i = 0; i < 34; i++) {
                data1.push([j - 1, i, data['' + j][i]])
            }
        }


        option = {
            tooltip: {
                formatter: function (params) {
                    return province[params.data[1]] + (params.data[0] + 1) + '月<br/>重污染天数：' + params.data[2];
                }
            },
            animation: false,
            grid: {
                top: '2%',
                bottom: '20px',
                left: '15%',
                right: '4%'
            },
            xAxis: {
                type: 'category',
                data: data2,
                splitArea: {
                    show: true
                },
                axisTick: {
                    lineStyle: {
                        color: '#c4c4c4'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.8)'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: province,
                splitArea: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.8)'
                    }
                }
            },
            visualMap: {
                min: 0,
                max: 70,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                show: false,
                bottom: '5%',
            },
            series: [{
                name: '',
                type: 'heatmap',
                data: data1,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        chart.setOption(option);

        window.addEventListener("resize", function () {
            chart.resize();
        });
    }
})