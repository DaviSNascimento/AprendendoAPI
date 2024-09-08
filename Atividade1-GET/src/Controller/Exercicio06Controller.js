const LoteriaModel = require('../Model/Exercicio06Model');

const LoteriaController = (req, res) => {
    const {escolhasUsuario} = req.body;
    const resultado = LoteriaModel(escolhasUsuario);
    return res.status(200).json({result: resultado});
};

module.exports = LoteriaController;
