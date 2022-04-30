SERVICE : Separa da rota a responsabilidade de regras
para definir um servico : pense o que a rota tem que fazer ? exemplo:; Criar Categoria
então o servico tera que criar esta categoria e entregar para a rota usar.

O Que a rota tem que fazer é o caso de Uso :; no caso: CriarCategoria
colocar os passos no O que a Rota tem que fazer no casoDeUso dentro do emtodo execute()
ai dentro vao os passos :
> 2- SERVICO: VALIDAR EXISTENCIA DE REFERENCIA FUNDAMENTAL

> 3- SERVICO: MERGIAR OBJ RECEBIDO COM OBJ/INSTANCIA DA APP