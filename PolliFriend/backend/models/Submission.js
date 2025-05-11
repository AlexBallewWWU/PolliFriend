const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: String,
  location: String,
  beforeImageUrl: String,
  afterImageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
