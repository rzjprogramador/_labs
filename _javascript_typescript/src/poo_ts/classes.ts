/* eslint-disable no-unused-vars */

const classes = {
    contexto_classe: `Uma classe fora é um objeto...tudo que a classe tem..o objeto tera..`,

    props_de_classe: {
        contexto: `
        - AS VARIAVEIS SÃO USADAS MAIS EM CLASSES DE CONFIGURACAO ::
        - TEM O PAPEL DE INICIALIZAR UMA PROP
        - SER UM LOCAL PARA GUARDAR COLECAO DE DADOS
        - SUGAR METODOS COMPORTAMENTOS DE OUTRAS CLASSES - ATRAVES DE INTEGRACAO LIGACAO VAR COM VALOR DA CLASSE A SER SUGADA
        - SERVEM DE VARIAVEIS AUXILIARES PARA USO EM METODO DA CLASSE QUE PRECISA DE UM VALOR PARA MANIPULAR.
        `,
        cenario_de_tipos_de_variaveis_podemos_ter:
            ['fixaNoTopo', 'fixaEstatica', 'ParametroConstrutor', 'IntegradaConstrutor'],

        fixa: `variaveis com valores fixo ficam no topo `,

        statica: `a var de topo estatica tbm é fixa valor e só pode ser inicializada pela propria classe`,

        valor_de_fora: {
            contexto: `
            Ficam no construtor as variaveis com valor que vai vir de fora ficam no construtor tipo params de funcao
            - e podem ser configuradas no bloco do construtor ou nos metodos

            - o construtor é uma funcao da classe sera configurado dado valor quando invocarem/instanciar a classe.`,

            inicializacao_dado_valor: {
                cenarios_possiveis_origem_valor: ['primitivos', 'classe', 'interface', 'parametrizado de objeto'],

                valor_via_integracao_emprestimoDePoder: {
                    contexto: `se tornam varIntegrada tem o emprestimo de poder da estrutura que foi sugado o valor`,

                    origens_possiveis_de_emprestimo_valor: `valor que vem de fora ::
                    pode ser de outras classes  | funcoes | interfaces
                    e herdam metodos comportamentos que quem emprestou
                    `

                },
                valor_via_primitivo: {
                    contexto: ``,
                    precessos: ``
                },
                valor_via_parametrizado_objeto: {
                    contexto: ``,
                    precessos: ``
                }

            }

        }
    }
}
