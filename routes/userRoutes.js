const router = require('express').Router();
const userController = require('../controllers/userController');

//router.post('/', userController.create);
router.get('/id/:id', userController.findById);
router.get('/email/:email', userController.findByEmail);

module.exports = router;
