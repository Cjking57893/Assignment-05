const fs=require('fs');

function CREATE(my_other_file, timestamp, req, res){
	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
	}).on('end',()=>{
		// Converting body of request to string.
		body=Buffer.concat(body).toString();
		
		try {
			// Testing if JSON is valid.
			JSON.parse(body);
			// Create new json file and write body of request to it.
			fs.writeFileSync(`./data/${my_other_file}`,body);
			// Setting location header to appropriate url and responding with 201 status code.
			res.setHeader("Location", `https://jsonblob.com/api/jsonBlob/${timestamp}`);
			res.statusCode = 201;
			// Writing body to end of response.
			res.end(body);
		}
		catch {
			// Responding with 400 status code and invalid message if JSON invalid.
			res.statusCode = 400;
			res.end("Invalid JSON.");
		}
	});
}

module.exports=CREATE