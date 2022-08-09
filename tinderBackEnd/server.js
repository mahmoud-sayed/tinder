import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from 'cors';


//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_URL = 'mongodb+srv://admin:01TYM261KX74PDkx@cluster0.4njoqem.mongodb.net/tinder?retryWrites=true&w=majority';

// middleWears
app.use(express.json());

app.use(cors());


//DB config
mongoose.connect(connection_URL);


//API End points
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder/cards', (req, res) => {

  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => { console.log(`listening to local host port number${port}`); });