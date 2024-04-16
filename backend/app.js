const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const dataSchema = new Schema({
  machine_status: Number,
  ts: String,
  vibration: Number,
});

const Data = mongoose.model("machineData", dataSchema);
module.exports = Data;
