function initMap() {
    var chart4 = echarts.init(document.getElementById('content2'))
    let option = {
        backgroundColor: 'transparent', // echarts 背景色
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            show: false,
        },

        series: [
            {
                name: '',
                type: 'map',
                mapType: params.name,
                selectedMode: 'single',

                label: {
                    normal: {
                        show: true,
                        color: '#888',
                    },
                    emphasis: {
                        show: true,
                        color: '#fff',
                    },
                },
                itemStyle: {
                    normal: {
                        borderColor: '#94c5ea',
                        areaColor: '#fdfdfd',
                        borderWidth: 0.8,
                        color: '#888888',
                    }, //正常样式
                    emphasis: {
                        areaColor: '#5c99ca',
                        borderColor: '#94c5ea',
                        fontColor: '#fff',
                    }, //鼠标事件区块样式
                },
                data: [
                    { name: '成都市', desc: '我是成都市的简介' },
                    { name: '内江市', desc: '我是内江市的简介，这是我老家' },
                ],
            },
        ],
    }
    chart4.setOption(option)
}