import Product from "../models/Product.js"




export const getAllProducts = async (req, res) => {
  try {
    const response = await Product.find();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ err: `${err}` });
  }
}
