
const dataAtual = new Date("20-12-01") 
// data formato verdadeiro: "2020-12-01"


function validarData(data: any) {
    if(isNaN(data.valueOf()) ) {
       return 'È falso : Data Invalida' 
    }
    return 'È Verdade: Data OK validada'
    
}


console.log( validarData(dataAtual) )
