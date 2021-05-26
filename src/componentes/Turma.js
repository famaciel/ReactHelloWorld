import React from "react";

class Turma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [
        { nome: "Maria", idade: 19 },
        { nome: "Val", idade: 17 },
        { nome: "João", idade: 18 },
      ],
    };
  }
  render() {
    const { alunos } = this.state;
    const maioresDeIdade = alunos.filter((aluno) => aluno.idade >= 18);
    return (
      <ul>
        {maioresDeIdade.map((aluno, index) => (
          <li key={index}>{aluno.nome}</li>
        ))}
      </ul>
    );
  }
}

export default Turma;