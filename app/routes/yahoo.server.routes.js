// app/routes/yahoo.server.routes.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/yahoo", async (req, res) => {
  try {
    const response = await axios.get(
      "https://query1.finance.yahoo.com/v7/finance/download/7374.HK?period1=0&period2=9999999999&interval=1d&events=history"
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching data from Yahoo Finance:", error.message);
    res.status(500).send("Error fetching data from Yahoo Finance");
  }
});

module.exports = router;
