import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const compress = async () => {
    const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
    const arcPath = resolve(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(arcPath);

    await pipeline(source, gzip, destination);
    await unlink(filePath);
};

await compress();