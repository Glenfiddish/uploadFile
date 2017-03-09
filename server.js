var http = require('http');
var url = require('url');

function start(route, handle){
  function onRequest(req,res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname !== '/favicon.ico'){
      console.log('Now you about to request ' + pathname );
      var postData = "";
      req.setEncoding('utf8');
      req.addListener("data",function(uploadData){
        postData += uploadData;
        console.log("Receive POST data chunk" + uploadData);
      });
      req.addListener('end',function(){
        console.log('end');
      })
      res.writeHead(200,{'Content-Type': 'text/plain'});
      res.end(pathname);
    }
  }

  http.createServer(onRequest).listen(1008, function(){
    console.log('Server is starting on port 1008')
  })
}

start();
