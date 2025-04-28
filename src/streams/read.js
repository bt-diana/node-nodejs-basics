import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const read = async () => {
    const filePath = resolve(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read();