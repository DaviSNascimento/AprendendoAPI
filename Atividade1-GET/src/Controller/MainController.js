const MainModel = require('../Model/MainModel.json');

const MainController = (req, res) => res.status(200).send(MainModel);

module.exports = MainController;