import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import crypto from "crypto";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("🔹 Запрос пришел:", req.body); // Лог запроса
  console.log("Method:", req.method);
  console.log("Body:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не разрешен" });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");


  try {
    const { event_name, event_data } = req.body;

    // Хэшируем данные для Facebook Pixel
    const hashedData = {
      fn: crypto.createHash("sha256").update(event_data.fn || "").digest("hex"),
      ph: crypto.createHash("sha256").update(event_data.ph || "").digest("hex"),
    };

    console.log("🔹 Хэшированные данные:", hashedData); // Лог хэшей

    const pixelResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.VITE_FACEBOOK_PIXEL_ID}/events`,
      {
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            user_data: hashedData,
          },
        ],
        access_token: process.env.VITE_FACEBOOK_ACCESS_TOKEN,
      }
    );

    console.log("✅ Успешный ответ Facebook:", pixelResponse.data); // Лог успешного ответа

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Ошибка при отправке события в Facebook:", error.response?.data || error.message);
    return res.status(500).json({ error: "Ошибка отправки события" });
  }
}