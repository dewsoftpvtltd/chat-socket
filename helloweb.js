var http = require("http");
   http.createServer(function(request, response) {
     response.writeHead(200, {"Content-Type": "text/html"});
     response.write("<html>");
     response.write("<head><title>Node.js</title></head>");
     response.write("<body>Hello Web My darling</body>");
     response.write("</html>");
     response.end();
   }).listen(9999, '0.0.0.0');
   console.log('done 9999');
