const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const testRoutes = require('./testRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/test', testRoutes);

module.exports = router;

