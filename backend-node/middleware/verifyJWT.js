const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token

    console.log(req.user);
    req.userId = decoded.UserInfo._id;
    req.roles = decoded.UserInfo.roles;
    console.log(req.roles, req.userId, req.user);
    next();
  });
};

module.exports = verifyJWT;
