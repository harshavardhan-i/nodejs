// npm install express body-parser request:
//      Installs multiple modules at once.
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request"); 
const https = require("https");

app = express();

// Node does not serve local static file like images, CSS etc. on it's own.
// A folder needs to be specified to store and retrieve thos files.
// Express static helps in this case.
app.use(express.static("public"));
// body parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.post('/', function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);    
    // res.send(req.body);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/lists/a94a225681";

    const options = {
        method: 'POST',
        auth: 'anytext:cc921e47d6033249298771975bd79c58-us6'
    };
    // HTTPS request method:
    const request = https.request(url, options, function(response){
        
        if(response.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
        } else {
            res.sendFile(__dirname+"/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    // Execute request and end:
    request.write(jsonData);
    request.end();

});

// Redirect:
app.post("/failure", function(req, res){
    res.redirect("/");
});


// Port:
// Locally we can specify port numbers, but hosting services like heroku
// sets them dynamically.
// To support this we add another argument 'process.env.PORT'.
// Doing so will run it both locally and on servers.
app.listen(process.env.PORT || 3000, function(){
    console.log("Server listening at port 3000");
});

// Heroku hosting:
// Setup heroku cli.
// Setup ports.
// Setup Procfile and add web: node app.js
// Run cmd: heroku create



