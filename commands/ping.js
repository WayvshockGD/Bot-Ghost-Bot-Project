module.exports = {
    name: 'ping',
    description: '',
    execute(message, client) {

 
        message.channel.send("Ping?").then(msg => {
            msg.edit(`Latency is ${Date.now() - message.createdTimestamp}ms Bot Latency is ${Math.round(client.ping)}ms`)
        })

    }

};