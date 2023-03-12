const removeFromArray = function(oldAray,...arg) {
    const newAray=oldAray.filter(x => !arg.includes(x));
    return newAray;
};

// Do not edit below this line
module.exports = removeFromArray;
