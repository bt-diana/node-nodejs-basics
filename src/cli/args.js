const parseArgs = () => {
    const regex = new RegExp("^--(.+)");
    const result = process.argv
        .slice(2)
        .reduce((arr, value) => {
            if (regex.test(value)) {
                arr.push([value.match(regex)[1]]);
            } else {
                const lastArg = arr.at(-1);
                if (lastArg.length < 2) {
                    arr.at(-1).push(value);
                }
            }
            return arr;
        }, [])
        .map(([arg, value]) => `${arg} is ${value}`)
        .join(', ');
    console.log(result);
};

parseArgs();