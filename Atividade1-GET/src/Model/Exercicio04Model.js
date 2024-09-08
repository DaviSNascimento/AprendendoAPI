const AnoBissexto = (year) => {
    if (year){
        year = parseInt(year);
        operacao = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    } else (isNaN(year) || year < 0); 
    
    return operacao ?`${year} é ano Bissexto` : `${year} não é ano Bissexto`  || `${year} não é um numero`;
};
// console.log(AnoBissexto(2024));


module.exports = AnoBissexto;