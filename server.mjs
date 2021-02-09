import express from 'express';
import { info } from './info.mjs';
import { home } from './home.mjs';


const PORT = 5000;
const app = express();

// route & callback
app.get ('/', (req, res) => res.send(home) );
app.get ('/id', (req, res) => {
    res.send({
        id: Math.random()
    })
});
app.get('/edeced', (req, res) => res.send(info) );

app.listen('5000', () => {
    console.log(`app starts now on ${PORT}`)
});