import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const list = async () => {
    const dirPath = resolve(__dirname, 'files');

    try {
        const files = await readdir(dirPath, {withFileTypes: true});
        files.forEach((file) => {
            console.log(file.name);
        });
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }
};

await list();