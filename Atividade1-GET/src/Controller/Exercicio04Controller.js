const AnoBissexto = require('../Model/Exercicio04Model');

const Exercicio04Controller = (req, res) => {
    const {year} = req.body;
    const resultado = AnoBissexto(year);
    return resultado ? res.status(200).json({result: resultado}) : res.status(400).send('forneça um valor');

};
module.exports = Exercicio04Controller;