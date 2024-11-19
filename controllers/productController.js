import Product from "../models/Product.js"




export const getProducts = async (req, res) => {

  try {

    // search , sort, fields, operator, limit, page , skip

    const excludesFields = ['sort', 'search', 'limit', 'fields', 'skip', 'page'];

    const queryObj = { ...req.query };


    excludesFields.forEach((label) => delete queryObj[label]);

    if (req.query.search) {
      queryObj.title = { $regex: req.query.search, $options: 'i' }
      // queryObj.brand = { $regex: req.query.search, $options: 'i' }
    }


    let qStr = JSON.stringify(queryObj);

    qStr = qStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, match => `$${match}`);


    let query = Product.find(JSON.parse(qStr));


    if (req.query.sort) {
      const filterSorts = req.query.sort?.split(/[\s,]+/).filter(Boolean).join(' ');
      query = query.sort(filterSorts);

    }

    if (req.query.fields) {
      const filterFlelds = req.query.fields?.split(/[\s,]+/).filter(Boolean).join(' ');
      query = query.select(filterFlelds);

    }


    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const response = await query.skip(skip).limit(limit);

    return res.status(200).json({ length: response.length, products: response });
  } catch (err) {
    return res.status(400).json({ err: `${err}` });
  }
}
