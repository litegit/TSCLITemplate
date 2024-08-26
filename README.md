# My CLI Tool

## Installation
```sh
npm install -g my-cli
```
## Usage
```sh
my-cli greet John
```
## License
MIT
```
```
# Learn to build a typescript project
## Setup
1. **Initialize a new npm project**:
   ```sh
   npm init -y
   ```

2. **Install TypeScript and necessary dependencies**:
   ```sh
   npm install typescript ts-node @types/node --save-dev
   ```

3. **Create a `tsconfig.json` file**:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src/**/*"]
   }
   ```

4. **Create the project structure**:
   ```sh
   mkdir src
   touch src/index.ts
   ```

5. **Write your TypeScript code in `src/index.ts`**:
   ```typescript
   console.log('Hello, TypeScript CLI!');
   ```

6. **Add a script to `package.json` to run the TypeScript code**:
   ```json
   "scripts": {
     "start": "ts-node src/index.ts"
   }
   ```

7. **Run the CLI program**:
   ```sh
   npm start
   ```
   
## Organize
1. **Project Structure**:
    - Organize your project files in a logical structure.
    - Example:
      ```
      /project-root
      ├── /src
      │   ├── /commands
      │   ├── /utils
      │   └── index.ts
      ├── /dist
      ├── package.json
      ├── tsconfig.json
      └── README.md
      ```

2. **TypeScript Configuration**:
    - Ensure `tsconfig.json` is properly configured for your project needs.
    - Example:
      ```json
      {
        "compilerOptions": {
          "target": "ES6",
          "module": "commonjs",
          "outDir": "./dist",
          "rootDir": "./src",
          "strict": true,
          "esModuleInterop": true
        },
        "include": ["src/**/*"]
      }
      ```

3. **Scripts in `package.json`**:
    - Add useful scripts for development and production.
    - Example:
      ```json
      "scripts": {
        "start": "ts-node src/index.ts",
        "build": "tsc",
        "lint": "eslint . --ext .ts",
        "test": "jest"
      }
      ```

4. **Dependencies**:
    - Separate dependencies and devDependencies appropriately.
    - Example:
      ```json
      "dependencies": {
        "commander": "^9.0.0"
      },
      "devDependencies": {
        "@types/node": "^22.5.0",
        "ts-node": "^10.9.2",
        "typescript": "^5.5.4",
        "eslint": "^8.0.0",
        "jest": "^29.0.0"
      }
      ```

5. **Command Handling**:
    - Use a library like `commander` to handle CLI commands.
    - Example:
      ```typescript
      // src/index.ts
      import { Command } from 'commander';
      const program = new Command();
 
      program
        .name('my-cli')
        .description('My CLI tool')
        .version('1.0.0');
 
      program
        .command('greet <name>')
        .description('Greet a person')
        .action((name) => {
          console.log(`Hello, ${name}!`);
        });
 
      program.parse(process.argv);
      ```

6. **Error Handling**:
    - Implement proper error handling and user-friendly messages.
    - Example:
      ```typescript
      // src/utils/errorHandler.ts
      export function handleError(error: Error): void {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
      ```

7. **Documentation**:
    - Maintain a `README.md` with clear instructions on how to use and develop the CLI.
    - Example:
      ```markdown
      # My CLI Tool
 
      ## Installation
      ```sh
      npm install -g my-cli
      ```

      ## Usage
      ```sh
      my-cli greet John
      ```
      ```

8. **Testing**:
    - Write tests for your CLI commands.
    - Example:
      ```typescript
      // src/__tests__/index.test.ts
      import { execSync } from 'child_process';
 
      test('greet command', () => {
        const output = execSync('ts-node src/index.ts greet John').toString();
        expect(output).toContain('Hello, John!');
      });
      ```
      
## Common libraries used for building TypeScript CLI programs?
1. **commander**: A popular library for building command-line interfaces.
   ```sh
   npm install commander
   ```

2. **yargs**: Another powerful library for building CLI tools.
   ```sh
   npm install yargs
   ```

3. **inquirer**: A library for creating interactive command-line prompts.
   ```sh
   npm install inquirer
   ```

4. **chalk**: Used for styling terminal string output.
   ```sh
   npm install chalk
   ```

5. **ora**: A library for creating elegant terminal spinners.
   ```sh
   npm install ora
   ```

6. **figlet**: A library for creating ASCII art from text.
   ```sh
   npm install figlet
   ```

7. **dotenv**: For loading environment variables from a `.env` file.
   ```sh
   npm install dotenv
   ```

8. **log4js**: A logging library for logging messages to the console and files.
   ```sh
   npm install log4js
   ```
   
## jest testing
To import the correct Jest files for testing in a TypeScript project, follow these steps:

1. **Install Jest and its TypeScript dependencies**:
   ```sh
   npm install --save-dev jest ts-jest @types/jest
   ```

2. **Create a Jest configuration file**:
   ```sh
   npx ts-jest config:init
   ```

3. **Update the Jest configuration in `jest.config.js`**:
   ```javascript
   module.exports = {
     preset: 'ts-jest',
     testEnvironment: 'node',
     testMatch: ['**/__tests__/**/*.test.ts'],
   };
   ```

4. **Update your test file to use Jest**:
   ```typescript
   // src/__tests__/index.test.ts
   import { execSync } from 'child_process';

   test('greet command', () => {
     const output = execSync('ts-node src/index.ts greet John').toString();
     expect(output).toContain('Hello, John!');
   });
   ```

5. **Add a test script to `package.json`**:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

6. **Run the tests**:
   ```sh
   npm test
   ```
   
## ESLint
### Plan:
1. Install ESLint and necessary plugins.
2. Initialize ESLint configuration.
3. Configure ESLint for TypeScript.
4. Add ESLint scripts to `package.json`.
5. Create an ESLint ignore file.

### Steps:

1. **Install ESLint and necessary plugins**:
   ```sh
   npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

2. **Initialize ESLint configuration**:
   ```sh
   npx eslint --init
   ```

3. **Configure ESLint for TypeScript**:
   Update the `.eslintrc.json` file:
   ```json
   {
     "env": {
       "browser": true,
       "es2021": true,
       "node": true
     },
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended"
     ],
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module"
     },
     "plugins": [
       "@typescript-eslint"
     ],
     "rules": {
       // Add custom rules here
     }
   }
   ```

4. **Add ESLint scripts to `package.json`**:
   ```json
   "scripts": {
     "lint": "eslint . --ext .ts",
     "lint:fix": "eslint . --ext .ts --fix"
   }
   ```

5. **Create an ESLint ignore file**:
   Create a `.eslintignore` file:
   ```
   node_modules/
   dist/
   ```

### Final Project Structure:
```
/project-root
├── /src
│   ├── /commands
│   ├── /utils
│   └── index.ts
├── /dist
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .eslintignore
└── README.md
```
## update dependencies
### Plan:
1. Use the `npm-check-updates` (ncu) package to update the dependencies in `package.json`.
2. Add a script in `package.json` to automate the dependency update process.

### Steps:
1. **Install `npm-check-updates`**:
   ```sh
   npm install -g npm-check-updates
   ```

2. **Add a script in `package.json`**:
   ```json
   {
     "scripts": {
       "update-deps": "ncu -u && npm install"
     }
   }
   ```

3. **Run the script**:
   ```sh
   npm run update-deps
   ```

This will update the dependencies in `package.json` to their latest versions and install them.


