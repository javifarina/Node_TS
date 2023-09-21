import express, { Express,Request, Response } from "express";
import dotenv from 'dotenv'

//Configuration the .env file
dotenv.config();

//Create Express APP
const app:Express =express();
const port:string | number = process.env.PORT || 8000;

//Define the firt Route of APP
app.get('/',(req:Request, res:Response) =>{
    //Send Hello World
    res.send('APP Express  API RestFUll + nodemon +  any TS + Swagger + MongoDB')
});

app.get('/hello',(req:Request, res:Response) =>{
    //Send Hello World
    res.send('Welcome to GET Route : ¡Hello!')
});


// Execute APP and Listen Request to PORT ${PORT}
app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
}); 