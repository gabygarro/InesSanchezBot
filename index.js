
var TelegramBot = require('node-telegram-bot-api'),
telegram = new TelegramBot("323827964:AAFeRVwFLAkeOzokjksBfrg4ERT7pkdE5hE", { polling: true });

telegram.on('message', function (message) {
	// Registrar conversación a consola
	var dt = new Date();
	console.log(dt.toUTCString());
	entrante = "\t" + message.chat.username + ": " + message.text;
	console.log(entrante);
	respuesta = "Hola mija/o";
	console.log("\tYo: " + respuesta);
	//Enviar respuesta
	telegram.sendMessage(message.chat.id, respuesta);
});