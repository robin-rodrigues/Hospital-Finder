require('dotenv').config()

var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose')
  
let PORT = process.env.PORT || 3000;      
let Hospital = require('./models/hospital');
var HospitalRoutes      = require("./routes/hospital");    
let data;

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(HospitalRoutes); 

mongoose
.connect("mongodb+srv://Rushikesh:JoS27NVgG2UW38jq@cluster0-bui4j.mongodb.net/hospitals?retryWrites=true&w=majority" ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
  app.listen(PORT,function(){
    console.log(" Server has started");
  })
})
.catch(err => {
  console.log(err);
})



// var request = require('request');
// request('https://api.data.gov.in/resource/7d208ae4-5d65-47ec-8cb8-2a7a7ac89f8c?api-key=579b464db66ec23bdd000001f077a08693744af45571d594ff223f1d&format=json&offset=0&limit=1000', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   data = JSON.parse(body)
//   // console.log('body:',data.records); // Print the HTML for the Google homepage.
// });



   



