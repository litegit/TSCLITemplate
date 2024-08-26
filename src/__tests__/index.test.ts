// src/__tests__/index.test.ts
import { execSync } from 'child_process';

test('greet command', () => {
    const output = execSync('ts-node src/index.ts greet John').toString();
    expect(output).toContain('Hello, John!');
});