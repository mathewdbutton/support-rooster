let staticServer = require('node-static');
let file = new staticServer.Server();
require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);