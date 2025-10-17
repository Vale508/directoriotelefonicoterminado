import React from 'react';
import '../Css/Nuevocontacto.css';

function NuevoContacto({ formData, handleChange, handleSubmit, mensaje }) {
  return (
    <div className="nuevo-contacto">
      <h2>Agregar Nuevo Contacto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo o puesto"
          value={formData.cargo}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagen"
          placeholder="URL de la imagen (opcional)"
          value={formData.imagen}
          onChange={handleChange}
        />

        <button type="submit">Guardar Contacto</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default NuevoContacto;