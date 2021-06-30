// Express.js is a frame work for node.
// Node is a low level language, interacts with computer hardware direclty.
// Express.js is node is like jQuery is to Javascript

// Creating server:
const express = require('express');

const app = express();

// Handling requests:
// Get: request and response example.
app.get('/', function(req, res){
    console.log(req);
    res.send("Hello World!");
});

// Listen at a specific port, ports are like radio channels.
// Port is ready, a get request handler needs to be set.
app.listen(3000, function(){
    console.log("Server listening at 3000");
});


