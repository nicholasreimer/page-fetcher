/* ASSIGNMENT:
Implement a node app called fetcher.js.

It should take two command line arguments:
1.) a URL
2.) a local file path
   EX: > node fetcher.js http://www.example.edu/ ./index.html

-It should download the resource at the URL to the local path on your machine.
-Upon completion, it should print out a message like:
 Downloaded and saved 1235 bytes to ./index.html.
*/

const request = require('request');
const fs = require('fs');

//-------------------------------------------------------------------
// CL INPUT:
// setup interface to handle user input from cl via proccess argv

const URLInput = process.argv[2];
const filePathInput = process.argv[3];

//-------------------------------------------------------------------
// Function:

const fetchURL = function(URLInput, filePathInput) {

  request(URLInput, function(error, response, body) {
    
    fs.writeFile(filePathInput, body, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("file written successfully");
    });
  });
};

fetchURL (URLInput, filePathInput);
