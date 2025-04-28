import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { createInterface } from 'readline';

const __dirname = import.meta.dirname;

const write = async () => {
    const filePath = resolve(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(filePath);
    const rl = createInterface(process.stdin);

    rl.on('line', (input) => {
        writeStream.write(input);
        writeStream.write('\n');
    });
};

await write();