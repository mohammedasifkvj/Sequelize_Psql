import express from 'express';
import { connection } from './database/postgres.js';
import router from './view/router.js';
import cors from 'cors'
import dotenv from 'dotenv';

const app=express();

dotenv.config();


const port=process.env.PORT || 8000;

connection();
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})