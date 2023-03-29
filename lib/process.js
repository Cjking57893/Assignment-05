const { time } = require('console');
const fs=require('fs');
const url=require('url');

function process(req,res){
	// //Obtain request method
	//    console.log(req.method);
	
	// //Parse the components of the URL
	// let url_components=url.parse(req.url,true);
	// console.log(url_components);
	// console.log(url_components.pathname.split('/'));
	
	//Obtain the current timestamp (why do we need this?)
	const currentDate=new Date();
	const timestamp=currentDate.getTime();
	
	
	// //Write something in the header of the response
	// res.writeHead(200,{'Content-Type':'application/json'});
	// res.writeHead(200,{'Current-timestamp':timestamp});
	
	// //Write something in the body of the response
	// res.write('x');
	
	//Process the body of the request
	// var body=[];
	// req.on('data',(chunk)=>{
	// 	body.push(chunk);
	// }).on('end',()=>{
	// 	body=Buffer.concat(body).toString();
	// 	console.log(body);
	// });
	
	// // Check if a file exists
	// let myfile='file.json';
	// console.log(fs.existsSync(`./data/${myfile}`));
	
	
	// Write to a file
	let my_other_file=`${timestamp}.json`;
	// // fs.writeFileSync(`./data/${my_other_file}`,timestamp+'');
	
	
	// // Read data from a file
	// //console.log(fs.readFileSync(`./data/${my_other_file}`,'utf8'));
	
	// //Encode a javascript data type into JSON
	// const javascript_object={
	// 	artist:'Rednex',
	// 	title:'Cotton Eye Joe',
	// 	url_video:'https://youtu.be/HAlspX_kjL4'
	// };
	// let json_string=JSON.stringify(javascript_object);
	// console.log(json_string);
	
	// //Convert a JSON string into javascript
	// let javascript_object_again=JSON.parse(json_string);
	// console.log(javascript_object_again);

	switch(req.method){
		case 'GET' : READ(); break;
		case 'POST': CREATE(my_other_file, timestamp, req, res); break;
		case 'PUT' : EDIT(); break;
		case 'DELETE' : DELETE(); break;
	  }
}

function READ(){
	console.log("GET is working");
}

function CREATE(my_other_file, timestamp, req, res){
	console.log("POST is working");

	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
	}).on('end',()=>{
		// Converting body of request to string.
		body=Buffer.concat(body).toString();
		// Create new json file and write body of request to it.
		fs.writeFileSync(`./data/${my_other_file}`,body);
		// Writing body to end of response.
		res.end(body);
	});

	res.setHeader("Location", `https://jsonblob.com/api/jsonBlob/${timestamp}`);
	res.statusCode = 201;
}

function EDIT(){
	console.log('PUT is working');
}

function DELETE(){
	console.log('DELETE is working');
}

module.exports=process