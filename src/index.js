module.exports = function towelSort(matrix) {
    if (matrix === undefined)
        return [];
    let resArray = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0)
            resArray.push(...matrix[i])
        else
            resArray.push(...matrix[i].reverse())
    }
    return resArray;
}