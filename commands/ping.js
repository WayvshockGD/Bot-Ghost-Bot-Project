const { ping_js } = require('../config/controller/commands.json')

module.exports = {
    name: 'ping',
    description: '',
    execute(message, client) {

        if (!ping_js || ping_js === 'false') return message.channel.send('command disabled')

        if (!ping_js || ping_js === 'true') {
 
        message.channel.send("Ping?").then(msg => {
            msg.edit(`Latency is ${Date.now() - message.createdTimestamp}ms Bot Latency is ${Math.round(client.ping)}ms`)
        })

    }

    }

};