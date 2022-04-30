import { useState } from 'react'

export const FormularioObjeto = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)

    const [user, setUser] = useState({})

    function handleResgister(e) {
        e.preventDefault()

        setUser({
            nome: nome,
            email,
            idade
        })

    }

    return (
        <div>
            <form onSubmit={ handleResgister } >
                <label>Nome: </label><br />
                <input 
                placeholder="Digite seu nome: " 
                value={nome}
                onChange={ (e) => setNome(e.target.value) }
                /><br />

                <label>Email: </label><br />
                <input 
                placeholder="Digite seu email: "
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                /><br />

                <label>Idade: </label><br />
                <input 
                placeholder="Digite sua Idade: " 
                value={idade}
                onChange={ (e) => setIdade(e.target.value) }
                /><br />

                <button type="submit" >Registrar</button>

            </form>
            <br />
            <hr />
            <div>
                <span>Bem vindo: {user.nome}</span><br />
                <span>Email: {user.email}</span><br />
                <span>Idade: {user.idade}</span><br />
            </div>

        </div>
    )
}