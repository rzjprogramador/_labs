// Funcao de Primeira Classe
const getNome = (): void => {
    console.log('Reinaldo')
}
getNome()

/* ------------------------------------------- */
/* FUNCOES CALLBACK */
const teste1 = () => {
    console.log('1')
}

setTimeout(teste1, 1000)

console.log('2')

/* ------------------------------------------- */
// const carregando = () => {
//     console.log('Carregando...')
// }

// const loading = setInterval(carregando, 500)
// NAO RODAR ESTE --ATÉ ENCONTRAR UM STOP PRO SETINTERVAL --
// PQ ELE ENTRA EM LOOP INFINITO
