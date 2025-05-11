require('dotenv').config();
const mongoose = require('mongoose');
const Submission = require('./models/Submission');

// connect to the database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB ✅');

  const submission = new Submission({
    name: 'Aish',
    location: 'Bothell',
    beforeImageUrl: 'https://via.placeholder.com/200x160?text=Before',
    afterImageUrl: 'https://via.placeholder.com/200x160?text=After'
  });

  await submission.save();
  console.log('🎉 Submission saved!');
  mongoose.disconnect();
}).catch((err) => {
  console.error('❌ Error:', err);
});
