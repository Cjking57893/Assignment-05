const fs=require('fs');
const url=require('url');

function READ(req, res){
	console.log("GET is working");

    // Getting url components and splitting into array.
    let url_components=url.parse(req.url,true);
    url_components = url_components.pathname.split("/");

    // Getting id from url_components.
    let id = url_components[3];

    // Checking if file exist from id given by user.
    if (fs.existsSync(`./data/${id}.json`)) {
        // Getting data from file that matches id given by user.
        fileData = fs.readFileSync(`./data/${id}.json`,'utf8');
        
        // Returning status code 200 and writing data from file into end of response.
        res.statusCode = 200;
        res.end(fileData);
    }
    else {
        // Returning 404 status code and ending response if file does not exist.
        res.statusCode = 404;
        res.end();
    }
}

module.exports=READ