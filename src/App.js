import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import LstaEventos from './components/ListaEventos';

import CategoriasProvider from './context/CategoriasContext';
// en realidad importamos la clase, no el Provider en si.
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';


function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        {/* El provider wrap otro componente que es donde se van a poder usar los datos
        hay que anadir el childern en el provider component los datos de categorias van a estar disponibles en el header*/}
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;