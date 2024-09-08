const ContadorChar = require('../Model/Exercicio03Model')

const ContadorCharController = (req, res) => {
    const {texto, letra} = req.body;
    const resultado = ContadorChar(texto, letra);
    return resultado ? res.status(200).json({result:resultado}) : res.status(400).send('forneça um valor');
};
module.exports = ContadorCharController;