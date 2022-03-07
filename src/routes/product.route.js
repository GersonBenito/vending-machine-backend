const { Router } = require('express');

const router = Router();

const product = require('../controllers/product.controller');

router.post('/', product.addProduct);
router.get('/', product.getAllProducts);
router.put('/:id', product.updateProduct);
router.delete('/:id', product.deleteProduct);

module.exports = router;