const express = require('express');
const router = express.Router();

const { userView, master, category, termsCondition } = require('../controllers/userController');


router.get('/', userView);
router.get('/index', userView);
router.get('/master', master);
router.get('/grocery', category);

router.get('/terms_condition', termsCondition);


module.exports = router;