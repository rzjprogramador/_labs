# USE EFFECT :: QUANDO O COMPONENT É MONTADO

 const [input, setInput] = useState('')

    const [tarefas, setTarefas] = useState([
        'Estudar Logica de programacao',
        'Estudar Frontend',
        'Estudar Backend',
    ])

    useEffect(() => {

        // BUSCAR TODAS TAREFAS NO LOCALSTORAGE -- Desfaz - Parsea a string para JSON
        const tarefasStorage = localStorage.getItem('@tarefaRZJ')

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(() => {
        // INSERIR TAREFAS NO LOCALSTORAGE -- tem que transformar o JSON em string
        localStorage.setItem('@tarefaRZJ', JSON.stringify(tarefas))
    }, [tarefas]) 

    // Se colocar lago dentro do bloco e o array do useEffect estiver vazio - QUnado o coponent for montado auto executa

    // Se colocar algo dentro do [] toda vez que esta refrencia sofrer alteracao vai execuatr o que esta dentro da funcao do useEffect


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