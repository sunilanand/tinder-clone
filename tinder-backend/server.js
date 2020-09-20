import express from 'express';
import mongoose from 'mongoose';
import Cors from'cors';
import Cards from './dbCards.js';


// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:G2bcs7pPzHXgKZ93@clustertinderclone.maaie.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API Endpoints
app.get('/', (req,res) => res.status(200).send("Hello Sunil!!!"));

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

// Listner
app.listen(port, () => console.log(`Listening on localhost: ${port}`));