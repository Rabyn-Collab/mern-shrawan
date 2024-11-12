import User from "../models/User.js";
import bcrypt from 'bcrypt';


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      const pass = bcrypt.compareSync(password, isExist.password);
      if (!pass) return res.status(401).json({ message: 'invalid credential' });

      return res.status(200).json({ message: 'user successfully registered' });

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