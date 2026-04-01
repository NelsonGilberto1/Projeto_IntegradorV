import {useState} from "react";

function Formulario() {
    const [form, setForm] = useState({
        tituloLivro : "",
        autor : "",
        categorias: ""
    })

    function handleChange(event){
        const {name, value, checked,} = event.target;
        //alert("Campo: " + name + " valor: " + value)

        setForm({
            ...form,
            [name]: value,
            [checked]: checked
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        
        
        console.log("Titulo do livro: ", form.tituloLivro);
        console.log("Autor: ", form.autor);
        alert("Titulo do Livro: " + form.tituloLivro + " Nome do Autor: " + form.autor)
        
    }

    return (
        <div>
            <h2>Cadastro de Livros</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Livro:</label>
                    <input 
                        type="text"
                        name="tituloLivro"
                        value={form.tituloLivro}
                        onChange={handleChange} 
                             
                    />
                        
                </div>
                
                <div>
                    <label>Autor:</label>
                    <input
                        type="text"
                        name="autor"
                        value={form.autor}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Categorias: </label>
                    <select name="categorias" value={form.categorias} onChange={handleChange}>
                        <option >Selecione uma categoria</option>
                        <option >Frontend</option>
                        <option >Backednd</option>
                        <option >Banco de Dados</option>
                        <option >Mobile</option>
                    </select>
                </div>

                <div> 
                    <label>Livros disponível para empréstimo: </label>
                    <input
                        type="checkbox"
                        name="disponivel"
                        checked={form.disponivel || false}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Tecnologias relacionadas ao livro</label>
                    <br></br>
                    <label>JavaScript: </label>
                    <input                    
                        type ="checkbox"
                        name= "javaScript"
                        checked = {form.javaScript || false}
                        onChange = {handleChange}
                    />

                    <label>Java: </label>
                    <input
                        type="checkbox"
                        name="java"
                        checked = {form.java || false}
                        onChange = {handleChange}
                    />

                    <br></br>
                    <label>Python: </label>
                    <input
                        type="checkbox"
                        name="python"
                        checked={form.python || false}
                        onChange = {handleChange}
                    />
                    
                    <label>PHP: </label>
                    <input
                        type = "checkbox"
                        name = "php"
                        checked = {form.php || false}
                        onChange = {handleChange}
                    />
                </div>

                

                <button type="submit">Cadastrar</button>
            </form>

            <h3>Dados digitados: </h3>
            <pre>{JSON.stringify(form, null, 2)}</pre>
            
        </div>
    )
}
export default Formulario 