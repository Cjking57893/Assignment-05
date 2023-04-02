const fs=require('fs');
const url=require('url');

function EDIT(req, res){
	let url_components=url.parse(req.url,true);
	let myFile = url_components.pathname.split('/')[3];

	// Checking if file exist from id given by user.
	if (fs.existsSync(`./data/${myFile}.json`)) {
		//take body of the request and store it in the file
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
				fs.writeFileSync(`./data/${myFile}.json`,body);

				//respond success message
				res.statusCode = 200;
				res.end(body);
			}
			catch {
				// Responding with 400 status code and invalid message if JSON invalid.
				res.statusCode = 400;
				res.end("Invalid JSON.");
			}
		});
	}
	else {
		// Returning 404 status code and ending response if file does not exist.
		res.statusCode = 404;
		res.end("File associated with that ID does not exist.");
	}
}

module.exports=EDIT