/**
 * 
 * 获取职位全国分布数据生成饼状图
 */
function pie(){
	var JsonSeries = [];
	document.getElementById("dataView").className = 'general';
	var dataViewcharts
		=echarts.init(document.getElementById('dataView'));
	var dataViewoption = {
	 title : {
	        text: '评分统计',
	        subtext: '',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:[]
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'left',
	                        max: 1548
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'评分',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[]
	        }]
		};
	// 异步加载数据
	$.get('http://localhost:8080/job-web/pie').done(function(data) {
		data.forEach(function(element) {
			JsonSeries.push(JSON.parse(element));	
		});
		dataViewoption.series[0].data = JsonSeries;
		dataViewoption.legend.data = JsonSeries;
		dataViewcharts.clear();
		dataViewcharts.setOption(dataViewoption);
	});		
}

/**
 * 
 * 获取工资分段数据生成柱状图
 */

function funnel(){
	document.getElementById("dataView").className = 'general';
	var dataViewcharts
		=echarts.init(document.getElementById('dataView'));
	var dataViewoption = {
		title: {
			text: '热门菜品TOP10',
			x:'center',
			textStyle: {fontSize: 30}
		},
		tooltip: {
			trigger: 'item'
		},
		toolbox: {
			feature: {
				dataView: { readOnly: false },
				restore: {},
				saveAsImage: {}
			}
		},
		legend: {
			data: []
		},
		series: [
			{
				name: 'Funnel',
				type: 'funnel',
				left: '10%',
				top: 40,
				bottom: 40,
				width: '80%',
				min: 0,
				max: 100,
				minSize: '0',
				maxSize: '100%',
				sort: 'descending',
				gap: 2,
				label: {
					show: true,
					position: 'inside',
					fontSize:20,

				},
				labelLine: {
					length: 10,
					lineStyle: {
						width: 1,
						type: 'solid'
					}
				},
				itemStyle: {
					borderColor: '#fff',
					borderWidth: 1
				},
				emphasis: {
					label: {
						fontSize: 25
					}
				},
				data: []
			}
		]
	};
	var JsonxAxis = [];
	// 异步加载数据
	$.get('http://localhost:8080/job-web/funnel').done(function(data) {
		data.forEach(function(element) {
			JsonxAxis.push(JSON.parse(element));
		});
		dataViewoption.series[0].data = JsonxAxis;
		dataViewcharts.clear();
		dataViewcharts.setOption(dataViewoption);
	});
}

/**
 * 
 * 获取福利标签数据生成词云
 */
function cloud(){
	document.getElementById("dataView").className = 'general';
	var dataViewcharts
		=echarts.init(document.getElementById('dataView'));
		var dataViewoption = {
			    title: {
			        text: '菜品评价',
			        x: 'center',
			        textStyle: {
			            fontSize: 23,
			            color:'#FFFFFF'
			        }
			    },
			    tooltip: {
			        show: true
			    },
			    series: [{
			        name: '菜品评价',
			        type: 'wordCloud',
			        sizeRange: [6, 66],
			        rotationRange: [-45, 90],
			        textPadding: 0,
			        autoSize: {
			            enable: true,
			            minSize: 6
			        },
			        textStyle: {
			            normal: {
			                color: function() {
			                    return 'rgb(' + [
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160)
			                    ].join(',') + ')';
			                }
			            },
			            emphasis: {
			                shadowBlur: 10,
			                shadowColor: '#333'
			            }
			        },
			        data: []
			    }]
			};
	var JosnList = [];
	
	// 异步加载数据
	$.get('http://localhost:8080/job-web/cloud').done(function(data) {
		data.forEach(function(element) {
			JosnList.push(JSON.parse(element));
			});
		dataViewoption.series[0].data = JosnList;
		dataViewcharts.clear();
		dataViewcharts.setOption(dataViewoption);
	});	
}
/**
 * 
 * 获取技能标签数据生成词云
 */
