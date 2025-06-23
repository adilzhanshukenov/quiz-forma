import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const API_URL = "https://business-api.tiktok.com/open_api/v1.3/pixel/track/";
const TIKTOK_PIXEL_ACCESS_TOKEN = "c70ca40304c32af91b9d4d61418bc4d632f73bf0";
const TIKTOK_PIXEL_ID = "CVJ8B73C77UENQLASQ3G"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не разрешен" });
  }

  const { eventName, eventData } = req.body;
  if (!eventName || !eventData) {
    return res.status(400).json({ error: "Отсутствуют параметры" });
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        pixel_code: TIKTOK_PIXEL_ID,
        event: eventName,
        timestamp: Math.floor(Date.now() / 1000),
        user: {
          external_id: eventData.userId || "",
          email: eventData.email || "",
          phone: eventData.phone || "",
        },
        properties: eventData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Token": TIKTOK_PIXEL_ACCESS_TOKEN!,
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    return res.status(500).json({
      error: "Ошибка при отправке события",
      details: error.response?.data || error.message,
    });
  }
}
