// src/commands/greet.ts
import { Command } from 'commander';

export function createGreetCommand(): Command {
    const greetCommand = new Command('greet');

    greetCommand
        .argument('<name>', 'name to greet')
        .option('--title <title>', 'title to use in the greeting')
        .description('Greet a person')
        .action((name, options) => {
            const title = options.title ? `${options.title} ` : '';
            console.log(`Hello, ${title}${name}!`);
        });

    return greetCommand;
}

