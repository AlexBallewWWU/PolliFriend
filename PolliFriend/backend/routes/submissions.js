const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// GET /api/submissions
router.get('/', async (req, res) => {
  const { location } = req.query;
  const filter = location
    ? { location: { $regex: location, $options: 'i' } }
    : {};

  try {
    const submissions = await Submission.find(filter).sort({ createdAt: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

module.exports = router;
