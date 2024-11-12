


export const someWare = (req, res, next) => {

  console.log(req.body);


  const m = () => {

  }
  if (req.body.email) {
    return next();
  }


  return res.status(400).json({ message: 'file not found' });

}