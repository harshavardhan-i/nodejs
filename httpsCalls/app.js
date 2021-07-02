express = require("express");
// Using https, a native module within node to make http call to api
https = require("https");

app = express();


app.get('/', function(req, res){

    // Get call:
    const url = "https://api.openweathermap.org/data/2.5/weather?q=bhilai&appid=75cd5bbcaade56aa330b1043d63f76d1";
    https.get(url, function(response){
        // Status code: 100, 200, 300 etc
        // Tells us about the status of the call made.
        console.log(response.statusCode);

        // Data body:
        response.on("data", function(data){
            // Response in Hexadecimal code.
            console.log(data);
            // Parsing hex data into Javascript object.
            const weatherData = JSON.parse(data);
            const temp = JSON.parse(weatherData.main.temp);
            const weatherDescriptoin = weatherData.weather[0].description;
            console.log(weatherData);
            console.log(temp);
            console.log(weatherDescriptoin);


            // JSON stringify: Converst JS object into string.
            const object = {
                name: "Angela",
                favouriteFood: "Ramen"
            };
            console.log(JSON.stringify(object));
        })
    })

    res.send("Server is up and running");
})


app.listen(3000, function(req, res){
    console.log('Server listening at port 3000');
})