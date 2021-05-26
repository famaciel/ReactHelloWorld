import React, {Component} from "react";
import Contador from './Contador';
import Botao from './Botao';

class VizualizadorContador extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exibeContador: false,
      };
    }
  
    gerenciaContador = () => {
      this.setState({
        exibeContador: !this.state.exibeContador,
      });
    };

    renderizaContador = () => {
        const { exibeContador } = this.state;
        if (exibeContador) {
          return <Contador />;
        }
    
        return null;
      };    
  
    render() {
        const { exibeContador } = this.state;
      return (
        <div>
          {/* <Contador /> */}
          {/* {this.state.exibeContador && <Contador />} */}
          {/* {exibeContador && <Contador />} */}
          {this.renderizaContador()}
          <Botao funcaoQuandoClicar={this.gerenciaContador}>
            Exibe Contador
          </Botao>
        </div>
      );
    }
  }
  
 export default VizualizadorContador;