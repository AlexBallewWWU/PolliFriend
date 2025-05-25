const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true},
    info: { type: String, required: true },
    image: { type: String, required: true },
    carbonScore: { type: Number, required: true },
    pollinationScore: { type: Number, required: true },
    waterScore: { type: Number, required: true },
});

module.exports = mongoose.model('Plant', plantSchema);
