/*  some === alguma */

/* Funcao : Ès Numero Primo */

const isNumeroPrimo = (value: number) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        }
    }
    return value > 1
}

const array = [6, 8, 11, 14, 47]

/* Utilizando o some()  no array 
    para ver se retorna booleano se caso algum num do array for primo */

console.log(array.some(isNumeroPrimo))
