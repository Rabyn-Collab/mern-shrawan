





export const someWare = (req, res, next) => {
kjc sajhbs bnsdkl sadhjbsdns djnsbns
  sdbsjksb
  console.log(req.body);

  if (req.body.email) {
    return next();
  }

  return res.status(400).json({ message: 'file not found' });

}
