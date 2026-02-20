const router = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//router.post('/', userController.create);
//router.get('/id/:id', userController.findById);
router.get('/email/:email', userController.findByEmail);
router.get('/id/:id', authMiddleware, userController.findById);

module.exports = router;

