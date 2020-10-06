const { prefix } = require('../config/setting.json')
const { say_js } = require('../config/controller/commands.json')

module.exports = {
    name: 'say',
    description: '',
    execute(message, args) {

        if (!say_js || say_js === 'false') return message.channel.send('command disabled')

        if (!say_js || say_js === 'true') {

            if(!args.join(" ")){
                return message.reply(`Sorry, I was unable to say that. This command can be used by typing ${prefix}say <message>`)
            }
    
            message.channel.send(args.join(" "));
            
        }
         
    }
}
