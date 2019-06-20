import React from 'react';
import Evento from './Evento';
import { EventosConsumer } from '../context/EventosContext';
// donde quieras acceder a los datos tienes que usar los consumers, en este caso queremos usar los datos de los eventos para enseñarlos asi que importamos el consumer de estos

const ListaEventos = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventosConsumer>
        {(value) => {
          console.log('desde ListaEventos');
          console.log(value);
          return (
            value.eventos.map((evento) => (
              <Evento
                key={evento.id}
                evento={evento}
              />
            ))
          )

        }}
      </EventosConsumer>
    </div>
  );
};

export default ListaEventos;