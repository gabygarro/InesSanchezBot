'use strict';
//No lo quito de aqui porque cualquiera que venga a ver el código se va a pasar por aqui.
//Este es el hola mundo. Mira el stallman o el /bola8
module.exports = function(bot) {

    var name = "echo";
    var description = "Echo your message";

    var exec = function(msg, reply) {
        reply.sendMessage(msg.command.text);
    };

    return {
        name: name,
        exec: exec,
        description: description,
        help: '/' + name + " [msg] - " + description
    }
};
