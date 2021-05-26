import React from 'react';
import './Botao.css';
import styled from "styled-components";


//const Botao = () => <button>Rotulo</button>;

// const Botao = (props) => {
//     return <button>{props.rotulo}</button>
// }

//const Botao = (props) => <button>{props.rotulo}</button>;

//const Botao = ({rotulo}) => <button>{rotulo}</button>;

//const Botao = ({children}) => <button>{children}</button>

class Botao extends React.Component {
    render() {
      //return <button>{this.props.children}</button>;
      const { children, funcaoQuandoClicar } = this.props;
      //return <button className='botao-azul'>{children}</button>;
    //   return (
    //     <button
    //         style={{
    //             color: '#fff',
    //             backgroundColor: "#007bff",
    //             borderColor: '#007bff'
    //         }}
    //     >
    //         {children}
    //     </button>
    //   );
    //return <button className="btn btn-primary">{children}</button>;
    return <BotaoEstilizado onClick={funcaoQuandoClicar}>{children}</BotaoEstilizado>;
    }
  }
  
  const BotaoEstilizado = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    `;


export default Botao;