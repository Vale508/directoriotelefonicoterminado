import React from "react";
import Formuini from '../Paginas/Formuini'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formuregis from "../Paginas/Formuregis";
import Principal from "../Paginas/Principal"
import NuevoContacto from '../Paginas/ContenedorNuevoCont';
import Perfil from "../Paginas/Perfil";
import EncabezadoContainer from '../Paginas/ContenedorEncabezado';
import Busqueda from '../Paginas/Busqueda';



function App(){
    return(
        <Router>
            <Routes>
               <Route path="/" element={<Formuini/>}/>
               <Route path="/registro" element={<Formuregis/>}/> 
               <Route path="/principal" element={<Principal/>}/>  
               <Route path="/nuevo-contacto" element={<NuevoContacto/>}/>
               <Route path="/perfil/:id" element={<Perfil />} />
               <Route path="/Encabezado" element={<EncabezadoContainer />} />
               <Route path="/busqueda" element={<Busqueda />} />
            </Routes>
        </Router>
    )
}
export default App;