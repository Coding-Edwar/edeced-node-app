import express from 'express';
import { info } from './info.mjs';


const PORT = 3333;
const app = express();

app.get('/edeced', (req, res) => res.send(info) );

app.listen('3333', () => {
    console.log(`app starts now on ${PORT}`)
});