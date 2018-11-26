'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

module.exports = function (bot) {

    var name = "preguntar";
    var description = "[mensaje] - Hazme preguntas";
    var frases = [
        'Es cierto',
        'Sí, es así',
        'Sin ninguna duda',
        'Definitivamente sí',
        'Definitivamente no',
        'Puedes confiar en ello',
        'Tal y como lo veo, sí',
        'Lo más probable',
        'Sí',
        'Los signos apuntan a que sí',
        'No lo veo claro...',
        'Pregúntame luego',
        'Mejor no te lo digo ahora',
        'No puedo predecirlo',
        'Concéntrate y pregunta de nuevo',
        'No cuentes con ello',
        'Mi respuesta es no',
        'Mis fuentes dicen que no',
        'Lo dudo',
        'No lo sé, pero eso me recuerda a que quiero un mojito',
        'Pregúntale a Dios',
        'Más o menos',
        'Puede ser',
        'No creo',
        'Sí, porque Buda me lo dijo',
        'Fidel me obligaría a decir que no, pero ya falleció, así que sí'
    ];
    var voiceMessages = [];
    // Importar archivos de voz
    utils.getGlobbedFiles('./plugins/Voiceclips/*.ogg').forEach(function(voicePath) {
        voiceMessages.push(voicePath);
    });

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            var respuesta = "";
            if (_.random(2) > 0) {
                respuesta = frases[_.random(frases.length - 1)];
                bot.sendMessage(msg.chat.id, respuesta, 
                    { reply_to_message_id: msg.message_id});
            }
            else {
                respuesta = voiceMessages[_.random(voiceMessages.length - 1)];
                bot.sendVoice(msg.chat.id, respuesta, 
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
