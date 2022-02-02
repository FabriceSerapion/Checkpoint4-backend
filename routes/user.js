const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/contenu', controller.addContenu);
router.put('/contenu/:id', controller.updateContenu);


module.exports = router;