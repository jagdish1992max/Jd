const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <body>
      <h1>🚀 Website Fully Working</h1>
      <p>Server + Routing OK</p>
    </body>
    </html>
  `);
});

// test route (optional)
app.get("/test", (req, res) => {
  res.send("FINAL CHECK OK 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running");
});
