import { rename as fsRename, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const rename = async () => {
    const oldPath = resolve(__dirname, 'files', 'wrongFilename.txt');
    const newPath = resolve(__dirname, 'files', 'properFilename.md');
    let stats;

    try {
        stats = await stat(newPath);
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
    }

    if (stats) {
        throw Error('FS operation failed');
    }

    try {
        await fsRename(oldPath, newPath);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }
};

await rename();