app.post("/chat", async (req, res) => {
  const msg = req.body.message;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + process.env.AIzaSyAX2Y_c-ryZVAmPe9gLJemoPdQBQCxmtYM,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: msg }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({
      reply: reply || "❌ No response from Gemini"
    });

  } catch (err) {
    console.log(err);
    res.json({ reply: "API ERROR ❌" });
  }
});
