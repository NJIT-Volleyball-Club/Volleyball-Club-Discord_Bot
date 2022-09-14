const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teamsignups')
		.setDescription('Start Teamp Sign Ups')
		.addStringOption(option =>
			option.setName('eventid')
				.setDescription('Event ID associated with these teams')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();

		const eventId = await interaction.options.getString('eventid');
		console.log(eventId);
		// TODO: Check if event ID exists in database and if user has joined the event, and is in no other teams

		// TODO: Retrieve data for variables below from database; current values are placeholders
		const maxTeams = 8;
		const currTeams = 0;
		const eventTitle = 'Event Title Placeholder';

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${eventTitle}`)
			.addFields(
				{ name: 'Teams', value: `${currTeams}/${maxTeams}`, inline: true },
			)
            .setFooter({ text: `Event ID: ${eventId}` });

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('createTeam')
                .setLabel('Create Team')
                .setStyle(ButtonStyle.Success),
        );

		await interaction.editReply({ embeds: [embed], components: [row] });
	},
};