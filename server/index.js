import express from 'express';
import { connection } from './database/postgres.js';

const app=express();

const port=process.env.PORT || 8000;

connection();

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})