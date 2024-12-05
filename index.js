import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
const port = 5000;
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://mern-shrawan.vercel.app'],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('uploads'));


app.use(fileUpload({
  // limits: { fileSize: 5 * 1024 * 1024 },
}));

mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/Shops').then((val) => {

}).catch((err) => {
  console.log(err);
});


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to Shop' });
});



app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.listen(port, () => {
  console.log('listening and connected');
});

