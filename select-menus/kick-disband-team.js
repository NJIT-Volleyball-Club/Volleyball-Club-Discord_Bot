const { ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'kickDisbandTeam',
    },
    async execute(interaction) {
        await interaction.deferUpdate();
        const option = interaction.values[0];
        const optionId = JSON.parse(option).optionId;
        const eventId = JSON.parse(option).eventId;

        if (optionId == 'kickPlayerList') {
            // TODO: get members' userids and usertags for team
            const members = ['mem1', 'mem2', 'mem3'];

            const selectMembers = new SelectMenuBuilder()
                .setCustomId('kickMember')
                .setPlaceholder('Members');
            for (let i = 0; i < members.length; i++) {
                selectMembers.addOptions(
                    {
                        label: members[i],
                        value: `{"playerId": "${members[i]}idHere", "eventId": "${eventId}"}`,
                    },
                );
            }
            const row = new ActionRowBuilder().addComponents(selectMembers);
            await interaction.editReply({ content: '**Kick a member**:', components: [row] });
        }
        else if (optionId == 'disbandTeam') {
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('confirmDisband')
                    .setLabel('Confirm')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('declineDisband')
                    .setLabel('Decline')
                    .setStyle(ButtonStyle.Danger),
            );
            await interaction.editReply({ content: '**Are you sure you want to disband your team?**:', components: [row] });
        }
        else {
            await interaction.editReply('unknown option');
        }
    },
};