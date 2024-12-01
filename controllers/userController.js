import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      const pass = bcrypt.compareSync(password, isExist.password);
      if (!pass) return res.status(401).json({ message: 'invalid credential' });


      const token = jwt.sign({
        id: isExist._id,
        isAdmin: isExist.isAdmin
      }, 'token');

      return res.status(200).json({
        token,
        isAdmin: isExist.isAdmin,
        message: 'user successfully login'
      });

    } else {
      return res.status(401).json({ message: 'invalid credential' });
    }

  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }

}


export const signUpUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });

    const hash = bcrypt.hashSync(password, 10);

    await User.create({
      fullname,
      email,
      password: hash
    });

    return res.status(201).json({ message: 'user successfully registered' });


  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }
}



export const updateUser = async (req, res) => {
  const { email, password, fullname } = req.body;

  try {
    const isExist = await User.findById(req.id);
    if (isExist) {
      isExist.fullname = fullname || isExist.fullname;
      isExist.password = password || isExist.password;
      isExist.email = email || isExist.email;
      await isExist.save();
      return res.status(200).json({ message: 'successfully updated' });
    } else {
      return res.status(401).json({ message: 'user not found' });
    }

  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }

}



export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.id).select('fullname email');
    if (!user) return res.status(404).json({ message: 'user not found' });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
