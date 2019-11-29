// server.js

const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path')
const bodyParser = require("body-parser");
const mongoose =  require ("mongoose");


const mongoDB = 'mongodb+srv://admin:admin@leah-lel76.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

const MovieModel = mongoose.model('movie',movieSchema);

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello/:Name',(req, res) => {
    console.log(req.params.Name);
    res.send('GoodMorning! '  +  req.params.Name)
})

    app.put('/api/movies/:id',(req,res)=>{
        console.log("edit" +req.params.id);
        console.log(req.body);
        MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,data)=>{
            res.send(data);
        })
    })

app.get('/Name', (req, res) => {
    console.log('route calling');
    console.log(req.query.firstname);

    res.send('hello ' + req.query.lastname + ' ' + req.query.firstname)
})

app.get('/whatever', (req, res) => res.send('GoodBye!'))

app.get ('/test', (req, res) =>{
res.sendFile(path.join(__dirname + '/index.html'))
})


app.get('/api/movies', (req, res,next) => {
 
    console.log ("get request") 
    MovieModel.find((err,data) =>{
        res.json({movie:data});
    })   
    })

    app.delete('/api/movies/:id', (req,res) =>{
console.log(req.params.id);

MovieModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
    res.json(error);
        res.json(data);
})
})

app.post('/api/movies', (req,res) =>{
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);


    DriverModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    });

        res.json('data uploaded');

    })
 

app.post('/name', (req, res) => {
    console.log("post method");
    console.log(req.body.firstname);
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
    })
    
app.get('/api/movies/:id',(req,res)=>{
    console.log(req.params.id);

    MovieModel.findById(req.params.id ,(err,data)=>{
  res.json(data);
    })
})

app.listen(PORT, () => 
console.log(`Example app listening on port ${PORT}!`))