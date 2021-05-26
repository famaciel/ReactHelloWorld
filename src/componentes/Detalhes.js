import React from 'react'

const Detalhes = (props) => {
    return (
        <div>
            <h3>Dados da Pessoa:</h3>
            <p>Nome: {props.nome}</p>
            <p>Data: {props.data}</p>
            <p>Natual de: {props.naturalidade}</p>
            <p>Profissão: {props.profissao}</p>
        </div> 
        
    );
}

export default Detalhes;