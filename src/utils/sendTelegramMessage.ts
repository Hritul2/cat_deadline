import axios from "axios";
import { envs } from "./my_envs";

const botToken = envs.telegram_token; // Replace with your bot token
const chatId = envs.telegram_chat_id; // Replace with your chat ID

export const sendMessage = async (message: string) => {
  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML", // Optional: Format the message as HTML
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
