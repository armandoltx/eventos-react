import React, { Component } from 'react';
import axios from 'axios';


// Crear el context
const EventosContext = React.createContext();
// Consumer
export const EventosConsumer = EventosContext.Consumer

class EventosProvider extends Component {

  token = 'V6N5WXHCFDL3NU73VIYH';
  ordenar = "date";

  state = {
    eventos: [],
  }

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=en_AU`;

    // Consultar la api con la url

    const eventos = await axios(url);
    //CAmbiar el state para anadir los eventos
    // console.log('obtenerEventos');
    // console.log(eventos.data.events);

    this.setState({
      eventos : eventos.data.events
    })

  }

  render() {
    return (
      <EventosContext.Provider
        value= {{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;