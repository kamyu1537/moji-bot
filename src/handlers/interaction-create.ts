import Eris, { CommandInteraction } from 'eris';

import { inviteCommand } from '../commands/invite';
import { rollCommand } from '../commands/roll';
import { randomCommand } from '../commands/random';
import { pickCommand } from '../commands/pick';

export const interactionCreateHandler = async (client: Eris.Client, interaction: Eris.Interaction) => {
  if (!(interaction instanceof CommandInteraction)) {
    return;
  }

  const command = interaction as CommandInteraction;
  switch (command.data.name) {
  case 'invite':
    await inviteCommand(client, command);
    break;
  case 'roll':
    await rollCommand(client, command);
    break;
  case 'random':
    await randomCommand(client, command);
    break;
  case 'pick':
    await pickCommand(client, command);
    break;
  }
};
