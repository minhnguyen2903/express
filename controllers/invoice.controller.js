const db = require("../models/index");
const Invoices = db.invoices;
const Op = db.Sequelize.Op;

// Create and Save a new Invoices
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.cost) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Invoices
  const invoice = {
    name: req.body.name || "",
    type: req.body.type || "",
    cost: req.body.cost || 0,
    date: req.body.date || new Date(),
  };

  // Save Invoices in the database
  Invoices.create(invoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Invoices.",
      });
    });
};

// Retrieve all Invoicess from the database.
exports.findAll = async (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const limit = parseInt(req.query.limit, 10) || null;
  const page = parseInt(req.query.page, 10) || null;
  const offset = page ? Math.abs(page - 1) * limit : null;

  const total = await Invoices.count();

  Invoices.findAll({ where: condition, limit, offset })
    .then((data) => {
      setTimeout(() => res.json({ items: data, limit, total, page }), 1000);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices.",
      });
    });
};

// Retrieve all Invoices from the database.
exports.findAllType = async (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const limit = parseInt(req.query.limit, 10) || null;
  const page = parseInt(req.query.page, 10) || null;
  const offset = page ? Math.abs(page - 1) * limit : null;

  const total = await Invoices.count();

  Invoices.findAll({ where: condition, limit, offset, attributes: ["type"] })
    .then((data) => {
      setTimeout(() => res.json({ items: data, limit, total, page }), 1000);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices.",
      });
    });
};

// Find a single Invoices with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Invoices.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Invoices with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Invoices with id=" + id,
      });
    });
};

// Update a Invoices by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Invoices.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Invoices was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Invoices with id=${id}. Maybe Invoices was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Invoices with id=" + id,
      });
    });
};

// Delete a Invoices with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Invoices.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Invoices was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Invoices with id=${id}. Maybe Invoices was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Invoices with id=" + id,
      });
    });
};

// Delete all Invoicess from the database.
exports.deleteAll = (req, res) => {
  Invoices.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Invoicess were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all invoices.",
      });
    });
};

// find all published Invoices
exports.findAllPublished = (req, res) => {
  Invoices.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices.",
      });
    });
};
