var http = require("http");          
var url = require('url');           
var fs = require('fs');
var count = 0;	//统计接口请求次数
http.createServer(function(request,response){
	response.writeHead(200,{"contest-type":"text/plan"})
	var params = url.parse(request.url, true).query;
	var callback = params.callback;
	var portname = url.parse(request.url, true).pathname;
	if(portname == "/ranking/"){
		fs.readFile('ranking.json', (err, data) => {
			// 响应前端jsonp请求
			response.end(callback + "(" + data + ")");	
			//command line 端信息
			console.log(++count + "次请求处理成功，请求参数：" + JSON.stringify(params));
			console.log("--------------------------------------------------------");
		})
	}
	if(portname == "/adv/"){
		fs.readFile('data.json', (err, data) => {
			// 响应前端jsonp请求
			response.end(callback + "(" + data + ")");	
			//command line 端信息
			console.log(++count + "次请求处理成功，请求参数：" + JSON.stringify(params));
			console.log("--------------------------------------------------------");
		})
	}
}).listen(81)
