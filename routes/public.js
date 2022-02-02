const router = require('express').Router();
const controller = require('../controllers/public');

router.get('/', controller.selectAllContenu);
router.get('/:id', controller.selectOneContenuById);


module.exports = router;