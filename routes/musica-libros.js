const router = require("express").Router()
const DB_controller = require("../controllers/musica-libros")

router.post('/agregarElemento',DB_controller.postAgregarElemento)
router.get('/obtenerElemento',DB_controller.getObtenerElemento)
router.post('/actualizarElemento',DB_controller.postActualizarElemento)
router.post('/borrarElemento',DB_controller.postBorrarElemento)

module.exports = router