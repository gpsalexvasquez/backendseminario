const pool = require('../config/database');

const Item = {
  // ELIMINACIÓN FÍSICA (borrado permanente)
  hardDelete: async (id) => {
    const [result] = await pool.query(
      'DELETE FROM items WHERE id = ?', 
      [id]
    );
    return result.affectedRows > 0;
  },

  // ELIMINACIÓN LÓGICA (recomendada - solo marca como eliminado)
  softDelete: async (id) => {
    const [result] = await pool.query(
      'UPDATE items SET eliminado = 1 WHERE id = ?', 
      [id]
    );
    return result.affectedRows > 0;
  },

  // OPCIONAL: Recuperar item eliminado
  restore: async (id) => {
    const [result] = await pool.query(
      'UPDATE items SET eliminado = 0 WHERE id = ?', 
      [id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = Item;