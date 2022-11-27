const fs = require("fs");
const jwt = require("jsonwebtoken");

const verityToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send("unauthorized");
  }
  const rawToken = authorization.split(" ")[1];
  if (!rawToken) {
    return res.status(401).send("unauthorized");
  }

  const decodedToken = jwt.decode(rawToken);
  if (decodedToken.exp * 1000 < new Date().getTime()) {
    return res.status(403).send("forbidden");
  }

  next();
};

module.exports = verityToken;
