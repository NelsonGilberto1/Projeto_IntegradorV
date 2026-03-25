import React, {useState} from 'react';

function Contador(){
    const [Contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(Contador + 1);
    };

    const diminuir = () => {
        setContador(Contador - 1);
    };

    return(
        <div>
            <p>Contagem: {Contador}</p>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <button onClick={diminuir}>
                Diminuir
            </button>
        </div>
    )
}
export default Contador;