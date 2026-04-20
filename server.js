const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// frontend serve
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// test chat route
app.post("/chat", (req, res) => {
  console.log("REQUEST:", req.body);

  res.json({
    reply: "OK WORKING 🚀 You said: " + req.body.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
