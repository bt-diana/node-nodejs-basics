import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
    const scriptPath = resolve(__dirname, 'files', 'script.js');

    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['first test', 'second test', 'third test']);
