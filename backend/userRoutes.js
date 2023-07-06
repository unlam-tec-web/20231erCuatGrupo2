const router = require('express').Router()


// Ruta GET para la página de inicio de sesión del usuario
router.get('/', (req, res) => {
  res.send("hola mundo");
});

router.get('/login', (req, res) => {
  res.send("holaaa");
});


module.exports = router;
