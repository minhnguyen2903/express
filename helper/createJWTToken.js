const jwt = require("jsonwebtoken");

const createJWTToken = (email) => {
  const servicesToken = jwt.sign({ email }, "Minz", {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign({ email }, "zinM", {
    expiresIn: "3h",
  });

  return { servicesToken, refreshToken };
};

module.exports = createJWTToken;
