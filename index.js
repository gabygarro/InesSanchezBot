
var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("323827964:AAFeRVwFLAkeOzokjksBfrg4ERT7pkdE5hE", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hola mijo");
});