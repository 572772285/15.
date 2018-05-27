var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
	res.setHeader('Access-Control-Allow-headers','text');
	var pathFile='./'+req.url;
	fs.readFile(pathFile,function(err,data){
		if(err){
			res.statusCode=404;
			res.end('错误文件')
		}else{
			res.statusCode=200;
			res.end(data);
		}
	})
	// res.end('<h1>hello,liu,你好....</h>');
});
server.listen(3000,'127.0.0.1',function(){
	console.log('server')
});