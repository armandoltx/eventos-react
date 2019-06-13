import React, { Component } from 'react';
import Axios from 'axios';


// Crear el context
const EventosContext = React.createContext();
// Consumer
export const EventosConsumer = CategoriasContext.Consumer

class EventosProvider extends Component {

  token = 'V6N5WXHCFDL3NU73VIYH';
  ordenar = "date";

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${thistoken}&locale=en_AU`

    let eventos = await Axios.post(url);
  }

  render() {
    return (
      <EventosContext.Provider>
        value= {{}}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;