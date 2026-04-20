app.post("/chat", async (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  return res.json({
    reply: "BACKEND OK 🚀"
  });
});
