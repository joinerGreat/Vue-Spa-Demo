<?php
// 接收客户端输入的用户名和密码，验证是否正确，向客户端输出cunzai或者bucunzai
header("Content-Type:text/plain;charset=UTF-8");
// 接收数据 userName和password
$userName = $_REQUEST['user'];
$password = $_REQUEST['password'];
// 连接数据库
echo 'end'