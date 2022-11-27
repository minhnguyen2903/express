const express = require("express");
const jwt = require("jsonwebtoken");
const createJWTToken = require("../helper/createJWTToken");
const verityToken = require("../middleware/verifyToken");
const router = express.Router();

/* Login. */
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return setTimeout(() => {
      return res.status(400).send({ message: "Missing email or password" });
    }, 5000);
  }
  const generateToken = createJWTToken("minhnv@email.com");
  return res.json({
    ...generateToken,
    profile: {
      createdAt: "2022-10-25T07:41:02.327Z",
      updatedAt: "2022-10-25T07:41:02.327Z",
      name: "Dr. Bernadette Daniel",
      role: Math.floor(Math.random() * 10) % 2,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
      birth: "2022-06-18T09:27:47.703Z",
      email: "Tomas.Wilderman@gmail.com",
      active: true,
      phone: "673-919-7158",
      country: "Cambridgeshire",
      bankBalance: 24555.73,
      timezone: "Pacific/Midway",
      id: "1",
    },
  });
});

router.use(verityToken).post("/refresh-token", async (req, res, next) => {
  const generateToken = createJWTToken("minhnv@email.com");
  return res.json(generateToken);
});

/* Get current User. */
router.get("/me", function (req, res, next) {
  res.json({
    createdAt: "2022-10-25T07:41:02.327Z",
    name: "Dr. Bernadette Daniel",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
    birth: "2022-06-18T09:27:47.703Z",
    email: "Tomas.Wilderman@gmail.com",
    active: false,
    phone: "673-919-7158",
    country: "Cambridgeshire",
    bankBalance: 24555.73,
    timezone: "Pacific/Midway",
    id: "1",
  });
});

module.exports = router;
