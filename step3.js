function getAndPrintHTML (options) {
  var https = require('https');

  https.get(options, function(response){
    var buffer = "";
    response.setEncoding('utf8');

    response.on('data', function(chunk){
      buffer += chunk;
    })

    response.on('end', function(){
      console.log(buffer);
    })
  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);
