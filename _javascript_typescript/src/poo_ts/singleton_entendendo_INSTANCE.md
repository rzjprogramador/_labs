- Uma Classe é uma casca... o que ela tem de props são suas variaveis e metodos
- e consequentemente um objeto dela tbm terá suas variaveis e metodos
- variaveis podem ser [i'nternaNoTopo' , 'ou vem de fora via param construtor']
- essas variaveis podem ser configuradas para ter inicio de valor:
[
    'sem metodo no bloco do construtor',
    'ou se precisarem de linhas de manipulacoes dentro de metodo da classe'
]
- instancia : criar objeto da classe ... podemos instanciar :
  [
      'com new fora da classe se a classe tiver o contrutor publico',
      `ou somente com new dentro de metodo dentro da propria classe se o construtor for privado
      fazendo assim somente uma instancia unica.`
  ]

  > entendendo como chega a um singleton :
  - declara uma var INSTANCE
  - da seu valor dentro do metodo getInstance() que vai disponibiliza-lo para fora
  - no metodo: configura a var que é a propriedade que a classe terá
  - configura apra esta var ser uma instancia ter tudo que esta propria classe tem
  - faz uma condicao para que pra ter esta confguracao ou outra outra configuracao
  - mas vai definir um valor para esta propDaClasse.
  - sendo assim o objeto desta classe tera a prop dela e o metodo para acessar esta propDaClasse tendo seu valor unico