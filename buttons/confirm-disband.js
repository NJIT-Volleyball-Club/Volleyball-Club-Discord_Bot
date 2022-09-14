module.exports = {
    data: {
        name: 'confirmDisband',
    },
    async execute(interaction) {
        await interaction.deferUpdate();
        // TODO: implement team disbanding

        await interaction.editReply({
            content: 'Successfully disbanded team!',
            ephemeral: true,
            components: [],
        });

    },
};