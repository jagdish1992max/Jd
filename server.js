app.post("/chat", async (req, res) => {
  const msg = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: msg }]
    })
  });

  const data = await response.json();

  res.json({
    reply: data?.choices?.[0]?.message?.content || "No response"
  });
});
