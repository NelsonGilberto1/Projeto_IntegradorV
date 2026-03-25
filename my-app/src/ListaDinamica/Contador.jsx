import React, {useState} from 'react';

function Contador() {
    //inicializa o estado 'contador' com 0
    const [contador, setContador] = useState(0);

    function nome (evento){
    console.log(evento.target.value)
    }

    //Função para incrementar o contador
    const [usuario, setUsuario] = useState({nome: 'novo nome: '});

    return (
        <div>
            <p>Nome: <input type="text" onChange={nome}/></p>
            <p>Contagem: {Contador}</p>
            {usuario.map((usuario, idenx) => <li key={index}>{nome}</li>)}
            <button onClick={incrementar}>
                Adicionar
            </button>
        </div>
    )
}

export default Contador;