'use strict';

var _ = require('lodash');

module.exports = function (bot) {

    var name = "preguntar";
    var description = "Hazme una pregunta, soy una caracola mágica";
    var frases = [
        'Es cierto',
        'Si, es asi',
        'Sin ninguna duda',
        'Definitivamente si',
        'Puedes confiar en ello',
        'Tal y como lo veo, si',
        'Lo mas probable',
        'Suena bien',
        'Si',
        'Los signos apuntan a que sí',
        'No lo veo claro...',
        'Preguntame luego',
        'Mejor no te lo digo ahora',
        'No puedo predecirlo',
        'Concentrate y pregunta de nuevo',
        'No cuentes con ello',
        'Mi respuesta es no',
        'Mis fuentes dicen que no',
        'No suena bien',
        'Lo dudo',
        'No lo se, pero dale pasta a @gabboman',
        'si sabes lo que significa la recursión, es posible',
        'Piensa tu la puta respuesta coño que ya eres mayorcete',
        'Si 4chan estuviera activo te lo diría',
        'No lo se, pero eso me recuerda que quiero una hamburguesa con queso',
        'Rezale a tu Dios'
    ];

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            bot.sendMessage(msg.chat.id, frases[_.random(frases.length - 1)]);
            bot.sendMessage(msg.chat.id, "Probando funcionalidad de audios:");
            bot.sendVoice(msg.chat.id, "./plugins/Voiceclips/yes.ogg", 
                {reply_to_message_id: msg.message_id});
        }
        else {
            bot.sendMessage(msg.chat.id, 'Pero preguntame algo, que si tu no sabes la pregunta yo no se la respuesta. En caso de que no sepas la pregunta, la respuesta es 42');
        }
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
