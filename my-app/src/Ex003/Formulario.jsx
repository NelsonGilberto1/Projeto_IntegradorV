import React, {useSate, useState} from 'react';

function Formulario(){
    const [formulario, setFormulario] = useState({
        nome:"",
        Email:""
    });
    const handleChange = (event) => {
        setFormulario(event.target.values);
    }

};
export default Formulario;