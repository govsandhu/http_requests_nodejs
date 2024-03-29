var http = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function(response) {
    response.on('data', function (chunk) {
      console.log(chunk + "\n")
    })
  })

}

getAndPrintHTMLChunks();




//Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
// You can use the example above as a reference or template.
// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.