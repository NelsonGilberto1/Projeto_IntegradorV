import React, {useState} from "react"
function Texto(){
        const[nomes, setNomes] = useState('');
        const handleChange = (event) => {
            setNomes(event.target.value)
        }
        return(
            <div>
                <input type='text' value={nomes} onChange={handleChange} placeholder="Digite aqui:"/>
                <h1>Saldaçoes</h1>
                <p>{nomes}</p>
            </div>
        )
}


export default Texto;