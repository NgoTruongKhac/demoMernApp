// const authenticateRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "not denied" });
//     }
//     next();
//   };
// };

const authenticateRole =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "not denied" });
    }
    next();
  };

module.exports = authenticateRole;
