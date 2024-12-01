import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mongoose from "mongoose";
<<<<<<< HEAD
import cors from "cors";
=======
import fileUpload from "express-fileupload";
>>>>>>> 5b5d0e4fa3f6134f14c1e125c8f3c344659922be
const port = 5000;
import cors from 'cors';

const app = express();
app.use(cors());

<<<<<<< HEAD
mongoose.connect('mongodb+srv://kunwarmandip3:admin@cluster0.ngq19.mongodb.net/Shops').then((val) => {
=======
app.use(express.json());


app.use(fileUpload({
  // limits: { fileSize: 5 * 1024 * 1024 },
}));

mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/Shops').then((val) => {
>>>>>>> 5b5d0e4fa3f6134f14c1e125c8f3c344659922be
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});





app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);




