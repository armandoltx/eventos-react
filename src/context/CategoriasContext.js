import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
// Consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

  token = 'V6N5WXHCFDL3NU73VIYH';

  state = {
    categorias: [],
  }

  //Una vez cargue el componente se va a hacer la consulta por eso usamos componentDidMount
  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=en_AU`

    let categorias = await axios.get(url);

    console.log(categorias.data.categories);
    // Cambiar el state
    this.setState({
      categorias: categorias.data.categories
    })
  };

  render() {
    return (
      // Aunque la clase se llame CategoriasProvider, el provider es lo que tenemos aqui abajo
      <CategoriasContext.Provider
        value= {{
          categorias: this.state.categorias,
        }}
      > 
        {this.props.children}
        {/* para que el componente hijo pueda leer los datos, en este caso los datos son categorias que le pasamos al componente header */}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;