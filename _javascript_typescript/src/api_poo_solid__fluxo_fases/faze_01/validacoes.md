na classe do repo:
// NÃO PERMITE DUPLICAR UMA CRIACAO QUE VEM DE UM DADO PRIMITIVO :: STRING
// NAO PERMITIR DUPLICAR NOME DE CATEGORIA :: PERCORRER O ARRAY E PROCURAR SE TEM UM NOME IGUAL AO RECEBIDO

    findByName (nome: string): Categoria {
        const categoria = this.categorias.find(categoria => categoria.nome === nome)
        return categoria!
    }
// uso : ANTES DE CRIAR A CATEGORIA VEREIFICAR COM A FUNCAO AUXILIAR QUE VEM DO REPO ::
// ANTES DE CRIAR VAMOS VERIFICAR PARA NAO PERMITIR DUPLICAR NOME DA CATEGORIA
- CAPTURA O METODO AUXILIAR
- - COM ESTA CAPTURA VERIFICA SE EXISTE É UM FASTFAIL E FAZ ALGO
- - SENAO DEIXA EVOLUIR O CODIGO... CRIANDO... exemplo:

    const categoriaAlreadExist = categoriasRepository.findByName(nome)
    if (categoriaAlreadExist) {
        return response.status(400).json({ error: 'ESTE NOME DE CATEGORIA JÁ EXISTE!' })
    }
