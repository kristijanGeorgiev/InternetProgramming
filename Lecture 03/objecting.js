const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    address: {
        city: 'Skopje',
        country: 'Macedonia',
    }
};
const describeObject = (something, level) => {
    for (const key in something) {
        const element = something[key];
        if (typeof element === 'object') {
            // do something
            console.log(`${key}:`);
            describeObject(element, level + 1);
        } else {
            const prefix = (level === 0) ? '' : ' '.repeat(level * 2);
            console.log(`${prefix}${key}: ${element}`);
        }
    }
};
describeObject(weko, 0);