module.exports = {
    data: {
        name: 'joinTeam',
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
        const teamCaptainId = await interaction.client.users.cache.find(u => u.tag === `${teamCaptainTag}`).id;

        // TODO: Implement joining in database

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nSuccessfully joined ${teamCaptainTag}'s team!`,
            ephemeral: true,
        });
    },
};