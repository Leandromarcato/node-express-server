const router = require('express').Router();
const { iniciarSesion } = require('../controllers/auth.constrollers');


router.post('/login', iniciarSesion )


module.exports = router;