import logo from '../Img/knd.png';
import '../Css/Encabezadoformu.css';
import TrueFocus from './Truefocus'; 

function Encabezadoformu() {
  return (
    <div className="formularios">
    <div className="arriba">
      <img src={logo} alt="hola" className="logito" />
      <h3 className="nombre">
        <TrueFocus
          sentence="Directorio Telefonico"
          blurAmount={3}
          borderColor="blue"
          glowColor="rgba(0, 0, 255, 0.6)"
          animationDuration={0.7}
          pauseBetweenAnimations={1}
          manualMode={false}
        />
      </h3>
    </div>
    </div>
  );
}

export default Encabezadoformu;
