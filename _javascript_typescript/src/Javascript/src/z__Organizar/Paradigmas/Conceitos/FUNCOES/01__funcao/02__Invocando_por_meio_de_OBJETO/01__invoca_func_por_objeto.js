/* O Obj nao é uam classe , mas podemos simular como se fosse criando metodo dentro dele  */
let pessoa = {
    nome: 'Joao',
    idade: 20,

    getIdade: function() {
        return this.idade
    }
}

console.log( pessoa.getIdade() )

/* 
Só foi possivel acessar esta funcao fora do obj porque 
a variavel idade foi definida no metodo do obj como this  sendo deste objeto 
o escopo que ela esta .

FUNCAO UTIL APRA GET SOMENTE VER O VALOR DA VARIVAEL SEM MECHER NA ORIGEM
ACESSAR  DE FORA , SOMENTE PRO METODO DE DENTRO DO OBJ
*/