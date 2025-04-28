import { unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const remove = async () => {
    const fileToRemovePath = resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(fileToRemovePath);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }
    
};

await remove();