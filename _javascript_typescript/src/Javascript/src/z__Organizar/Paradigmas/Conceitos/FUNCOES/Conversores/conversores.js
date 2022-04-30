
var nota = 10

/* casting = moldagem - convertendo numero em string */
console.log(nota.toString())

/* valor da variavel */
console.log(nota.valueOf())

/* Levar variavel a Exponencial  - Valor multiplicado por ele mesmo */
console.log(nota.toExponential(2))

/* Levar variavel a Casas Decimais fixas */
console.log(nota.toFixed(2))

/* Levar variavel a Precisao */
console.log(nota.toPrecision(1))

/* Api Matematica - randomizando a cada invocacao numeros aleatorios apartir do valor da variavel passada */
console.log(Math.random(nota))


/* Casting === Moldagem == Conversao */

/* String para Numero :: com Number('String-Numero') vai retornar um numero */
x = '10'
y = Number(x)
console.log('O valor é ', y)


/* CONVERTER OBJETO EM JSON  */
JSON.stringify( listObjetos )


