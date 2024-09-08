const Investimento = require('../Model/Exercicio02Model');

const Ex02Controller = (req, res) =>{
    const {C , i, t} = req.body;
    
    const resultado = Investimento(C, i, t);
        return C, i, t ? res.status(200).json({result: resultado}) :res.status(400).send('forneça um valor');  

}

module.exports = Ex02Controller;