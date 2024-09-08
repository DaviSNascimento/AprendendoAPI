const EncontrarMinMax = require('../Model/Exercicio05Model');

const EncontrarMinMaxController = (req, res) => {
    const {arr} = req.body;
    const resultado = EncontrarMinMax(arr);
    return resultado ? res.status(200).json(resultado) : res.status(400).send('forneça uma array json');
};

module.exports = EncontrarMinMaxController;