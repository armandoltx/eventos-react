import React, { Fragment } from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
// en realidad importamos la clase, no el Provider en si.


function App() {
  return (
    <CategoriasProvider>
      {/* El provider wrap otro componente que es donde se van a poder usar los datos
      hay que anadir el childern en el provider component los datos de categorias van a estar disponibles en el header*/}
      <Header />
    </CategoriasProvider>
  );
}

export default App;