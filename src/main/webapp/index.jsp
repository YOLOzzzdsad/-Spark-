<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">/>
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/echarts.min.js"></script>
<script src="js/echarts-wordcloud.js"></script>
<script src="js/china.js"></script>
<link rel="stylesheet" href="css/style.css">
<title>基于Spark的餐饮平台菜品智能分析推荐系统</title>
</head>
<body>
<nav>
	<div class="menu-btn">
		<div class="line line--1"></div>
		<div class="line line--2"></div>
		<div class="line line--3"></div>
	</div>

	<div class="nav-links">
		<a href="login.jsp" class="link" onclick="">首页</a>
		<a href="javascript:cloud();" class="link">菜品评价词频</a>
		<a href="javascript:pie();" class="link">菜品评分统计</a>
		<a href="javascript:funnel();" class="link">菜品累积评分</a>

	</div>
</nav>
<div class="inform" id="dataView">
	基于Spark的餐饮平台菜品智能分析推荐系统
</div>
<script src="js/index.js"></script>
<script src="js/echarts-view.js" type="text/javascript"></script>
</body>
</html>