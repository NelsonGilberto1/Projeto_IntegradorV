import { useState } from "react";

function FormularioPerfil() {
    const [form, setForm] = useState({
        nome:"",
        email:"",
        cidade:"",
        perfil:"", //Se e usuario comum ou se é adm, Select
        receberNovidades:"", //checkbox
        observacoes:""
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target;

        setForm({
            ...form,
            [name]: type === 'checkbox'? checked : value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Nome: ", form.nome);
        console.log("E-mail: ", form.email);
        console.log("Cidade: ", form.cidade);
        console.log("Perfil: ", form.perfil);
        console.log("Receber Novidades: ", form.receberNovidades);
        console.log("Observaçoes: ", form.observacoes);
    }

    return (
        <div>
            <h2>Cadastro de com os campos: </h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Nome:</label>
                </div>
            </form>
        </div>
    )
}