const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: 'createTeam',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const channelId = interaction.channelId;
        const channel = interaction.client.channels.cache.get(channelId);

        const reply = await interaction.fetchReply();
        const messageId = reply.reference.messageId;
        const message = await interaction.message.fetch(`${messageId}`);
        const eventId = message.embeds[0].data.footer.text.substring(10);
        const userId = interaction.user.id;
        const userTag = interaction.user.tag;
        const userAvatar = interaction.user.displayAvatarURL();

        // TODO: Implement team creation in database
        const teamNumber = 1;
        const eventTitle = 'Event Title Placeholder';

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${eventTitle}`)
			.setURL('https://njit.campuslabs.com/engage/organization/njitvbc')
            .setAuthor({ name: `${userTag}`, iconURL: `${userAvatar}` })
			.addFields(
                { name: 'Team', value: `Team #${teamNumber}`, inline: true },
				{ name: 'Team Captain', value: userTag, inline: true },
				{ name: 'Player Count', value: '1/6', inline: true },
				{ name: 'Players', value: 'None', inline: true },
                )
            .setFooter({ text: `Event ID: ${eventId}` });

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('joinTeam')
                .setLabel('Join')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('leaveTeam')
                .setLabel('Leave')
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('refreshTeam')
                .setLabel('Refresh')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('manageTeam')
                .setLabel('Manage')
                .setStyle(ButtonStyle.Primary),
        );

        await channel.send({ embeds: [embed], components: [row] });

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nSuccessfully created team!`,
            ephemeral: true,
        });
    },
};