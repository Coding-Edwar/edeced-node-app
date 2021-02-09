import express from 'express';
import { info } from './info.mjs';


const PORT = 5000;
const app = express();

app.get('/edeced', (req, res) => res.send(info) );

app.listen('5000', () => {
    console.log(`app starts now on ${PORT}`)
});