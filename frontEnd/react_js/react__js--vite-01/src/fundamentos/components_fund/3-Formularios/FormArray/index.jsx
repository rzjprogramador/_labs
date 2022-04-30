import { useEffect, useState } from "react"


export const FormArray = () => {

    const [input, setInput] = useState('')

    const [tarefas, setTarefas] = useState([
        'Estudar Logica de programacao',
        'Estudar Frontend',
        'Estudar Backend',
    ])

    useEffect(() => {

        const tarefasStorage = localStorage.getItem('@tarefaRZJ')

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('@tarefaRZJ', JSON.stringify(tarefas))
    }, [tarefas]) 


    function handleRegister(e) {
        e.preventDefault()

        setTarefas([...tarefas, input])

        setInput('')

    }

    return (
        <div>
            <form onSubmit={ handleRegister }>
                <label>Nome da Tarefa     </label>
                <input 
                placeholder="Digite a tarefa: "
                value={input}
                onChange={ (e) => setInput(e.target.value) }
                />

                <br /><br />

                <button type="submit">Registrar</button>
            </form>

            <h1>Tarefas</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>
                        {tarefa}
                    </li>
                ))}
            </ul>

        </div>
    )
}