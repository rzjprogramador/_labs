import { useState } from 'react'

export const Estado = () => {

    const [aluno, setAluno] = useState('Reinaldo')

    function handleChangeName(nome) {
        setAluno(nome)
    }

    return (
        <div>
            <h1>Estado</h1>
            <br />
            <h2>{aluno}</h2>
            <br />
            <button onClick={ () => handleChangeName('Programador') }>Mudar Nome</button>
        </div>
    )

} 