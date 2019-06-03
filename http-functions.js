function getHTML (options, callback) {
  var http = require('https')
  http.get(options, function (response) {
  var bufferedData = "";
  response.on('data', function (data) {
      bufferedData += data
 })

  response.on('end', function() {
    callback(bufferedData);
  })
});
}

module.exports = getHTML;

// function printHTML (html) {
//   console.log(html);
// }

// getHTML(requestOptions, printHTML)