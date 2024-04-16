const express = require("express");
const app = express.Router();
const Data = require("../app");



app.get('/', async (req, res) => {
    try {
      const data = await Data.find(); // Fetch all users from MongoDB
      res.json(data); // Send JSON response with users data

    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});
