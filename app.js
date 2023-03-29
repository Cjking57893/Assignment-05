const http=require('http');
const server=http.createServer().listen(48090);
const process=require('./lib/process.js');

server.on('request',async(req,res)=>{
	process(req,res);
});
