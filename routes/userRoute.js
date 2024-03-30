const express = require('express');
const router = express.Router();

const { userView, master, category, termsCondition, privacyPolicy } = require('../controllers/userController');


router.get('/', userView);
router.get('/index', userView);
router.get('/master', master);
router.get('/grocery', category);

router.get('/terms_condition', termsCondition);
router.get('/privacy_policy', privacyPolicy);


module.exports = router;