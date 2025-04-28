import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const copy = async () => {
    const dirPath = resolve(__dirname, 'files');
    const newDirPath = resolve(__dirname, 'files-copy');
    let files;

    try {
        files = await readdir(dirPath, {withFileTypes: true});
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }

    try {
        await mkdir(newDirPath);
    } catch (e) {
        if (e.code === 'EEXIST') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    }

    files.forEach((file) => {
        copyFile(
            resolve(dirPath, file.name),
            resolve(newDirPath, file.name),
        );
    });
};

await copy();
