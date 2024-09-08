
function AnalisarTexto(texto){ 
    let totalVogal = 0;
    const arrayVogal = ['a','e','i','o','u'];

    for (let i = 0; i < texto.length; i++) {
        let vogais = texto[i].toLowerCase();

        if (vogais.match(/[a-z]/)) {
            if (arrayVogal.includes(vogais)) {
                totalVogal++;
            }
        } 
    }
    return (`A palavra ${texto} possue: ${totalVogal} vogal(ais).`);
};


module.exports = AnalisarTexto;
