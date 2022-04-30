/* --------------------------------------------------------- */
    /* Se verdadeiro passa -- se falso nao passa */
/* --------------------------------------------------------- */

if (true) {
    console.log('Passou este Verdadeiro -- 1 --')
}
if (false) {
    console.log('Este comecou como falso - Nao era pra passar ao menos que negue !')
}

/* --------------------------------------------------------- */
    /* Se negar o falso vira verdade e passa */
/* --------------------------------------------------------- */

const textoVazio = ''
if (!textoVazio) {
    console.log('Passou')
}
else {
    console.log('Nao Passa')
    
}

/* --------------------------------------------------------- */
    /*  */
/* --------------------------------------------------------- */

if (10 > 20) {
    console.log( 'Este é falso - 10 maior que 20' )
    
}
else if (20 > 10) {
    console.log( 'Este é verdade 20 maior que 10' )
    
}
else if (!10 > 20) {
    console.log( 'Este é verdade neguei 10 maior que 20' )
    
}
else {
    console.log( 'Default nenhuma das de cima' )
    
}