import React, {useState} from 'react';

function Contador(){
    //inicializa o estado 'contador' com 0
    const [contador, setContador] = useState(0);

    //Funcao para incrementar o contador 
    const incrementar = () => {
        //Atualiza o esta usando o valor anterior 
        setContador(contador + 1);
    };
    
    //Funcao para diminuir o contador 
    const diminuir = () => {
        //Atualiza o valor anterior 
        setContador(contador - 1);
    };

    return(
        <div>
            <p>Contagem: {contador}</p>
            <button onClick={incrementar}>
                incrementar
            </button>
            <button onClick={diminuir}>
                diminuir 
            </button>
        </div>
    );
}

export default Contador;