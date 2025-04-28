import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { resolve } from 'node:path';
const __dirname = import.meta.dirname;

const performCalculations = async () => {
    const filePath = resolve(__dirname, 'worker.js');
    const cpusAmount = cpus().length;
    const workers = new Array(cpusAmount);

    const createWorker = (filePath, workerData) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(filePath, {workerData: workerData});
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }

    for (let i = 0; i < cpusAmount; i++) {
        workers[i] = createWorker(filePath, 10 + i);
    }

    const results = await Promise.allSettled(workers);
    console.log(results);
};

await performCalculations();