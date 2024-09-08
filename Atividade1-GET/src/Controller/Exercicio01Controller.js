const AnalisarTexto = require('../Model/Exercicio01Model');

const Ex01Controller = (req, res) => {
    const texto = 'Beterraba';
    const resultado = AnalisarTexto(texto);
    return res.status(200).json({result: resultado});
}

module.exports = Ex01Controller;

