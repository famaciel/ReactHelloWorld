import React from "react";

class FormularioClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campoTexto: "",
    };
  }

  cliqueEnviar = (evento) => {
    evento.preventDefault();
    console.log(this.state.campoTexto);
  };

  mudaValorTexto = (evento) => {
    this.setState({
      campoTexto: evento.target.value,
    });
  };

  render() {
    const { campoTexto } = this.state;
    return (
       <form onSubmit={this.cliqueEnviar}>
        <input value={campoTexto} type="text" onChange={this.mudaValorTexto} />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default FormularioClasse;
