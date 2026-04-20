app.post("/chat", async (req, res) => {
  const msg = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
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
