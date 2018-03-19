function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function(response){
    var buffer = "";
    response.setEncoding('utf8');

    response.on('data', function(chunk){
      buffer += chunk;
    })

    response.on('end', function(){
      callback(buffer);
    })
  });


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);
