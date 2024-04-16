const express = require("express");
const data = require("./routes/data");

const app = express();

app.use("/data", data);
app.listen(9999, ()=>{
    console.log("server started at 9999");
})