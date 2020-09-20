const router = require('express').Router();
const { SetController } = require('../Controller/SetController');
router.post('/', (req, res) => {
    const setController = new SetController();
    let array = req.body.array;
    if(array) {
        setController.addNumbers(req.body.array);
        res.status(201).json(setController.getSet());
        return;
    }
    res.status(400).json({
        message: 'Requisição Inválida, deve ser um JSON com um campo denominado array'
    });
});

module.exports = app => app.use(router);