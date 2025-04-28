import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const decompress = async () => {
    const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
    const arcPath = resolve(__dirname, 'files', 'archive.gz');

    const gunzip = createGunzip();
    const source = createReadStream(arcPath);
    const destination = createWriteStream(filePath);

    await pipeline(source, gunzip, destination);
    await unlink(arcPath);
};

await decompress();