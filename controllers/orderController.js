import Order from "../models/Order.js"



export const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}



