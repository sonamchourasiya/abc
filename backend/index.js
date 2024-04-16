const express = require("express");
const cors = require("cors");
// const data = require("./routes/data");
const Data = require("./app");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/data', async (req, res) => {
    try {
      const data = await Data.find(); // Fetch all users from MongoDB
      res.json(data); // Send JSON response with users data

    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(9999, ()=>{
    console.log("server started at 9999");
})