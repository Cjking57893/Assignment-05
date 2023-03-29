const fs=require('fs');
const url=require('url');

function READ(){
	console.log("GET is working");

    let url_components=url.parse(req.url,true);
    console.log(url_components);
}

module.exports=READ