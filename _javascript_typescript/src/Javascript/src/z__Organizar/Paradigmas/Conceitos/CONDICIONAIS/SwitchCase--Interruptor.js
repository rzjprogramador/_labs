
/* --------------------------------------------------------- */
    /* Switch Case -- Testa o valor retornado - Quando vc ja sabe o numero de Opcoes e faz algo dependendo do valor retornado */
/* --------------------------------------------------------- */

const testadaCor = 'Azul'   // Variavel a ser testado o valor

/* Opcoes Caso acertar o valor da variavel o que vai fazer : */
switch (testadaCor) {
    case 'verde':
        console.log('È verde o valor da variavel')
        break
    case 'Azul':
        console.log('È azul o valor da variavel')
        break
    case 'amarelo':
        console.log('È amarelo o valor da variavel')
        break
    default:
        console.log('nenhum valor citado - o valor da variavel')
}


/* --------------------------------------------------------- */
    /* Multi-Case :: Testar Bloco de Opcoes -- O valor pode ser Um OU Outro entre as Opcçoes */
/* --------------------------------------------------------- */
const cor = 'Rosa'   // Variavel a ser testado o valor

switch (cor) {
    case 'Vermelho':
    case 'Laranja':
    case 'Amarelo':
    case 'Rosa':
        console.log('Cores Quentes')
        break

    case 'Azul':
    case 'Roxo':
    case 'Branco':
        console.log('Cores Frias')
        break

    default:
        console.log('Nehuma das opcoes validas !')
        
}

/* --------------------------------------------------------- */

