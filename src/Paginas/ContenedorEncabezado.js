import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Encabezado from '../Componentes/Encabezado';

function EncabezadoContainer() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');

  // ✅ Cerrar sesión
  const cerrarSesion = async () => {
    try {
      console.log('Intentando cerrar sesión...');
      const res = await fetch('apidirectoriotelefonicoterminado.vercel.app/api/cerrarsesi', {
        method: 'POST',
        credentials: 'include', // necesario para enviar cookies de sesión
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      console.log('Respuesta del servidor:', data);

      if (data.success) {
        alert('Sesión cerrada correctamente');
        navigate('/'); // redirige al login
      } else {
        alert(data.message || 'No se pudo cerrar la sesión');
      }
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
      alert('Error al cerrar sesión. Intenta nuevamente.');
    }
  };

  // ✅ Buscar contacto
  const manejarBuscar = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== '') {
      navigate(`/busqueda?q=${encodeURIComponent(busqueda)}`);
    }
  };

  return (
    <Encabezado
      busqueda={busqueda}
      onBusquedaChange={(e) => setBusqueda(e.target.value)}
      onBuscar={manejarBuscar}
      onCerrarSesion={cerrarSesion}
    />
  );
}

export default EncabezadoContainer;
