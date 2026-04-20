const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 👇 YAHAN DAALO DEBUG LINE
console.log("KEY TEST:", process.env.AIzaSyAX2Y_c-ryZVAmPe9gLJemoPdQBQCxmtYM);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
