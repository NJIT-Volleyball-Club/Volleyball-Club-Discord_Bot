const { ActionRowBuilder,SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'manageTeam',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const messageId = reply.reference.messageId;
        const message = await interaction.message.fetch(`${messageId}`);
        const eventId = message.embeds[0].data.footer.text.substring(10);
        const userId = interaction.user.id;
        const userTag = interaction.user.tag;
        const teamCaptainTag = message.embeds[0].data.fields[1].value;
        console.log(teamCaptainTag);
        // might have errors with this cause a user must interact in a channel to be in the users cache
        // so idk honestly
        const teamCaptainId = await interaction.client.users.cache.find(u => u.tag === `${teamCaptainTag}`).id;

        // check if user is team captain
        if (userId == teamCaptainId) {
            const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('kickDisbandTeam')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Kick Player',
							description: 'Kick a player from your team',
							value: `{"optionId": "kickPlayerList", "eventId": "${eventId}"}`,
						},
						{
							label: 'Disband Team',
							description: 'Disband your team and remove it from the event',
							value: `{"optionId": "disbandTeam", "eventId": "${eventId}"}`,
						},
					),
			);
            await interaction.editReply({ content: '**Manage Team:**', components: [row] });
        }
        else {
            await interaction.editReply({
                content: `**Event ID: ${eventId}**\nYou are not the team captain for this team!`,
                ephemeral: true,
            });
            return;
        }
    },
};