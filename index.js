import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mongoose from "mongoose";
const port = 5000;

const app = express();

mongoose.connect('mongodb+srv://Rabyn:moles900@cluster0.zeqhj5o.mongodb.net/Shops').then((val) => {
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});




app.use(express.json());
app.use(authRoutes);
app.use(productRoutes);




