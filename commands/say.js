const { prefix } = require('../config/setting.json')

module.exports = {
    name: 'say',
    description: '',
    execute(message, args) {
         
        if(!args.join(" ")){
            return message.reply(`Sorry, I was unable to say that. This command can be used by typing ${prefix}say <message>`)
        }

        message.channel.send(args.join(" "));
        

        }

    }
