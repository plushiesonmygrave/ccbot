const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autoclear')
        .setDescription("Clears the channel history after a certain amount of time")
        .addIntegerOption(option => option.setName('duration').setDescription("Specifies after what time (in seconds) the messages should be deleted (default: 3 sec)"))
        .addStringOption(option => option
            .setName('mode')
            .setDescription("Specifies the mode (default: All messages), leave blank to remove current mode.")
            .addChoice('All messages', 'all')
            .addChoice('Only messages from bots', 'bots')
            .addChoice('Only messages from users', 'users')
            .addChoice('Only messages with links', 'links')
            .addChoice('Only messages without links', 'nonlinks')
        ),
    async execute(interaction) {
        var mode = interaction.options.getString('mode');
        var duration = interaction.options.getInteger('duration');
        if(!duration) duration = 3;

        if(!mode) return; // TODO
        if(!voted) return; // TODO
    },
};