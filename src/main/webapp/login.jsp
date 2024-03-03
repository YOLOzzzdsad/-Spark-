<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script language="javascript">
    //通过ajax获取text中的值以json格式化传输过去
    $(function () {
        $("#test").click(function () {
            var userList=new Array();
            userList.push({username:$("#username").val(),password:$("#password").val()});
            $.ajax({
                type:"POST",
                url:"${pageContext.request.contextPath}/test",
                data:JSON.stringify(userList),
                contentType:"application/json;charset=utf-8",
                success:function (result) {
                    if(result=="success")
                    {
                        window.location.href="index.jsp"
                        alert("成功！")
                    }
                    else
                    {
                        window.location.href="${pageContext.request.contextPath}/login.jsp"
                    }

                }




            });
        });

    });

</script>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        html {
            height: 100%;
        }
        body {
            height: 100%;
        }
        .container {
            height: 100%;
            background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
        }
        .login-wrapper {
            background-color: #fff;
            width: 358px;
            height: 588px;
            border-radius: 15px;
            padding: 0 50px;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .header {
            font-size: 38px;
            font-weight: bold;
            text-align: center;
            line-height: 200px;
        }
        .input-item {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            border: 0;
            padding: 10px;
            border-bottom: 1px solid rgb(128, 125, 125);
            font-size: 15px;
            outline: none;
        }
        .input-item::placeholder {
            text-transform: uppercase;
        }
        .btn {
            text-align: center;
            padding: 10px;
            width: 100%;
            margin-top: 40px;
            background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
            color: #fff;
        }
        .msg {
            text-align: center;
            line-height: 88px;
        }
        a {
            text-decoration-line: none;
            color: #abc1ee;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="login-wrapper">
        <div class="header">Login</div>
        <div class="login-form",>
            <div class="text">登录</div>
            <div class="form-item">

                <input type="text" placeholder="用户名" name="username" id="username">
                <input type="password" placeholder="密码" name="password" id="password">
            </div>
            <div >
                <button class="btn"  id="test">登录</button>
            </div>


        </div>

    </div>
</div>
</body>
</html>
