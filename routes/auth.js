const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

/* Login. */
router.post("/login", function (req, res, next) {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send("error");
  }
  const serviceToken = jwt.sign({ email }, "MZ", {
    expiresIn: "1h",
  });
  res.json({
    serviceToken,
    profile: {
      createdAt: "2022-10-25T07:41:02.327Z",
      updatedAt: "2022-10-25T07:41:02.327Z",
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
    },
  });
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
