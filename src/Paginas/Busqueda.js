import React, { useState } from 'react';

function BusquedaContactos() {
  const [query, setQuery] = useState('');
  const [contactos, setContactos] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      setContactos([]);
      setMensaje('');
      return;
    }

    setCargando(true);
    setMensaje('');

    try {
      const respuesta = await fetch(`http://localhost:5000/api/contactos/buscar?query=${encodeURIComponent(query.trim())}`,
        {
          credentials: 'include',
        }
      );

      if (!respuesta.ok) {
        throw new Error('Error en la búsqueda');
      }

      const data = await respuesta.json();

      if (data.success) {
        setContactos(data.data);
        setMensaje(data.data.length === 0 ? 'No se encontraron contactos.' : '');
      } else {
        setContactos([]);
        setMensaje(data.message || 'No se encontraron contactos');
      }
    } catch (error) {
      setContactos([]);
      setMensaje('Error al buscar contactos.');
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Buscar contactos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={cargando}>
          {cargando ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      <ul>
        {contactos.map((contacto) => (
          <li key={contacto.Id_Contacto} style={{ marginBottom: '1rem' }}>
            <img
              src={contacto.Imagen}
              alt={contacto.Nombre}
              style={{ width: '50px', height: '50px', marginRight: '1rem' }}
            />
            <strong>{contacto.Nombre}</strong> — {contacto.Cargo} — {contacto.Telefono} — {contacto.Ciudad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusquedaContactos;
