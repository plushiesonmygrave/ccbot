module.exports = {
	name: 'guildCreate',
	async execute(guild) {
		new (require ('../mysql'))().getConnection().updateGuild(guild);
	},
};