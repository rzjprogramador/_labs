require 'singleton'

class Instancia_unica
    include Singleton 

    def test1
        "este é um test 1"
    end

    def test2
        "este é um test 2"
    end
end


=begin
    
# Classe Singleton = Classe Unica 
Já é nativa do Ruby , vc faz o load da biblioteca singleton do proprio Ruby
 ## o include de singleton ja faz todo codigo pra deixar a instancia unica
## Cria o metodo de instance .... Ele ja deixao construtor privado... FAZ TUDO PRA DEIXAR UMA CLASSE UNICA SINGLETON

#RECUPERANDO
SE TENTAR CRIAR INSTANCIA NAO DEIXA
Instancia_unica.new
*** NoMethodError Exception: private method `new' called for Instancia_unica:Class


## MAS SE COLOCAR :::  MINHA_CLASSE.instance   ELE DEIXA   ex:
Instancia_unica.instance
#<Instancia_unica:0x0000560db7f43b50>

## MESMA COISA PARA INSTANCIAR OS METODOS  COLOCAR  MINHACLASSE.INSTANCE.MÉTODO :: EX::

Instancia_unica.instance.test1
"este é um test 1"
(byebug) Instancia_unica.instance.test2
"este é um test 2"

OBS:: O ENDEREÇO DE MEMORIA SEMPRE É O MESMO 
SÓ MUDA O ENDEREÇOD E MEMORIA DE DER UM RESTART NA MAQUINA OU NA APLICAÇÃO...
DIFERENTE DAS OUTRAS CLASSES QUE A CADA INSTANCIA CRIA UM ENDEREÇO DE MEMORIA DIFERENTE.




=end