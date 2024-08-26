// src/index.ts
import { Command } from 'commander';
import { createGreetCommand } from './commands/greet';
import { createGoodbyeCommand } from './commands/goodbye';

const program = new Command();

program
    .name('my-cli')
    .description('My CLI tool')
    .version('1.0.0');

program.addCommand(createGreetCommand());
program.addCommand(createGoodbyeCommand());

program.parse(process.argv);

// console.log('Thank you for using WebStorm for CLI Programs 💙')