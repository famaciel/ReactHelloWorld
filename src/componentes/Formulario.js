import React, { useState } from "react";

const Formulario = () => {

    const [campoTexto, setCampoTexto] = useState("");
    const [campoCheck, setCampoCheck] = useState(false);
    const [campoRadio, setCampoRadio] = useState("b");
    const [fruta, setFruta] = useState("laranja");
    const [areaTexto, setAreaTexto] = useState("observacoes");

    const cliqueEnviar = (evento) => {
        evento.preventDefault();
        console.log(campoTexto);
        console.log(campoCheck);
        console.log(campoRadio);
        console.log(fruta);
        console.log(areaTexto);
    };

    const mudaValorTexto = (evento) => {
        setCampoTexto(evento.target.value);
        //console.log('mudando: ' + evento.target.value);
    };

    const mudaCampoCheck = (evento) => {
        setCampoCheck(evento.target.checked);
    };

    const mudaCampoRadio = (evento) => {
        setCampoRadio(evento.target.value);
    };

    const mudaSelect = (evento) => {
        setFruta(evento.target.value);
    };

    const mudaArea = (evento) => {
        setAreaTexto(evento.target.value);
    }

    return (
        <form onSubmit={cliqueEnviar}>
            <div>
                <label htmlFor="campoCheck">a: </label>
                <input
                    id="campoCheck"
                    type="checkbox"
                    onChange={mudaCampoCheck}
                    checked={campoCheck}
                />
            </div>

            <div>
                <label>
                    a:
                    <input
                        type="radio"
                        value="a"
                        onChange={mudaCampoRadio}
                        checked={campoRadio === "a"}
                    />
                </label>
                <label>
                    b:
                    <input
                        type="radio"
                        value="b"
                        onChange={mudaCampoRadio}
                        checked={campoRadio === "b"}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="select">Selecione sua fruta favorita:</label>
                <select
                    id="select"
                    value={fruta}
                    onChange={mudaSelect}
                >
                    <option value="maçã">Maçã</option>
                    <option value="banana">Banana</option>
                    <option value="laranja">Laranja</option>
                </select>
            </div>

            <div>
                <textarea
                    // onChange={(e) => setAreaTexto(e.target.value)}
                    onChange={mudaArea}
                    value={areaTexto}
                />
            </div>

            <input onChange={mudaValorTexto} value={campoTexto} type="text" />
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default Formulario;
