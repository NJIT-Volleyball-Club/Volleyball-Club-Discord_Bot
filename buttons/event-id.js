module.exports = {
    data: {
        name: 'eventId',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const eventId = reply.reference.messageId;

        await interaction.editReply({
            content: `Event ID: ${eventId}`,
            ephemeral: true,
        });
    },
};