module.exports = {
    data: {
        name: 'leaveEvent',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const eventId = reply.reference.messageId;

        // TODO: Implement leaving in database

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nSuccessfully left event!`,
            ephemeral: true,
        });
    },
};