/* 
High Order Functions === Funções de alta ordem

*/
const somar = (x: number) => {
    return (y: number) => {
        return x + y
    }
}

const addDois = somar(2)

console.log(addDois(10))

/* 
High Order Functions === Funções de alta ordem

Na primeira funcao recebe um parametro e retorna uma funcao que retorna uma operacao

em uma variavel atribuimos esta funcao como valor e passamos o que queremos operar 
transformamos esta variavel em uma variavel Funcional com valor de funcao
ao invocar esta variavel Funcional agora ela tem o poder da primeira funcao -
passamos para ela o que queremso operar junto com o resultado da priemira funcao que ela carreega

*/
