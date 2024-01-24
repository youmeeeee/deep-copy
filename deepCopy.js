const deepCopy = (obj) => {
    if (Array.isArray(obj)) {
       return  newObj = obj.map(item => deepCopy(item));
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (let key in obj) {
            newObj[key] = deepCopy(obj[key])
        }
        return newObj;
    } else { 
        return obj;
    }
};

module.exports = deepCopy;