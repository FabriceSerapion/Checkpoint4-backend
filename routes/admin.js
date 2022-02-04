const router = require('express').Router();
const controllerusers = require('../controllers/user');
const controlleradmin = require('../controllers/admin');
const controllerpublic = require('../controllers/public');

const verifyIfContenuExist = require('../middlewares/contenu');

router.get('/contenu', controllerpublic.selectAllContenu, controllerpublic.selectOneContenuById)
router.post('/contenu', controllerusers.addContenu);
router.put('/contenu/:id', verifyIfContenuExist.checkContenuExist, controllerusers.updateContenu);
router.delete('/contenu/:id', controlleradmin.deleteContenu);


module.exports = router;