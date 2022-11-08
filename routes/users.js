const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller.js");

router.post("/create", users.create);
// Create a new Tutorial

// Retrieve all Tutorials
router.get("/list", users.findAll);

// Retrieve all published Tutorials
router.get("/published", users.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", users.findOne);

// Update a Tutorial with id
router.put("/:id", users.update);

// Delete a Tutorial with id
router.delete("/:id", users.delete);

// Delete all Tutorials
router.delete("/", users.deleteAll);

module.exports = router;
