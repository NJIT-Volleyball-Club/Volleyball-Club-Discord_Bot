module.exports = {
    data: {
        name: 'declineDisband',
    },
    async execute(interaction) {
        await interaction.deferUpdate();

        await interaction.editReply({
            content: 'Declined!',
            ephemeral: true,
            components: [],
        });

    },
};