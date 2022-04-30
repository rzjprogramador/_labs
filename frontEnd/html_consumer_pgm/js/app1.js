const apiDado = 'http://localhost:3333/dado'

    axios.get(apiDado).then(response => {

        const dados = response.data

        const list = document.getElementById('dados')

        dados.forEach(dado => {
            const item = document.createElement('li')
            item.innerHTML = `${dado.tecnologia} :: ${dado.contexto} :: ${dado.exemplo}`
            list.appendChild(item)

        })


    }).catch(error => {
        console.log(error)
    })