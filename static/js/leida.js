$.ajax({
	url: '/aqi', // 不写默认往当前的地址提交
	type: 'get', //传输据的方式
	dataType: 'json',
	success: function (data) {
		console.log(data.co)
		// 基于准备好的dom，初始化echarts实例
		var myChart1 = echarts.init(document.getElementById('ld'));
// 配置项和数据
		var option = {
			tooltip: {
				position: 'bottom',
				extraCssText: 'width: 140px; height: 180px;'
			},
			legend: {
				textStyle: {
					color: '#fff'
				},
				top: '3%',
				right: '2%'
			},
			radar: [{
				indicator: [
					{
						text: data.position[0],
						max:1
					},
					{
						text: data.position[1],
						max:1.5
					},
					{
						text: data.position[2],
						max:1.5
					},
					{
						text: data.position[3],
						max:1
					},
					{
						text: data.position[4],
						max:1
					},
					{
						text: data.position[5],
						max:1
					},
					{
						text: data.position[6],
						max:1
					}
				],
				radius: '70%',
				center: ['50%', '58%'],
				startAngle: 90,
				splitNumber: 4,
				shape: 'circle',
				axisName: {
					formatter: '【{value}】',
					color: '#d354ff'
				},
				splitArea: {
					areaStyle: {
						color: ['#77eabe', '#00ff15', '#aaff76', '#fff100'],
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
			}, ],
			series: [{
				type: 'radar',
				emphasis: {
					lineStyle: {
						width: 4
					}
				},
				symbolSize: 6,
				data: [
					{
						value: data.CO,
						name: 'CO',
						areaStyle: {
							color: 'rgb(245,255,106)'
						}
					},
					{
						value: data.SO2,
						name: 'SO2',
						areaStyle: {
							color: 'rgb(72,255,52)'
						}
					},
					{
						value: data.PM25,
						name: 'PM25',
						areaStyle: {
							color: 'rgb(0,255,235)'
						}
					},
					{
						value: data.PM10,
						name: 'PM10',
						areaStyle: {
							color: 'rgb(255,99,99)'
						}
					},
					{
						value: data.NO2,
						name: 'NO2',
						areaStyle: {
							color: 'rgb(255,208,70)'
						}
					},
					{
						value: data.O3,
						name: 'O3',
						areaStyle: {
							color: 'rgba(255,0,220,0.73)'
						}
					},
				]
			},

			]
		};

// 使用刚指定的配置项和数据显示图表。
		myChart1.setOption(option);
		window.addEventListener("resize", function() {
			myChart1.resize();
		})
	}
});
