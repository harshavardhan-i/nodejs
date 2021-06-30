// Express.js is a frame work for node.
// Node is a low level language, interacts with computer hardware direclty.
// Express.js is node is like jQuery is to Javascript

// Steps to run express.js:
// Create new directory and add new JS file.
// Run npm init 
// Run npm install express --save

// Creating server:
const express = require('express');

const app = express();

// Handling requests:
// Get: request and response example.
// First argument of get is the route and second argument is callback.
// Callaback takes two params - request and response.
// Below is the root url.
app.get('/', function(req, res){
    // console.log(req);
    res.send("<h1>Hello World!</h1>");
});

// Contact url:
app.get('/contact', function(req, res){ 
    res.send("Contact: test.email.com");
});

// About url:
app.get('/about', function(req, res){ 
    res.send("I'm Harsh, nice to meet you.");
});

// Listen at a specific port, ports are like radio channels.
// Port is ready, a get request handler needs to be set.
// Install nodemon - detects changes in file and restarts server.
app.listen(3000, function(){
    console.log("Server listening at 3000");
});


