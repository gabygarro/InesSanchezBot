'use strict';

// Bot setup
var TelegramBot = require('node-telegram-bot-api'),
    conf = require('./conf.json');
var bot = new TelegramBot(conf.bot.token, conf.bot.opts);
bot.plugins = [];

// Reply functions
var reply = function (chatId) {
    return {
        forwardMessage: function(fromChatId, messageId) {
            return bot.forwardMessage(chatId, fromChatId, messageId)
        },
        sendChatAction: function(action) {
            return bot.sendChatAction(chatId, action);
        },
        send: function(data, options) {
            var funtionType = utils.lookupFunctionType(data, options);

            if(funtionType === 'message') {
                return this.sendMessage(data, options);
            } else if(funtionType === 'photo') {
                return this.sendPhoto(data, options);
            } else if(funtionType === 'audio') {
                return this.sendAudio(data, options);
            } else if(funtionType === 'document') {
                return this.sendDocument(data, options);
            } else if(funtionType === 'sticker') {
                return this.sendSticker(data, options);
            } else if(funtionType === 'video') {
                return this.sendVideo(data, options);
            } else if(funtionType === 'location') {
                return this.sendLocation(data.lat, data.lng, options);
            } else {
                throw new Error('Not valid FunctionType');
            }
        },
        sendMessage: function(text, options) {
            return bot.sendMessage(chatId, text, options);
        },
        sendPhoto: function(photo, options) {
            return bot.sendPhoto(chatId, photo, options);
        },
        sendAudio: function(audio, options) {
            return bot.sendAudio(chatId, audio, options);
        },
        sendDocument: function(document, options) {
            return bot.sendDocument(chatId, document, options);
        },
        sendSticker: function(sticker, options) {
            return bot.sendSticker(chatId, sticker, options);
        },
        sendVideo: function(video, options) {
            return bot.sendVideo(chatId, video, options);
        },
        sendLocation: function(latitude, longitude, options) {
            return bot.sendLocation(chatId, latitude, longitude, options);
        }
    }
};

/**
 *   MAIN
 **/
// Print Bot Name
bot.getMe().then(function (me) {
    console.log('Hi my name is %s!', me.username);
});

// On message
bot.on('message', function (message) {
	// Registrar conversación a consola
	var dt = new Date();
	console.log(dt.toUTCString());
	var entrante = "\t" + message.chat.username + ": " + message.text;
	console.log(entrante);
	var respuesta = "Hola mija/o";
	console.log("\tYo: " + respuesta);
	//Enviar respuesta
	bot.sendMessage(message.chat.id, respuesta);
});