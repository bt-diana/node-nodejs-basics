import { open } from 'node:fs/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const create = async () => {
    const filePath = resolve(__dirname, 'files', 'fresh.txt');

    let file;
    try {
        file = await open(filePath, 'wx');
        file.write("I am fresh and young");
    } catch (e) {
        if (e.code === 'EEXIST') {
            throw Error('FS operation failed');
        } else {
            throw e;
        }
    } finally {
        await file?.close();
    }
};

await create();