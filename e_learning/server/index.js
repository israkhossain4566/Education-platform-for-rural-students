import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

// using middlewares
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });


// importing routes
import userRoutes from './routes/user.js';


// using routes
app.use('/api', userRoutes);

app.listen(5000, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
});