require 'byebug'

require_relative 'carro'
require_relative 'fiesta'
require_relative 'golf'


golf = Golf.new
fiesta = Fiesta.new
carro = Carro.new


debugger

Carro.new.mostrar


=begin
POO == HERANÇA ===>

# IMPORTANTE :: SÓ FAZER HERANÇA ENTRE CLASSES QUE TEM ALGO EM COMUM QUE TEM A MESMA RELAÇÃO , QUE PODEM SER VENDIDAS JUNTOS,UMA FAÇA PARTE DA OUTRA !
# A CLASSE QUE RECEBER UMA HERANÇA TERÁ OS SEUS ATRIBUTOS E TAMBEM OS ATRIBUTOS DA CLASSE HERDADA.
#====================================================

#====================================================
RESUMO CRIAR NOVA CLASSE HERDADA

#:: NO ARQUIVO PRINCIPAL::

IMPORTAR  :: require_relative 'golf'  # Importante a Classe que vai ser HERDADA neste caso carro ser importada primeiro pra ela existir antes
:GUARDAR A INSTANCIA EM UMA VARIAVEL : golf = Golf.new

# :: NO ARQUIVO DA CLASSE CRIADA --- FAZER A HERANÇA 
class Golf < Carro
end
#====================================================


#====================================================
# UMA CLASSE PODE HERDAR DA OUTRA ASSIM UMA TERIA AS MESMAS PROPRIEDADES HERDADAS DA OUTRA --FAZENDO ASSIM UM ENCADEAMENTO
# OBS: A ORDEM DO require_relative no Arquivo base é importante para um Arquivo que receber a herança enxergar o que vai dar essa herança

#====================================================


#====================================================
NO ARQUIVO PRINCIPAL ::

IMPORTAR CLASSES ::: require_relative 'carro'

INDICAR CLASSES QUE SERAO INSTANCIADAS
fiesta = Fiesta.new
carro = Carro.new

INDICAR METODOS QUE SERÃO INSTANCIADOS
Carro.new.mostrar

# NO DEBUGGER # HERDAR PROPRIEDADE 
fiesta.nome = "reinaldo"
RESPOSTA :: "reinaldo"

RECUPERAR PROPRIEDADE :: fiesta.nome
RESPOSTA "reinaldo"
#==================================================


NOS ARQUIVOS QUE RECEBERAM A HERANÇA :: ===========

#INDICAR COM < QUE A NOVA CLASSE HERDARÁ TAL CLASSE

class Fiesta < Carro  
    attr_accessor :cor
end

# ESTA CLASSE NOVA JA TEM UM ATRIBUTO , ESTE ATRIBUTO SE SOMARÁ AOS ATRIBUTOS DA CLASSE HERDADA
#AGORA ESSA NOVA CLASSE AQUI CRIADA TEM OS SEUS ATRIBUTOS E TAMBÉM OS ATRIBUTOS DA CLASSE HERDADA


#===================================================

=end