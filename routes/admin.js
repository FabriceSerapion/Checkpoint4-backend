const router = require('express').Router();
const controllerusers = require('../controllers/user');
const controlleradmin = require('../controllers/admin');

router.post('/contenu', controllerusers.addContenu);
router.put('/contenu/:id', controllerusers.updateContenu);
router.delete('/contenu/:id', controlleradmin.deleteContenu);


module.exports = router;