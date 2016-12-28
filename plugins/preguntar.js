'use strict';

var _ = require('lodash');

module.exports = function (bot) {

    var name = "preguntar";
    var description = "Hazme preguntas";
    var frases = [
        'Es cierto',
        'Sí, es así',
        'Sin ninguna duda',
        'Definitivamente sí',
        'Puedes confiar en ello',
        'Tal y como lo veo, sí',
        'Lo más probable',
        'Suena bien',
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
        'No suena bien',
        'Lo dudo',
        'No lo se, pero eso me recuerda que quiero un mojito',
        'Rézale a Dios'
    ];

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            if (_.random(2) < 0) {
                bot.sendMessage(msg.chat.id, frases[_.random(frases.length - 1)], 
                    { reply_to_message_id: msg.message_id});
            }
            else {
                var archivo = "./plugins/Voiceclips/" + _.random(1,6) + ".ogg";
                console.log(archivo);
                bot.sendVoice(msg.chat.id, archivo, 
                    { reply_to_message_id: msg.message_id});
            }
        }
        else {
            bot.sendMessage(msg.chat.id, 'No puedo responder si no me preguntas.', 
                { reply_to_message_id: msg.message_id});
        }
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
