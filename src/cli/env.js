const parseEnv = () => {
    const regex = new RegExp("^RSS_");
    const result = Object.entries(process.env)
        .filter(([key]) => regex.test(key))
        .map(([key, value]) => `${key}=${value};`)
        .join(' ');
    console.log(result);
};

parseEnv();