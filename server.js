const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", async (req, res) => {
  const msg = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + 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
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant. Reply in Hinglish if user uses Hinglish." },
          { role: "user", content: msg }
        ]
      })
    });

    const data = await response.json();

    console.log(data); // debug important

    res.json({
      reply: data?.choices?.[0]?.message?.content || "No response"
    });

  } catch (err) {
    console.log(err);
    res.json({ reply: "API Error ❌" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
