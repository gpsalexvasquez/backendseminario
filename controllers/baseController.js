const Item = require('../models/item');

// Eliminación física (DELETE permanente)
exports.hardDelete = async (req, res) => {
  try {
    const success = await Item.hardDelete(req.params.id);
    success ? res.status(204).end() 
            : res.status(404).json({ error: 'Item no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar permanentemente' });
  }
};

// Eliminación lógica (Soft Delete - Recomendado)
exports.softDelete = async (req, res) => {
  try {
    const success = await Item.softDelete(req.params.id);
    success ? res.status(200).json({ message: 'Item marcado como eliminado' })
            : res.status(404).json({ error: 'Item no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al marcar como eliminado' });
  }
};