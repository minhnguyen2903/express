const jwt = require("jsonwebtoken");

const createJWTToken = (email) => {
  const servicesToken = jwt.sign({ email }, "Minz", {
    expiresIn: "1m",
  });

  const refreshToken = jwt.sign({ email }, "zinM", {
    expiresIn: "3m",
  });

  return { servicesToken, refreshToken };
};

module.exports = createJWTToken;
