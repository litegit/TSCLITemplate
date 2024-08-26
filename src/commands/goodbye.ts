// src/commands/goodbye.ts
import { Command } from 'commander';

export function createGoodbyeCommand(): Command {
    const goodbyeCommand = new Command('goodbye');

    goodbyeCommand
        .argument('<name>', 'name to say goodbye to')
        .option('--title <title>', 'title to use in the farewell')
        .description('Say goodbye to a person')
        .action((name, options) => {
            const title = options.title ? `${options.title} ` : '';
            console.log(`Goodbye, ${title}${name}!`);
        });

    return goodbyeCommand;
}
