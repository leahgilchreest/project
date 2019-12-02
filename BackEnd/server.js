// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB ='mongodb+srv://admin:admin@cluster0-ku2kj.mongodb.net/grocery?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  Name:String,
  Breed:String,
  Colour:String,
});

const DogModel = mongoose.model('dog',dogSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.put('/api/dogs/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  DogModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})


app.get('/api/dogs', (req,res,next) => {

  console.log("get request")
  DogModel.find((err,data)=>{
    res.json({dogs:data});
  })
})




app.delete('/api/dogs/:id', (req,res) =>{
  console.log(req.params.id);

  DogModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
     
    res.json(data);
  })
})




app.post('/api/dogs', (req,res) =>{
console.log('post Successfull');
console.log(req.body)
console.log(req.body.Name);
console.log(req.body.Breed);
console.log(req.body.Colour);



DogModel.create({
  Name: req.body.Name,
  Breed: req.body.Breed,
  Colour: req.body.Colour

});
res.json('data uploaded')

})

app.get('/api/dogs/:id',(req,res)=>{
  console.log(req.params.id);

  DogModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})



app.listen(PORT, () => 
console.log(`Example app listening on port ${PORT}!`))
