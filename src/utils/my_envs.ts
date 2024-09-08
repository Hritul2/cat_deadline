export const envs = {
  password_hash: String(import.meta.env.VITE_PASSWORD_HASH),
  telegram_token: String(import.meta.env.VITE_TELEGRAM_BOT_TOKEN),
  telegram_chat_id: String(import.meta.env.VITE_TELEGRAM_CHAT_ID),
};
