import Order from "../models/Order.js"



export const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


export const addOrder = async (req, res) => {
  const { totalAmount, orderItems } = req.body;
  try {
    await Order.create({
      totalAmount,
      orderItems,
      user: req.id
    });
    return res.status(200).json({ message: 'successfully order created' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}



