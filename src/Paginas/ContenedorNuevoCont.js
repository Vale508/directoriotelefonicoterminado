import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NuevoContacto from '../Componentes/Nuevocontacto';

function ContenedorNuevoCont() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    telefono: '',
    ciudad: '',
    imagen: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('apidirectoriotelefonicoterminado.vercel.app/api/contactos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setMensaje('Contacto creado correctamente');
        setTimeout(() => navigate('/principal'), 1500);
      } else {
        setMensaje('⚠️ ' + data.message);
      }
    } catch (error) {
      console.error('Error al crear contacto:', error);
      setMensaje('Error al conectar con el servidor');
    }
  };

  return (
    <NuevoContacto
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      mensaje={mensaje}
    />
  );
}

export default ContenedorNuevoCont;
