import React from 'react';
import '../Css/Contactos.css';

function Contactos({ contactos, onAgregarClick, onContactoClick }) {
  return (
    <div className="contenedor">
      <div className="contenedor-boton">
        <button className="btnagregar" onClick={onAgregarClick}>
          + Agregar Contactos
        </button>
      </div>

      {contactos.length === 0 ? (
        <p>Cargando contactos...</p>
      ) : (
        contactos.map(contacto => {
          // Log para debuggear qué estructura tiene el contacto
          console.log('Contacto:', contacto);
          
          return (
            <div 
              key={contacto.idContacto} 
              className="contacto-card"
              onClick={() => onContactoClick(contacto.idContacto)}
              style={{ cursor: 'pointer' }}
            >
              <div className="imagen-container">
                <img 
                  src={contacto.imagen || contacto.Imagen || '/default-avatar.png'} 
                  alt={`avatar${contacto.id || contacto.idContacto}`} 
                  className="avatar" 
                />
              </div>
              <div className="info-container">
                <h3 className="nombre">{contacto.nombre || contacto.Nombre}</h3>
                <p className="cargo">{contacto.cargo || contacto.Cargo}</p>
                <p className="tel">{contacto.telefono || contacto.Telefono}</p>
                <p className="ciudad">📍 {contacto.ciudad || contacto.Ciudad}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Contactos;