const fs=require('fs');
const url=require('url');

function EDIT(req, res){
	console.log('PUT is working');

	let url_components=url.parse(req.url,true);
	console.log(url_components);
	console.log(url_components.pathname.split('/'));
	
	//check if the file exists
	let myFile = url_components.pathname.split('/')[3];
	console.log('MYFILE: ' + myFile);
	console.log(fs.existsSync(`./data/${myFile}.json`));

	//read content of the file
	//console.log(fs.readFileSync(`/data/${myFile}`,'utf8'));

	//convert JSON to JavaScript

	//take body of the request and store it in the file

	//respond success message
}

module.exports=EDIT