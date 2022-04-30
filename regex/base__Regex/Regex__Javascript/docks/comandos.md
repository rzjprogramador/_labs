# FLAGS

## flags dentro das barras
| === OU --> ENCONTRA ALGO E TAMBEM OU O QUE PEDIR
^ === Começa em ... (Circunflexo no inicio)
$ === Termina com ...
[^] === Negação  (Circunflexo dentro de um conjunto é Negação)
/^<regex>$/ === Começa com <regex>Termina com ...pra usar junto a expressao dentro não pode ser uma captura de começos diferentes pra sugar , tem que ja estar em sequencia que deseja no final



# AGRUPADORES
() === grupo



# FUNÇÕES ::

## test
test ou nada é o default vairetornar um boleano do que esta sendo pedido entre as // se encontrar

## match()  
<fonte>.match(<regex>) === partida, executar, começar (vai executar a regex guardada em uma variavel)


## flags ultimas fora das barras
g === global :: encontre todas
i === sensitive :: Tanto letra maiuscula quanto minuscula
m === multiline :: flag que modifica o ĉomeça em ...ela faz começar o match a partida a cada linha

# exec
encontrado = regex.exec(texto)

## BEM USADOS
[a-z]+ ou \w ---> Pra pegar tudo dentro de algo ...ex: dentro de uma tag >>>> /<[a-z]+  ou \w >/gi "Pegando tudo de a a z ou A a Z dentro de <>"

