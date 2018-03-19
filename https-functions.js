var https = require('https');

module.exports = function getAndPrintHTML (options, callback) {

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
