const router = require('express').Router();
const controller = require('../controllers/user');

const verifyIfContenuExist = require('../middlewares/contenu');


router.post('/contenu', controller.addContenu);
router.put('/contenu/:id', verifyIfContenuExist.checkContenuExist, controller.updateContenu);


module.exports = router;