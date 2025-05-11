require("dotenv").config(); // load environment variables from .env file
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const PORT = process.env.PORT || 3000;
server.use(express.json());
server.use(cors());
const submissionsRoute = require("./routes/submissions");
server.use("/api/submissions", submissionsRoute);


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.get("/", async (req, res) => {
    console.log("default root")
    return res.status(200).json({ message: "Success"});  
});

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Failed to connect to MongoDB", error));