//地图
(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('map'));
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
		["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB",
			"#91CA8C", "#F49F42"
		],
	];
	var colorIndex = 0;
	$(function() {
		var year = ["2013", "2014", "2015", "2016", "2017", "2018"];
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
			// mapData[i].sort(function sortNumber(a, b) {
			// 	return a.value - b.value
			// });
			// console.log(mapData[0])
			barData.push([]);
			categoryData.push([]);
			for (var j = 0; j < mapData[i].length; j++) {
				barData[i].push(mapData[i][j].value1);
				categoryData[i].push(mapData[i][j].name);
			}
		}
		var convertData = function(data) {
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
			return res;
		};

		var convertToLineData = function(data, gps) {
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
			// timeline: {
			// 	data: year,
			// 	axisType: 'category',
			// 	autoPlay: true,
			// 	playInterval: 3000,
			// 	left: '10%',
			// 	right: '10%',
			// 	bottom: '0%',
			// 	width: '60%',
			// 	//  height: null,
			// 	label: {
			// 		normal: {
			// 			textStyle: {
			// 				color: '#ddd'
			// 			}
			// 		},
			// 		emphasis: {
			// 			textStyle: {
			// 				color: '#fff'
			// 			}
			// 		}
			// 	},
			// 	symbolSize: 10,
			// 	lineStyle: {
			// 		color: '#555'
			// 	},
			// 	checkpointStyle: {
			// 		borderColor: '#777',
			// 		borderWidth: 2
			// 	},
			// 	controlStyle: {
			// 		showNextBtn: true,
			// 		showPrevBtn: true,
			// 		normal: {
			// 			color: '#666',
			// 			borderColor: '#666'
			// 		},
			// 		emphasis: {
			// 			color: '#aaa',
			// 			borderColor: '#aaa'
			// 		}
			// 	},
			//
			// },
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
						symbolSize: function(val) {
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
					// {
					// 	zlevel: 1,
					// 	type: 'bar',
					// 	symbol: 'none',
					// 	itemStyle: {
					// 		normal: {
					// 			color: colors[colorIndex][n]
					// 		},
					// 	},
					// 	data: barData[n],
					// }
				],

			})
		}
		myChart.setOption(optionXyMap01);
		window.addEventListener("resize", function() {
			myChart.resize();
		});

		function zhexian(params) {
			$.ajax({
				url: '/check_data', // 不写默认往当前的地址提交
				type: 'post', //传输据的方式
				data: {
					'componentType': params.componentType,
					'data': params.data,
					'name': params.name
				},
				success: function(data) {
					document.getElementById('zhe-xian-title').innerHTML = data.map + '-' + data
						.year + '年空气质量趋势'

					var myChart = echarts.init(document.getElementById('zhexian'));

					let date = ["1月", '2月', "3月", '4月', "5月", '6月', "7月", '8月', "9月", '10月',
						"11月", '12月'
					];

					let SO2 = data['polution_data']['SO2']
					let CO = data['polution_data']['CO']
					let PM2_5 = data['polution_data']['PM2_5']
					let PM10 = data['polution_data']['PM10']
					let NO2 = data['polution_data']['SO2']
					let O3 = data['polution_data']['O3']

					const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']

					console.log(data);
					var option = {
						title: {
							text: data.name,
						},
						grid: {
							top: '20%',
							bottom: '10%',
							left: '4%',
							right: '2%'
						},
						legend: {
							right: '3%',
							top: '2%',
							textStyle: {
								color: '#fff'
							}
						},
						tooltip: {
							trigger: 'axis',
							position: function(pt) {
								return [pt[0], '10%'];
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: date,
							axisLabel: {
								textStyle: {
									color: '#fff'
								}
							},
							splitLine: {
								show: true,
								lineStyle: {
									color: 'rgba(255,255,255,0.2)',
								},
							},
						},
						yAxis: {
							type: 'value',
							max: 200,
							boundaryGap: [0, '100%'],
							axisLabel: {
								textStyle: {
									color: '#fff'
								}
							},
							splitLine: {
								show: true,
								lineStyle: {
									color: 'rgba(255,255,255,0.2)',
								},
							},

						},

						series: [{
								name: 'PM25',
								type: 'line',
								sampling: 'lttb',
								data: PM2_5,
								symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(84,131,255,1)', // 线条颜色
									},
									borderColor: 'rgba(0,0,0,.4)',
								},
								itemStyle: {
									color: 'rgba(84,131,255,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(84,131,255,.3)',
												},
												{
													offset: 1,
													color: 'rgba(84,131,255, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
							{
								name: 'PM10',
								type: 'line',
								symbol: 'none',
								sampling: 'lttb',

								data: PM10,
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(77,192,36,1)', // 线条颜色
									},
								},
								itemStyle: {
									color: 'rgba(77,192,36,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(77,192,36,.3)',
												},
												{
													offset: 1,
													color: 'rgba(77,192,36, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
							{
								name: 'SO2',
								type: 'line',
								symbol: 'none',
								sampling: 'lttb',

								data: SO2,
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(248,172,6,1)', // 线条颜色
									},
								},
								itemStyle: {
									color: 'rgba(248,172,6,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(248,172,6,.3)',
												},
												{
													offset: 1,
													color: 'rgba(248,172,6, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
							{
								name: 'NO2',
								type: 'line',
								symbol: 'none',
								sampling: 'lttb',
								data: NO2,
								symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(170, 85, 255, 1.0)', // 线条颜色
									},
								},
								itemStyle: {
									color: 'rgba(170, 85, 255,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(170, 85, 255,.3)',
												},
												{
													offset: 1,
													color: 'rgba(170 ,85, 255, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
							{
								name: 'CO',
								type: 'line',
								symbol: 'none',
								sampling: 'lttb',

								data: CO,
								symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(0, 0, 255, 1.0)', // 线条颜色
									},
								},
								itemStyle: {
									color: 'rgba(0, 0, 255,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(0, 0, 255,.3)',
												},
												{
													offset: 1,
													color: 'rgba(0, 0, 255, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
							{
								name: 'O3',
								type: 'line',
								symbol: 'none',
								sampling: 'lttb',

								data: O3,
								symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
								showAllSymbol: true,
								symbolSize: 0,
								smooth: true,
								lineStyle: {
									normal: {
										width: 2,
										color: 'rgba(255, 85, 127, 1.0)', // 线条颜色
									},
								},
								itemStyle: {
									color: 'rgba(255, 85, 127,1)',
								},
								tooltip: {
									show: true,
								},
								areaStyle: {
									//区域填充样式
									normal: {
										//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
										color: new echarts.graphic.LinearGradient(
											0,
											0,
											0,
											1,
											[{
													offset: 0,
													color: 'rgba(255, 85, 127,.3)',
												},
												{
													offset: 1,
													color: 'rgba(255, 85, 127, 0)',
												},
											],
											false
										),
										shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
										shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
									},
								},
							},
						],
					}
					myChart.setOption(option);
					window.addEventListener("resize", function() {
						myChart.resize();
					});
				}
			});
		}

		zhexian(' ')
		myChart.on('click', function(params) {
			zhexian(params)
		});
	});
})();
