/* tipo de dados :: STRING API  */


var nome = 'ReinaldoProgramador'


/* AS STRING SÃO IMUTAVEIS NAO MUDAM APOS O USO DAS FUNCOES -
  SÓ VAI MUDAR SE DEPOIS DA FUNCAO REATRIBUIR A MUDANCA COMO RETORNO A PROPRIA VARIAVEL exemplo*/
  console.log( nome = nome.concat(' Reizao') )


/* PARA USAR O RETORNO DA MODIFICACAO -- ATRIBUIR A UMA NOVA VARIAVEL DE RETORNO A INSTRUCAO  */


/* Match - Mapa da string - retorna um array com a string, a posicao emque ela foi encontrada, e a saida total da variavel  */
console.log( nome.match )


/* charAt () == buscando na variavel retorna posicao da string - conforme a posicao que for passada */
console.log(nome.charAt(2))


/*  charCodeAt () == buscando na variavel retorna o valor em unicode  */
console.log(nome.charCodeAt(0))


/*  concat () == vai concatenar o que for passado junto com o valor da variavel */
console.log(nome.concat('!!!'))


/*  indexOf ('o caractere que quer pegar o indice') == vai retornar o indice a posicao do caractere que foi passado */
console.log(nome.indexOf('e'))


/*  replace () == vai substituir - primeiro parametro a primeira ocorrencia que quer , segundo param a substituicao */
console.log(nome.replace('Programador', 'Desenvolvedor'))


/*  split () == vai remover a primeira ocorrencia do que foi passado */
console.log(nome.split('e'))


/* Com o  split podemos quebrar agrupamentos de string pegando a sua separacao -- e ele retorna um array com os elementos separados
Neste exemplo teremos como limitador o ; e acada ; ele criará um item do array  */
let nomes = 'Renata;Gustavo;Victor;Leonardo'
let arrayNomes = nomes.split(';')
console.log( arrayNomes )
console.log( 'total de items no array : ', arrayNomes.length )


/* substring == retorna da posicao inicial ate a final passada -1  */
console.log( 'substring de 0 a 5 caracteres >>', nome.substring(0,5) )
console.log( 'substring do caractere 2 ao 7º >>', nome.substring(2,7) )

/* substring --> senao informar o segundo param ele retorna da posicao passada ate o fim  */
console.log( 'substring apartir do 5º caractere >>', nome.substring(5) )


/* trim == remoção de espaço no começo e fim da string  */
let nome2 = '  Leonardo Eduardo   ' 
console.log( nome2.trim() )

/* PROVANDO QUE A STRING ORIGINAL NAO MUDA -- AO MENOS QUE FOR REATRIBUIDA COM O RETORNO DA MUDANÇA  */
console.log( nome )
