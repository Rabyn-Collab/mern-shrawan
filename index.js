import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
const port = 5000;
import cors from 'cors';

const app = express();
<<<<<<< HEAD
app.use(cors());

<<<<<<< HEAD
mongoose.connect('mongodb+srv://kunwarmandip3:admin@cluster0.ngq19.mongodb.net/Shops').then((val) => {
=======
=======
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser());
>>>>>>> 6e1b9dc2ced48ff48013fd8e2e763c3b60911d42
  app.use(express.json());
  app.use(express.static('uploads'));


  app.use(fileUpload({
    // limits: { fileSize: 5 * 1024 * 1024 },
  }));

  mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/Shops').then((val) => {
<<<<<<< HEAD
>>>>>>> 5b5d0e4fa3f6134f14c1e125c8f3c344659922be
    app.listen(port, () => {
      console.log('listening and connected');
    });
=======

>>>>>>> 6e1b9dc2ced48ff48013fd8e2e763c3b60911d42
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

