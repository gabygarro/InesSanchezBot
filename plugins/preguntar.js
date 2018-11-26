'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

function loadFile(filename, array) {
    var instream = fs.createReadStream('./' + filename);
    var outstream = new stream;
    var rl = readline.createInterface(instream, outstream);

    rl.on('line', function(line) {
        array.push(line);
    });
}

module.exports = function (bot) {

    var name = "preguntar";
    var description = "[mensaje] - Hazme preguntas";
    var frases = [];
    var stickers = [];
    var voiceMessages = [];

    // Cargar stickers y frases
    loadFile('frases.txt', frases);
    loadFile('stickers.txt', stickers);

    // Importar archivos de voz
    utils.getGlobbedFiles('./plugins/Voiceclips/*.ogg').forEach(function(voicePath) {
        voiceMessages.push(voicePath);
    });

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            var respuesta = "";
            var probability = _.random(5);
            if (probability == 5) {
                respuesta = voiceMessages[_.random(voiceMessages.length - 1)];
                bot.sendVoice(msg.chat.id, respuesta, 
                    { reply_to_message_id: msg.message_id});
            }
            else if (probability >= 3) {
                bot.sendSticker(msg.chat.id, stickers[_.random(stickers.length - 1)]);
            }
            else {
                respuesta = frases[_.random(frases.length - 1)];
                bot.sendMessage(msg.chat.id, respuesta, 
                    { reply_to_message_id: msg.message_id});
            }
        }
        else {
            respuesta = "No puedo responder si no me preguntas. Intenta dejando apretado el comando por un momento.";
            bot.sendMessage(msg.chat.id, respuesta, 
                { reply_to_message_id: msg.message_id});
        }
        console.log("\tYo: " + respuesta);
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
