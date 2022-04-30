require 'byebug'

require_relative 'interface'
require_relative 'abstrata'
require_relative 'klass'
require_relative 'instancia_unica_singleton'

debugger

x = ""



=begin
    # Esta ordem de require_relative é super importante para uma classe Filha Herdada enxergar a classe Pai
    # SENÃO FICA DANDO O ERRO :: (required)>': uninitialized constant Abstrata 

    tentado instanciar nao consegue POR CAUSA DO RAISE

    Abstrata.new
*** RuntimeError Exception: Classe não pode ser instanciada, somente herdada e implementada, Interface

nil

# MAS SE TENTAR PELA CLASSE HERDADA DE ABSTRATA A CLASSE KLASS CONSEGUE :
(byebug) Klass.new
#<Klass:0x000055c468d6cd38>



    
=end