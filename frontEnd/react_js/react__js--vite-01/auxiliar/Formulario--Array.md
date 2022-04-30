# FORMULARIO DE LISTAS / ARRAY

# Definir variaveis e setVar do INPUT
const [input, setInput] = useState('')

# Definir variaveis e setVar do DA LISTA  
const [input, setInput] = useState([

    // Como vai iniciar o array vazio ou coloca valores ex:
    'Estudar Logica de programacao',
    'Estudar Frontend',
    'Estudar Backend',
])

---

# FUNCAO REGISTRAR AO CLICK DO BOTAO

function handleRegister(e) {

    // PARA NAO ATUALIZAR A PAGINA NO ENVIO
    e.preventDefault()

    // SETAR O ARRAY :: COM O ARRAY QUE TENHO , E O QUE VEM DO INPUT
    setTarefas([...tarefas, input])
    
    // LIMPAR O INPUT
    setInput('')

}

---

# FORMULARIO

// ONSUBMIT = { REFERENCIA A FUNCAO REGISTER }
<form onSubmit={ handleRegister }>

    // LABEL :: ETIQUETA :: MOSTRA O NOME ACIMA DO CAMPO
    <label>Nome da Tarefa     </label>

    <input 

    // PLACEHOLDER :: TEXTO SINALIZADOR DENTRO DO INPUT
    placeholder="Digite a tarefa: "

    // VALUE :: PEGA O VALOR DIGITADO NO INPUT E ATRIBUI AO QUE FOR PASSADO SE FOR UMA REFERENCIA
    value={input}

    /* ONCHANGE :: PEGA O VALOR DIGITADO QUE ESTA NO VALUE DO INPUT E 
    ATRAVES DE UMA FUNCAO-ANONIMA RECEBE UM EVENTO E NO SET DO INPUT ENTREGA ESTE EVENTO.ALVO.comSeuVALOR
    */
    onChange={ (e) => setInput(e.target.value) }
    />


    // BUTTON :: QUANDO TYPE='SUBMIT' HABILITA O ENVIO DO FORMULARIO DEFINIDO COMO form onSubmi { referenciaEnvio }
    <button type="submit">Registrar</button>

---

#
