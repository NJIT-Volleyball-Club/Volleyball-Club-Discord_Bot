module.exports = {
    data: {
        name: 'refreshEvent',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const eventId = reply.reference.messageId;

        // TODO: Implement refreshing in database

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nSuccessfully refreshed event!`,
            ephemeral: true,
        });
    },
};