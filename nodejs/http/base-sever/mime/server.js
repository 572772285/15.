const fs=require('fs');
const path=require('path');
const http=require('http');
const mime=require('./mime.json');

const server=http.createServer((req,res)=>{
	let fileName=req.url;
	if(fileName.lastIndexOf('.')==-1){
		fileName=fileName+'/index.html';
		// console.log(fileName);

	}
	let filePath=path.normalize(__dirname+fileName);
	let fileExtName=path.extname(filePath);
	// console.log(fileExtName);
	// let filePath=mimefileExtName
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			res.setHeader('Content-Type',mime[fileExtName]+';charset=UTF-8');
			res.end(data);
		}else{
			console.log(err);
			console.log('<h1>Not Found!!</h1>')
		}
	})
	
	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in the 127.0.0.1:3000');
})