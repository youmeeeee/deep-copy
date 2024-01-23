var deepCopy = (obj) => {
    let newObj = {};
    if (Array.isArray(obj)) {
        newObj = obj.map(item => (typeof obj === 'object' && obj !== null)  ? deepCopy(item) : item);
    } else if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            newObj[key] = deepCopy(obj[key])
        }
    } else { 
        newObj = obj;
    }
    return newObj;
};

module.exports = deepCopy;