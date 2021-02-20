const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(req,res){

  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0){

  res.write("<h1>yay its the weekend</h1>")
  res.send()
} else {
  res.sendFile(__dirname + "/index.html")
}

})

app.listen(3000, function(){
  console.log("server started on port 3000")
})
