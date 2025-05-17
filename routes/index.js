const express = require('express');
const router = express.Router();
const { hardDelete, softDelete } = require('../controllers/baseController');

// Ruta para eliminación física (DELETE)
router.delete('/items/hard/:id', hardDelete);

// Ruta para eliminación lógica (PATCH)
router.patch('/items/soft/:id', softDelete);

module.exports = router;