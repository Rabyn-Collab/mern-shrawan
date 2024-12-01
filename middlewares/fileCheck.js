



export const fileCheck = (req, res, next) => {

  const file = req.files?.image;

  file.mv(`./uploads/Mern.png`, (err) => {
    console.log(err);
  })

  next();

}