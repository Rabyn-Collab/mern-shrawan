import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mongoose from "mongoose";
import cors from "cors";
const port = 5000;
import cors from 'cors';

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://kunwarmandip3:admin@cluster0.ngq19.mongodb.net/Shops').then((val) => {
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});




app.use(express.json());
app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);




