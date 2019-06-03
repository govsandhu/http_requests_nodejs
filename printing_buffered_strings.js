var http = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


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
getAndPrintHTML();