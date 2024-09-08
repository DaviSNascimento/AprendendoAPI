const ContadorChar = (texto, letra) =>{
    let contador = 0;
    
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();
    for (let i = 0; i < texto.length; i++) {

         operacao = texto[i] === letra && contador++;
        // console.log(operacao);
        
    }

    return  `${texto} possue ${contador} letra(s) ${letra}`;
};
// console.log(ContadorChar("Andrea", "a"));

module.exports = ContadorChar;