const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(process.cwd())));

app.get("/api/*pathPart", async (req, res) => {
  const pathPart = Array.isArray(req.params.pathPart)
    ? req.params.pathPart.join('/')
    : req.params.pathPart;

  const query = new URLSearchParams(req.query).toString();
  const url = `https://docker-testing-3ath.onrender.com/${pathPart}${query ? `?${query}` : ""}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "algo se rompio en el proxy... mala cuea",
      details: String(error)
    });
  }
});

app.listen(3001, "0.0.0.0", () => {
  console.log("https://docker-testing-3ath.onrender.com");
});