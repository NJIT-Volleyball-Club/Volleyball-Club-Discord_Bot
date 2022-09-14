module.exports = {
    data: {
        name: 'joinEvent',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const eventId = reply.reference.messageId;

        // TODO: Implement joining in database

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nSuccessfully joined event!`,
            ephemeral: true,
        });
    },
};