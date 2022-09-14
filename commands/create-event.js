const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createevent')
		.setDescription('Create an event!')
		.addStringOption(option =>
			option.setName('name')
				.setDescription('Name/Title of event')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('description')
				.setDescription('Description of event')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('start')
				.setDescription('Start date and time in format: MM/DD/YY, Day, HH:MM AM/PM')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('end')
				.setDescription('End date and time in format: MM/DD/YY, Day, HH:MM AM/PM')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('location')
				.setDescription('Location of this event')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('maxattendees')
				.setDescription('Max number of attendees allowed')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('maxteams')
				.setDescription('Max number of teams allowed')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();

		const name = interaction.options.getString('name');
		const description = interaction.options.getString('description');
		const start = interaction.options.getString('start');
		const end = interaction.options.getString('end');
        const location = interaction.options.getString('location');
		const maxAttendees = interaction.options.getString('maxattendees');
		const maxTeams = interaction.options.getString('maxteams');
		const currAttendees = 0;
		const currTeams = 0;
        const waitlistCount = 0;

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(name)
			.setURL('https://njit.campuslabs.com/engage/organization/njitvbc')
			.setThumbnail('https://cdn.discordapp.com/attachments/1016386747464167514/1016393947439964160/860d1f84-7d96-473e-9d59-5bf440d73218355f40e1-23e5-445a-822f-f6b128fe9cd5-removebg-preview2.png')
			.addFields(
				{ name: 'Start Time:', value: start, inline: true },
				{ name: 'End Time:', value: end, inline: true },
				{ name: 'Location:', value: location, inline: true },
                { name: 'Description', value: `${description}`, inline: false },
				{ name: 'Attendees:', value: `${currAttendees}/${maxAttendees}`, inline: true },
				{ name: 'Waitlist:', value: `${waitlistCount}`, inline: true },
				{ name: 'Teams:', value: `${currTeams}/${maxTeams}`, inline: true },
			);

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('joinEvent')
                .setLabel('Join')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('leaveEvent')
                .setLabel('Leave')
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('attendeesList')
                .setLabel('Attendees')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('refreshEvent')
                .setLabel('Refresh')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('eventId')
                .setLabel('Event ID')
                .setStyle(ButtonStyle.Primary),
        );

		await interaction.editReply({ embeds: [embed], components: [row] });
	},
};