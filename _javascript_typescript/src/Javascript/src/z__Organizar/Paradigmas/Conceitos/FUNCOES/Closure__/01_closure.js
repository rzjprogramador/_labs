
const somaAnonima = (numero1) => {
  return (numero2) => (numero1 + numero2)
}

const minhaClosure = somaAnonima(2)

console.log(minhaClosure(3))

/*
Closure == fecho
Tem a leitura de snapshot uma foto do amvbiente
Ela consegue acesso as variaveis externas da funcao
mas somente leitura se alterar o valor da variavel apos leitura da closure ela nao tera acesso a essas info

[  https://www.youtube.com/watch?v=lEo4bN-2ysQ  ]

*/
