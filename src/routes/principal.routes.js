const { Router } = require('express');

const router = Router();

const products = require('./product.route');
router.use('/product', products);

module.exports = router;