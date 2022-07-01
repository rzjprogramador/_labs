/* ---------------------- // ---------------------- */
/* OBJETOS DE CONTEXTO GLOBAL PARA SEREM RETORNADOS NA FUNCAO CONTEXT */
//
const helloContext = {
  hi: 'VIA CONTEXT :: 2 :::',
}

const wordContext = { word: 'Ola Mundo  :: 1 :::' }


/* ---------------------- // ---------------------- */
/* CONTEXT :: METODO QUE RETORNA OBJETOS */
//
export const context = () => {
  return {
    helloContext,
    wordContext,
  }
}
