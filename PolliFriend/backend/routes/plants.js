const express = require('express');
const router = express.Router();
const Plants = require('../models/Plants');

// GET /api/plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plants.find({}, { name: 1, image: 1, info: 1, type: 1, carbonScore: 1, pollinationScore: 1, waterScore: 1, _id: 0 });
    console.log(plants);
    res.status(200).json({ plants })
  } catch (err) {
    return res.status(500).json({ message: "error retrieving plants", error: err.message });
  }
});

module.exports = router;