function kill(){
	document.getElementById("dataView").className = 'general';
	var dataViewcharts
		=echarts.init(document.getElementById('dataView'));
		var dataViewoption = {
			    title: {
			        text: '技能标签分析',
			        x: 'center',
			        textStyle: {
			            fontSize: 23,
			            color:'#FFFFFF'
			        }
			    },
			    tooltip: {
			        show: true
			    },
			    series: [{
			        name: '技能标签分析',
			        type: 'wordCloud',
			        sizeRange: [6, 66],
			        rotationRange: [-45, 90],
			        textPadding: 0,
			        autoSize: {
			            enable: true,
			            minSize: 6
			        },
			        textStyle: {
			            normal: {
			                color: function() {
			                    return 'rgb(' + [
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160)
			                    ].join(',') + ')';
			                }
			            },
			            emphasis: {
			                shadowBlur: 10,
			                shadowColor: '#333'
			            }
			        },
			        data: []
			    }]
			};
	var JosnList = [];
	
	// 异步加载数据
	$.get('http://localhost:8080/job-web/kill').done(function(data) {
		data.forEach(function(element) {
			JosnList.push(JSON.parse(element));
			});
		dataViewoption.series[0].data = JosnList;
		dataViewcharts.clear();
		dataViewcharts.setOption(dataViewoption);
	});	
}

// function meal(){
// 	document.getElementById("dataView").className = 'general';
// 	var dataViewcharts
// 		=echarts.init(document.getElementById('dataView'));
// 	var	option = {
// 		title: {
// 			text: 'Funnel'
// 		},
// 		tooltip: {
// 			trigger: 'item',
// 			formatter: '{a} <br/>{b} : {c}%'
// 		},
// 		toolbox: {
// 			feature: {
// 				dataView: { readOnly: false },
// 				restore: {},
// 				saveAsImage: {}
// 			}
// 		},
// 		legend: {
// 			data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
// 		},
// 		series: [
// 			{
// 				name: 'Funnel',
// 				type: 'funnel',
// 				left: '10%',
// 				top: 60,
// 				bottom: 60,
// 				width: '80%',
// 				min: 0,
// 				max: 100,
// 				minSize: '0%',
// 				maxSize: '100%',
// 				sort: 'descending',
// 				gap: 2,
// 				label: {
// 					show: true,
// 					position: 'inside'
// 				},
// 				labelLine: {
// 					length: 10,
// 					lineStyle: {
// 						width: 1,
// 						type: 'solid'
// 					}
// 				},
// 				itemStyle: {
// 					borderColor: '#fff',
// 					borderWidth: 1
// 				},
// 				emphasis: {
// 					label: {
// 						fontSize: 20
// 					}
// 				},
// 				data: [
// 					{ value: 60, name: 'Visit' },
// 					{ value: 40, name: 'Inquiry' },
// 					{ value: 20, name: 'Order' },
// 					{ value: 80, name: 'Click' },
// 					{ value: 100, name: 'Show' }
// 				]
// 			}
// 		]
//
// };
// 	var JosnList = [];
//
// 	// 异步加载数据
// 	$.get('http://localhost:8080/job-web/meal').done(function(data) {
// 		data.forEach(function(element) {
// 			JosnList.push(JSON.parse(element));
// 		});
// 		dataViewoption.series[0].data = JosnList;
// 		dataViewcharts.clear();
// 		dataViewcharts.setOption(dataViewoption);
// 	});
// }

// //登录按钮
// function login() {
// 	var account = $("#account").val();
// 	var password = $("#password").val();
//
// 	//var status = $("input[name='remenber']:checked").val();//身份
// 	if(account=="") {
// 		$.messager.alert('温馨提示','请输入账号');
// 		return false;
// 	}else if(password=="") {
// 		$.messager.alert('温馨提示','请输入密码');
// 		return false;
// 	}
// 	var data = {    "account":account,
// 		"password":password,
// 		"status":status,
// 	};
// 	$.ajax({
// 		url: "login.action",
// 		type: "post",
// 		data: JSON.stringify(data),
// 		contentType:"application/json",
// 		dataType: "json",
// 		success: function (data) {
// 			var json = eval(data);//json为接收的后台返回的数据；
// 			if(json.msg=="null"||json.msg=="no") {
// 				$.messager.alert('温馨提示','输入正确的账号密码');
// 			} else if (json.msg=="studentYes") {
// 				window.location.href="../html/student.html";
// 			} else if (json.msg=="teacherYes") {
// 				window.location.href="../html/teacher.html";
// 			}
// 		},
// 		error: function () {
// 			alert("error");
// 		}
// 	});
// }
