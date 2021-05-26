import React, { Component } from "react";
import Botao from './Botao';

class Contador extends Component {
  
constructor(props) {
    super(props);
    this.state = {
        count: 0,
    };
    console.log("construindo");
}

componentDidMount = () => {
  console.log("Oi acabei de montar");
  document.title = this.state.count;
};

componentWillUnmount = () => {
  console.log("componentWillUnmount");
  document.title = "React App";
};



diminuiUm = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  somaUm = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Estou renderizando");
    return (
      <div>
        {/* <button onClick={this.diminuiUm}>-</button> */}
        <Botao funcaoQuandoClicar={this.diminuiUm}>-</Botao>
        <span>{this.state.count}</span>
        {/* <button onClick={this.somaUm}>+</button> */}
        <Botao funcaoQuandoClicar={this.somaUm}>+</Botao>
      </div>
    );
  }
}

export default Contador;
