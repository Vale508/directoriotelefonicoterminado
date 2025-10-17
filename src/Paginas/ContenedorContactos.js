import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactosView from '../Componentes/Contactos';

function ContenedorContactos() {
  const [contactos, setContactos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('apidirectoriotelefonicoterminado.vercel.app/api/contactos')
      .then(res => res.json())
      .then(data => {
        console.log('Datos recibidos del backend:', data);
        if (data.success) {
          setContactos(data.data);
        } else {
          console.error('Error en respuesta del backend');
        }
      })
      .catch(err => {
        console.error('Error al obtener contactos:', err);
      });
  }, []);

  const handleAgregarClick = () => {
    navigate('/nuevo-contacto');
  };

  const handleContactoClick = (contactoId) => {
    navigate(`/perfil/${contactoId}`);
  };

  return (
    <ContactosView 
      contactos={contactos} 
      onAgregarClick={handleAgregarClick} 
      onContactoClick={handleContactoClick} 
    />
  );
}

export default ContenedorContactos;
