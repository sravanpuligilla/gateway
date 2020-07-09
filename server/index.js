
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

//Import the mongoose module
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const Message = require("./models/messages");

app.listen(8009, () => {
 console.log('server started on port 5000');
});

app.get('/message', (req, res) => {
    
    Message.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            console.log(result[0].dispalyMessage);
          res.send(result[0].dispalyMessage);
        }
      }).sort({_id:-1}).limit(1);
    
});

   app.post('/message', (req, res) => {
  
        Message.create({
            dispalyMessage: "Display Message from Node Api",
    }, function (err, result) {
      if (err) {
        res.send(err);
      } else {
          console.log(result);
          res.send(result);
      }
    });

   })


