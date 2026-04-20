const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

// frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🤖 AI ROUTE
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();

    res.json({
      reply: data.choices[0].message.content
    });

  } catch (err) {
    res.json({ reply: "Error connecting AI ❌" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("AI Chat Running"));
