const express = require('express');
const router = express.Router();
// const multer = require('multer');
const { productList, category, postAddProduct, addProduct, manualAddProduct, postCategory, getCategory, allProducts, ProductDetails, cart } = require('../controllers/productController');

const upload = require('../multer');

router.get('/product_list', productList);
router.get('/category', category);
router.post('/post_category', upload.fields([{ name: 'category_image', maxCount: 1 },]), postCategory);

router.get('/add_product/:id', addProduct);
router.get('/manual_add_product', manualAddProduct);

router.post('/post_add_product', upload.fields([
    { name: 'primary_image', maxCount: 1 },
    { name: 'category_image', maxCount: 1 },
    { name: 'secondary_image', maxCount: Infinity }
]), postAddProduct);


router.post('/get_category', getCategory);
router.get('/all_Products', allProducts);
router.get('/Product_details', ProductDetails);
router.get('/cart', cart);


module.exports = router;