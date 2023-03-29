const fs=require('fs');

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

module.exports=CREATE