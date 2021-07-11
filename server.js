const express = require('express');
const server = express();

server.get('/', function (request, response) {
    console.log(request.query.query1);
    // console.log(request.query);
    console.log(request.query.param2);
    //----- READ headers----
    console.log(request.headers);
    response.send('Hello world');
})

server.listen(3000, function () {
    console.log('server started..');
})


