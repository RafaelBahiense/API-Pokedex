import readline from 'readline';

export default function consoleMessages(message: string): void {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(message); 
}