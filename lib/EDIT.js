const fs=require('fs');
const url=require('url');

function EDIT(req, res){
	console.log('PUT is working');

	let url_components=url.parse(req.url,true);
	console.log(url_components);
	console.log(url_components.pathname.split('/'));
	
	let myFile = url_components.pathname.split('/')[3];
	//check if the file exists
	console.log(fs.existsSync(`./data/${myFile}.json`));
}

module.exports=EDIT