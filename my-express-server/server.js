//jshint esversion:6

const { response } = require('express');
const express = require('express');
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World...!</h1>");
});

app.get("/contact", function(request, response){
    response.send("<h1>contact me at:sagarbank74@gmail.com</h1>");
});

app.get("/about", function(request, response){
    response.send("<h1>Hello...! My name is Sagar Bank</h1> <br> <h4>This is My About Page </h4>");
});


app.listen(3000, function() {
    console.log("Server started...");
});
