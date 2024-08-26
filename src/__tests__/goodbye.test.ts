import { createGoodbyeCommand } from '../commands/goodbye';
import { Command } from 'commander';

describe('goodbye command', () => {
    let command: Command;

    beforeEach(() => {
        command = createGoodbyeCommand();
    });

    it('should say goodbye to a person with a name', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        command.parse(['node', 'test', 'John']);
        expect(consoleSpy).toHaveBeenCalledWith('Goodbye, John!');
        consoleSpy.mockRestore();
    });

    it('should say goodbye to a person with a name and title', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        command.parse(['node', 'test', 'John', '--title', 'Dr.']);
        expect(consoleSpy).toHaveBeenCalledWith('Goodbye, Dr. John!');
        consoleSpy.mockRestore();
    });
});