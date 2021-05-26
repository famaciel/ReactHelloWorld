import React, {Component, Fragment} from "react";
import Contador from './Contador';
import Botao from './Botao';

class Fragmento extends Component {
   
    render() {
      return (
        // <p>Primeira linha</p>
        // <p>Segunda linha</p>
        <Fragment>
            <p>Primeira linha</p>
            <p>Segunda linha</p>
        </Fragment>
      );
    }
  }
  
 export default Fragmento;