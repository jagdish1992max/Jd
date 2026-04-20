app.post("/chat", (req, res) => {
  console.log("Chat route hit:", req.body);
  res.json({ reply: "TEST OK 🚀" });
});
app.use(express.json());
