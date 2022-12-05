const Subscribers=require("./models/subscribers");
const express = require('express');
const app = express()


// Get response with an array of subscribers(an Object)

app.get("/subscribers", (req, res) => { 
    Subscribers 
      .find(subscribers) 
      .then((data) => { 
        res.json(data); 
      }) 
      .catch((err) => { 
        console.log(err); 
      }); 
  });

// Get response with an array of subscribers(an Object with only two fields name and subscribedChannel)

  app.get("/subscribers/names", (req, res) => { 
        Subscribers 
            .find({}).select('_name _subscribedChannel')
            .then((data) => { 
            res.json(data); 
          }) 
          .catch((err) => { 
            console.log(err); 
          }); 
      });

    // Get response with a subscriber *(an object)* with given id

      app.get('/subscribers/:id', (req, res, next) => {
          const _id = req.params.id
          const data = Subscribers.findById(_id)

          if(data){
            res.json(data)
            next()
          } else {
            res.status(400).json({message: "error-message"})
          }
             
        } 
          
      )




















module.exports = app;
