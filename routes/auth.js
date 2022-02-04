const controller = require('../controllers/auth');

const router = require('express').Router();

router.post('/signin', controller.signin);
router.post('/signup', controller.signup);

module.exports = router;