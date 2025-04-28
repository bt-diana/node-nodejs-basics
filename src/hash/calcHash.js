import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const calculateHash = async () => {
    const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileContent = await readFile(filePath);
    const hash = createHash('sha256').update(fileContent.toString()).digest('hex');
    console.log(hash);
};

await calculateHash();