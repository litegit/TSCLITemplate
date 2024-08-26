// src/utils/errorHandler.ts
export function handleError(error: Error): void {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
