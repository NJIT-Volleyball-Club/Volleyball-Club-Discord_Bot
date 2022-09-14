module.exports = {
    data: {
        name: 'attendeesList',
    },
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const reply = await interaction.fetchReply();
        const eventId = reply.reference.messageId;

        // TODO: Implement retrieving attendees in database

        let attendees = '@player1\n@player2\n@player3\netc.';

        await interaction.editReply({
            content: `**Event ID: ${eventId}**\nList of Attendees:\n${attendees}`,
            ephemeral: true,
        });
    },
};