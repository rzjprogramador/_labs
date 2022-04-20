

indexRef == String que traz O Momento que o campo foi criado quando rodou o codigo

context == objeto deconfiguracao para o server apollo : recebe uma funcao que retorna um objeto 
o que estiver dentro deste objeto estará disponivel para qualquer resolver do nosso sistema via parametros :: na posicao 3 que é o context.... pode recuperar o que esta sendo retornado do context com context.propRetornada ou desestruturar o context e extrair o que esta sendo reotrnado e usar .