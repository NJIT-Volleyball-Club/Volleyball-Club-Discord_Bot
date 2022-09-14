module.exports = {
    data: {
        name: 'kickMember',
    },
    async execute(interaction) {
        await interaction.deferUpdate();
        const option = interaction.values[0];
        const playerId = JSON.parse(option).playerId;
        const eventId = JSON.parse(option).eventId;
        const teamCaptainId = interaction.user.id;
        console.log(playerId);
        console.log(eventId);
        // TODO: Implement kicking member from team

        await interaction.editReply({ content: `Succesfully kicked ${playerId}! from ${teamCaptainId}'s team!`, components: [] });
    },
};