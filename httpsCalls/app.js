// https: A native/internal module within node to make http call to api
https = require("https");
// External module.
express = require("express");
bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// We cannot have multiple send methods.
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    console.log("Post request received.");
    // res.send(req.body);
    const query = req.body.cityName;
    const apiKey = "75cd5bbcaade56aa330b1043d63f76d1";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
    // Get call:
    https.get(url, function (response) {
        // Status code: 100, 200, 300 etc
        // Tells us about the status of the call made.
        console.log(response.statusCode);
        console.log(response.headers);

        // Data body:
        // Since response is spelt out fully, to focus on data we use 'on'.
        response.on("data", function (data) {
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
                name: "Lee",
                favouriteFood: "Ramen"
            };
            console.log(JSON.stringify(object));

            // Get ICON -
            const iconId = weatherData.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconId}.png`;

            // Write res and then send:
            res.write("<p>The weather is curretly " + weatherDescriptoin + "</p>");
            res.write(`<h1>The temprature in ${query} is ${temp} degrees Celcius.</h1>`);
            res.write(`<img src=${iconURL} alt="icon-img"/>`);
            res.send();
        })
    })
    // Cannot have two sends in a single get listener.
    // res.send("Server is up and running");
})


app.listen(3000, function (req, res) {
    console.log('Server listening at port 3000');
})