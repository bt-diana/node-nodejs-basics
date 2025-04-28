import { Transform } from 'node:stream';

const reverseTranform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join('') + '\n\n');
  }
});

const transform = async () => {
    process.stdin.pipe(reverseTranform).pipe(process.stdout);
};

await transform();