const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// chat API (NO AI, just working test)
app.post("/chat", (req, res) => {
  const msg = req.body.message;

  console.log("User message:", msg);

  res.json({
    reply: "🤖 Bot: You said -> " + msg
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
