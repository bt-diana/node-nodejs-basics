import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const read = async () => {
    const fileToReadPath = resolve(__dirname, 'files', 'fileToRead.txt');

    try {
        const fileContent = await readFile(fileToReadPath);
        console.log(fileContent.toString());
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }
};

await read();