import React, {Component} from "react";
import "./App.css";
import Titulo from "./componentes/Titulo"
import Pa from "./componentes/Paragrafo"
//import { nome, sobrenome } from './componentes/Pessoa'
//import * as pessoa from './componentes/Pessoa'
import { nome as usuario } from './componentes/Pessoa'
import MeuBotao from './componentes/Botao'
import Detalhes from './componentes/Detalhes'
import Contador from './componentes/Contador'
import Turma from './componentes/Turma'
import Contador2 from './componentes/Contador2'
import Formulario from './componentes/Formulario'
import FormularioClasse from './componentes/FormularioClasse'
import VizualizadorContador from './componentes/VizualizadorContador'
import Fragmento from './componentes/Fragmento'

// function App() {
//   return (
//     <div className="App">
//       <h2>Header</h2>
//       <Titulo></Titulo>
//       <Pa></Pa>
//       <h3>Footer</h3>
//     </div>
//   );
// }

//class App extends React.Component {
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Titulo />
        <Pa texto="Meu texto ..."></Pa> */}
        {/* <MeuBotao rotulo={2}></MeuBotao> */}
        {/* <MeuBotao>Confirmar aqui!</MeuBotao> */}
        {/* <Detalhes nome='Fernando' data='03/08/1980' naturalidade='Fpolis' profissao='Dev'></Detalhes> */}
        {/* <Contador></Contador>
        <Turma></Turma>
        <Contador2></Contador2> */}
        <Formulario></Formulario>
        {/* <FormularioClasse></FormularioClasse> */}
        <VizualizadorContador></VizualizadorContador>
        <Fragmento></Fragmento>
      </div>

    );
  }
}

// console.log(nome);
// console.log(sobrenome);
//console.log(pessoa.nome + " " + pessoa.sobrenome);
//console.log(usuario);

export default App;
