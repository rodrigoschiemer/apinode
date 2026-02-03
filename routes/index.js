const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.get('/health', (req,res)=>{
	res.status(200).json({
		status:"ok"
	});
});

router.use('/users', userRoutes);

module.exports = router;
