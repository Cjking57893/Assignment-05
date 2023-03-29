const fs=require('fs');
const url=require('url');

function DELETE(req, res){
	console.log('DELETE is working');

	// Getting url components and splitting into array.
    let url_components=url.parse(req.url,true);
    url_components = url_components.pathname.split("/");

    // Getting id from url_components.
    let id = url_components[3];

	if (fs.existsSync(`./data/${id}.json`)) {
        // Delete the file that matches id given by user.
        fs.unlink(`./data/${id}.json`, (err) => {
			if (err) throw err;
			console.log('deleted');
		});

        // Returning status code 200 and writing data from file into end of response.
        res.statusCode = 200;
        res.end();
    }
    else {
        // Returning 404 status code and ending response if file does not exist.
        res.statusCode = 404;
        res.end();
    }

}

module.exports=DELETE