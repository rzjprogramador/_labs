/* eslint-disable no-unused-vars */

const getter_obter = {
    titulo: 'Getter',
    significado: 'Obter',
    contexto: 'disponibilizar o valor do atributo da classe fora dela atraves de metodos publicos',
    beneficio: 'fora da classe quem usa só pode acessar os valores dos atributos privados ou protegidos nao podem fazer alteracoes que nao sejam viam metodos publicos no caso setter',
    processo: 'uma funcao que nao recebe nada e retorna o atributo da classe',
    evolucao: 'podemos antes de entregar o valor do atributo fazer alguma operacao para entregarmos este valor manipulado, modificado ou com alguma validacao para quem quer obter',
    novidade: `agora em 2020 podemos usar a funcao set e get e depois o nome do atributo e no uso chama-lo como se fosse um atributo mas vai ter a fucnionalidade de metodo e para diferenciar o nome do metodo com o do atributo colocar handerline nos atributos, assim mudara o objeto final ..no bloco do construtor pode mudar novamente o nome dos atributos atribuindo o da classe pelo recebido no construtor mas sera chamado duas vezes ao usar o set e getter :: opiniao prefiro o modo anterior com funcao simples mesmo`

}

const setter_configurar = {
    titulo: 'Setter',
    significado: 'Setar',
    contexto: 'configurar ou mudar o valor do atributo via metodo, age após o valor construido do construtor na instanciacao',
    beneficio: 'fora da classe quem usa só pode acessar os valores dos atributos privados ou protegidos nao podem fazer alteracoes que nao sejam viam metodos publicos no caso setter',
    processo: 'uma funcao que recebe um valor e faz o procedimento de atribuir ao atributo da classe este valor recebido..nao costuma retornar nada',
    evolucao: 'podemos antes de configurar / modificar o valor do atributo fazer alguma operacao ou manipulacao verificacao para autorizar tal mudanca',
    novidade: `no metodo set nao aceita a anotacao do tipo de retorno da propriedade metodo  ou seja nao permite tipar o retorno, para usar atribui a prop/metodo o valor novo a ser configurado `

}
