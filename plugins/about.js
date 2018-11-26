'use strict';
var _ = require('lodash');


module.exports = function(bot) {

    var name = "about";
    var description = "Créditos";

    var exec = function(msg, reply) {
        
        reply.sendMessage("Creada por @hydrochaeris",
            {parse_mode: 'Markdown' });
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};