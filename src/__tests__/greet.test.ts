import { createGreetCommand } from '../commands/greet';
import { Command } from 'commander';

describe('greet command', () => {
    let command: Command;

    beforeEach(() => {
        command = createGreetCommand();
    });

    it('should greet a person with a name', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        command.parse(['node', 'test', 'John']);
        expect(consoleSpy).toHaveBeenCalledWith('Hello, John!');
        consoleSpy.mockRestore();
    });

    it('should greet a person with a name and title', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        command.parse(['node', 'test', 'John', '--title', 'Dr.']);
        expect(consoleSpy).toHaveBeenCalledWith('Hello, Dr. John!');
        consoleSpy.mockRestore();
    });
});
