const express = require('express');
const MainController = require('./Controller/MainController');
const Ex01Controller = require ('./Controller/Exercicio01Controller');
const Ex02Controller = require('./Controller/Exercicio02Controller');
const Ex03Controller = require('./Controller/Exercicio03Controller');
const Ex04Controller = require('./Controller/Exercicio04Controller');
const Ex05Controller = require('./Controller/Exercicio05Controller');
const Ex06Controller = require('./Controller/Exercicio06Controller');
const router = express.Router();

router.get('/', MainController);
router.get('/exercicio01', Ex01Controller);
router.post('/exercicio02', Ex02Controller);
router.post('/exercicio03', Ex03Controller);
router.post('/exercicio04', Ex04Controller);
router.post('/exercicio05', Ex05Controller);
router.post('/exercicio06', Ex06Controller);

router.get('./Investimento.js', (req, res) =>{});



module.exports = router;
