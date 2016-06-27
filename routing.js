 var http = require("http");
   var url = require("url");
   var route = {
     routes : {},
     for: function(method, path, handler){
       this.routes[method + path] = handler;
     }
}

 route.for("GET", "/start", function(request, response){
       response.writeHead(200, {"Content-Type": "text/plain"});
       response.write("Hello");
       response.end();
});

route.for("GET", "/finish", function(request, response){
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Goodbye");
      response.end();
});
route.for("POST", "/echo", function(request, response){
       var incoming = "";
       request.on('data', function(chunk) {
         incoming += chunk.toString();
       });
        request.on('end', function(){
         response.writeHead(200, {"Content-Type": "text/plain"});
         response.write(incoming);
         response.end();
       });
});

     route.for("GET", "/echo", function(request, response){
       var body = '<html>' +
       '<head><title>Node.js Echo</title></head>' +
       '<body>' +
       '<form method="POST">' +
       '<input type="text" name="msg"/>' +
       '<input type="submit" value="echo"/>' +
       '</form>' +
       '</body></html>';
       response.writeHead(200, {"Content-Type": "text/html"});
       response.write(body);
       response.end();
});
function onRequest(request, response) {
     var pathname = url.parse(request.url).pathname;
     console.log("Request for " + request.method + pathname + " received.");
if(typeof(route.routes[request.method +
    pathname])==='function'){
       route.routes[request.method + pathname](request, response);
     }else{
       response.writeHead(404, {"Content-Type": "text/plain"});
       response.end("404 Not Found");
     }
}
   http.createServer(onRequest).listen(9999);
   console.log("Server has started.");
////////////////////////////////////SECOND APPROACH/////////////////////////////////

//     var http = require("http");
//    var url = require("url");
//    var route = {
//      routes : {},
//      on: function(path, handler){
//        this.routes[path] = handler;
//      }
// };
//      route.on("/start", function(request, response){
//        response.writeHead(200, {"Content-Type": "text/plain"});
//        response.write("Hello");
//        response.end();
// });
//      route.on("/finish", function(request, response){
//        response.writeHead(200, {"Content-Type": "text/plain"});
//        response.write("Goodbye");
//        response.end();
// });
//   route.on("/newpath", function(request, response){
//        response.writeHead(200, {"Content-Type": "text/plain"});
//        response.write("new response");
//        response.end();
// });
//
//    function onRequest(request, response) {
//      var pathname = url.parse(request.url).pathname;
//      console.log("Request for " + pathname + " received.");
//      if(typeof route.routes[pathname] ==='function'){
//        route.routes[pathname](request, response);//i cant understand this line
//      }else{
//        response.writeHead(404, {"Content-Type": "text/plain"});
//        response.end("404 Not Found");
//      }
// }
//    http.createServer(onRequest).listen(9999);
//    console.log("Server has started.");



////////////////////////////////////FIRST APPROACH/////////////////////////////////
// var http = require("http");
//    var url = require("url");
//    function onRequest(request, response) {
//      var pathname = url.parse(request.url).pathname;
//      console.log("Request for " + pathname + " received.");
//      if(pathname === "/start"){
//        response.writeHead(200, {"Content-Type": "text/html"});
//        response.write("<html>");
//        response.write("<head><title>Node.js</title></head>");
//        response.write("<body><h1>Hello Routing</h1></body>");
//        response.write("</html>");
//        response.end();
//      }else if(pathname === "/finish"){
//        response.writeHead(200, {"Content-Type": "text/html"});
//        response.write("<html>");
//        response.write("<head><title>Node.js</title></head>");
//        response.write("<body>Good Bye</body>");
//        response.write("</html>");
//        response.end();
//  }else{
//        response.writeHead(404, {"Content-Type": "text/plain"});
//        response.end("404 Not Found");
//      }
// }
//    http.createServer(onRequest).listen(9999);
//    console.log("Server has started.");
