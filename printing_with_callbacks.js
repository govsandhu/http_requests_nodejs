var http = require('https')


function getHTML (options, callback) {

  http.get(requestOptions, function (response) {
  var bufferedData = "";
  response.on('data', function (data) {
      bufferedData += data
 })

  response.on('end', function() {
    callback(bufferedData);
  })
});

}

function printHTML (html) {
  console.log(html);
}

function printHTMLUppercase (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)