const LoteriaModel = (escolhasUsuario = [])=>{
        const sorteioLoteria = [];
    

        while (sorteioLoteria.length < 6) {
            const num = Math.floor(Math.random() * 60) + 1;
            if (!sorteioLoteria.includes(num)) {
                sorteioLoteria.push(num);
            }
        }    
            const acertos = escolhasUsuario.filter(num => sorteioLoteria.includes(num));
    
        return `Números sorteados: ${sorteioLoteria}. Você acertou ${acertos.length} número(s).`;
    
};

// console.log(LoteriaModel([53, 47, 42, 33, 12, 26]));
module.exports = LoteriaModel;