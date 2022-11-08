const express = require("express");
const router = express.Router();
const invoices = require("../controllers/invoice.controller.js");

router.post("/create", invoices.create);
// Create a new Tutorial

// Retrieve all Tutorials
router.get("/list", invoices.findAll);

// Retrieve all type of invoice
router.get("/types", invoices.findAllType);

// Retrieve all published Tutorials
router.get("/published", invoices.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", invoices.findOne);

// Update a Tutorial with id
router.put("/:id", invoices.update);

// Delete a Tutorial with id
router.delete("/:id", invoices.delete);

// Delete all Tutorials
router.delete("/", invoices.deleteAll);

module.exports = router;
