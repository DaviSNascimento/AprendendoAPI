function EncontrarMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new TypeError("O argumento deve ser um array válido e não vazio.");
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return `O menor número é ${min} e o maior número é ${max}.`;
}

module.exports = EncontrarMinMax;

// console.log(encontrarMinMax([3, 7, 1, 9, 4]));
