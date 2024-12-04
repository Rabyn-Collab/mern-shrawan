import jwt from 'jsonwebtoken';



export const userCheck = (req, res, next) => {
  const token = req.cookies?.jwt;

  const decode = jwt.decode(token, 'token');
  if (decode) {
    req.id = decode.id;
    req.isAdmin = decode.isAdmin;
    return next();
  } else {
    return res.status(401).json({ message: 'you are not authorized' });
  }

}

export const adminCheck = (req, res, next) => {
  if (req.isAdmin) {
    return next();
  } else {
    return res.status(401).json({ message: 'you are not authorized' });
  }

}