var http = require('https');

function getAndPrintHTML (options) {

 http.get(requestOptions, function (response) {
  var bufferedData = "";
  response.on('data', function (data) {
      bufferedData += data
 })

  response.on('end', function() {
    console.log(bufferedData)
  })
});
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);