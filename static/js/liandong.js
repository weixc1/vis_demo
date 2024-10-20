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
data.forEach(function(item) {
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
// pieData.sort(function(a, b) {
// 	return a.value - b.value
// })

// 将数据转换为堆叠图表所需的格式
var stackedData = {
	PM2_5: [],
	PM10: [],
	SO2: []
};
data.forEach(function(item) {
	stackedData.PM2_5.push(item.PM2_5);
	stackedData.PM10.push(item.PM10);
	stackedData.SO2.push(item.SO2);
});

// 初始化饼图和堆叠图表
var pieChart = echarts.init(document.getElementById('bt'));
var stackedChart = echarts.init(document.getElementById('zx'));

// 饼图配置项
var pieOption = {
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	series: [{
		name: 'PM2.5',
		type: 'pie',

		roseType: 'radius',
		radius: ['10%', '60%'],
		center: ['50%', '45%'],
		avoidLabelOverlap: false,
		emphasis: {
			label: {
				show: true,
				fontSize: '30',
				fontWeight: 'bold'
			}
		},
		labelLine: {
			show: true,
			lineStyle: {
				color: '#55aaff', // 指示线颜色
				width: 1, // 指示线宽度
			}
		},
		data: pieData,
		itemStyle: {
			normal: {
				// 设置圆角半径
				borderRadius: 3,
			},
			emphasis: {
				// 设置圆角半径
				borderRadius: 10,
			},
		},
	}]
};

// 堆叠图表配置项
var stackedOption = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['PM2.5', 'PM10', 'SO2'],
		textStyle: {
			color: '#fff'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		top: '8%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: data.map(function(item) {
			return item.month;
		}),
		axisLabel: {
			textStyle: {
				color: '#fff'
			}
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#fff'
			}
		},
	},
	yAxis: {
		type: 'value',
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#fff'
			}
		},
		axisLabel: {
			textStyle: {
				color: '#fff'
			}
		},
		// 分割线
		splitLine: {
			lineStyle: {
				type: "dashed",
				color: "#E9E9E9"
			}
		}
	},
	series: [{
			name: 'PM2.5',
			type: 'line',
			stack: '总量',
			data: stackedData.PM2_5,
			smooth: true,
		},
		{
			name: 'PM10',
			type: 'line',
			stack: '总量',
			data: stackedData.PM10,
			smooth: true,
		},
		{
			name: 'SO2',
			type: 'line',
			stack: '总量',
			data: stackedData.SO2,
			smooth: true,
		}
	]
};
// 渲染饼图和堆叠图表
pieChart.setOption(pieOption);
stackedChart.setOption(stackedOption);

window.addEventListener("resize", function() {
	pieChart.resize();
	stackedChart.resize();
});

pieChart.group = 'group1';
stackedChart.group = 'group1';
echarts.connect('group1');
