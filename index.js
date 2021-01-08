const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: htpp://localhost:${PORT}`);
}

const handleHome = (req, res) => {
    console.log("Hi from home!!");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);