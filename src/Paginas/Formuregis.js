import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Encabezadoformu from '../Componentes/Encabezadoformu';
import LiquidEther from '../Componentes/LiquidEther'; 
import '../Css/Formuini.css'

const Formuregis = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const manejarRegistro = async (e) => {
    e.preventDefault();
    if (!nombre || !correo || !contrasena) {
      setMensaje('Todos los campos son obligatorios.');
      return;
    }

    const datos = { nombre, correo, contrasena };

    try {
      const respuesta = await fetch('apidirectoriotelefonicoterminado.vercel.app/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();

      if (resultado.success) {
        setMensaje('Registro exitoso');
        setNombre('');
        setCorreo('');
        setContrasena('');
      } else {
        setMensaje(resultado.message || 'Error al registrar');
      }
    } catch (error) {
      setMensaje('Error al conectar con el servidor');
    }
  };
  const irInicio = () => {
    navigate('/');
  };


  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <Encabezadoformu />
        <div className="formulario">
          <h2 className='titulo2'>Registrarse</h2>
          <form onSubmit={manejarRegistro}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Correo:</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>
            <div className='contenedorbtn'>
            <button type="submit">Registrarse</button>
            <button type="submit" onClick={irInicio}>Iniciar sesion</button>
            </div>
          </form>
          {mensaje && <p style={{ marginTop: '10px', color: 'purple' }}>{mensaje}</p>}
        </div>
      </div>
    </div>
  );
};

export default Formuregis;
