import Product from "../models/Product.js"




export const getProducts = async (req, res) => {



  try {

    // search , sort, fields, operator, limit, page , skip

    const excludesFields = ['sort', 'search', 'limit', 'fields', 'skip', 'page'];

    const queryObj = { ...req.query };


    excludesFields.forEach((label) => delete queryObj[label]);


    let qStr = JSON.stringify(queryObj);

    qStr = qStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, match => `$${match}`);

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const response = await Product.find(JSON.parse(qStr)).skip(skip).limit(limit);

    return res.status(200).json({ length: response.length, products: response });
  } catch (err) {
    return res.status(400).json({ err: `${err}` });
  }
}
