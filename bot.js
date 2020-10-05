const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token} = require('./config/setting.json')
const status = require('./config/status.json')
const { MessageEmbed } = require('discord.js')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.once('ready', () => {
    client.user.setActivity(`${status.status}${status.status_2} ${prefix}Help ${status.status_3}`, {
  type: "LISTENING"
});
    console.log(`${client.user.tag} is ready!`);
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		const user = client.users.cache.get(message.author.id);
        const dm = new MessageEmbed()
        .setTitle(`Bot Commands`)
		.setDescription(`\`${prefix}ping\` - Gets the ping of the server and bot. \n \`${prefix}say <message>\` - Broadcasts a message in the channel.`)
		.setColor('#ff0000')
		.setFooter('Created with BotGhost - https://botghost.com/')

        user.send(dm)
	}

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	};
});

client.login(token);