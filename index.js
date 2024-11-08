import express from "express";
import productRoutes from './routes/productRoutes.js';

const port = 5000;

const app = express();

//const numbers = [11, 22, 33, 44, 55];


// const func = (number) => {
//   console.log(number + 9);
// }

// numbers.forEach(func);

// numbers.forEach((a) => {
//   func(a);
// });

app.use(express.json());
app.use(productRoutes);




app.listen(port, () => {
  console.log('listening');
});
