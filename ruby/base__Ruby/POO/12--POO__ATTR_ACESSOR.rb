require 'byebug'

class Carro

    def initialize(nome = "Modelo padrão")
        @nome = nome
    end

    attr_accessor :nome, :porta, :painel
    attr_writer :pneu
    attr_reader :retrovisor

    def mostrar(marca ="Marca Padrao")    
        puts "Marca: #{marca} -- Modelo: #{self.nome}"   
    end

end

carro = Carro.new

debugger
Carro.new.mostrar

carro.porta = "azul"
carro.pneu = (123)
carro.retrovisor






=begin
    
# TODO CODIGO COMENTADO ::


class Carro

    def initialize(nome = "Modelo padrão")
        @nome = nome
    end

    attr_accessor :nome, :porta, :painel     attr_accessor === #Get e Set  === LEITURA e SETA ATRIBUI VALOR
    attr_writer :pneu                       attr_writer  === #Set  === somente atribui valor SETA
    attr_reader :retrovisor                 attr_reader === #Get  === SOMENTE LEITURA 


    def mostrar(marca ="Marca Padrao")    
        puts "Marca: #{marca} -- Modelo: #{self.nome}"   
    end

end

# INSTANCIAR A CLASSE === Classe.new e guardar numa variavel
# em Desenvolvimento pode usar o debugger antes de Instanciar o metodo
# ACESSAR METODOS INSTANCIADOS === Classe.new.metodo

carro = Carro.new

debugger
Carro.new.mostrar

#=======================================
#RECUPERAR  attr_accessor (get e set)
carro.porta = "azul"
#Resposta de: carro.porta  será ::: azul


#=======================================
# Recuperar com attr_writer :: VC SÓ VAI CONSEGUIR ATRIBUIR COLOCAR VALOR e NÃO VER O SEU VALOR #Se tentar carro.pneu  VAI DAR ERRO
carro.pneu = 123


#=======================================
# Recuperar com Reader :: SOMENTE LEITURA --VC VAI PODER LER --MAS NAO AGREGARÁ VALOR
carro.retrovisor   #resposta :: nil
carro.retrovisor = 123  # nao vai deixar porque esta em reader -- SOMENTE LEITURA




#RECUPERANDO 
# carro.nome="Palio"
# carro.mostrar("Fiat")
# carro.mostrar()
# carro.mostrar("Fiat")



=end





=begin
    
# INITIALIZE É O CONSTRUTOR :: Que preenche automaticamente os dados da nossa variavel privada de instancia
# para colocarmos outros atributos como :: porta,retrovisor,painel... fariamso assim sem os acessors ::
# Usaremos o Accessors :: attr_acessor :: Que ja define automaticamnte o get e set do atributo

attr_accessor = acessivel
attr_writer = só leitura


attr_accessor === #Get e Set  === LEITURA e SETA ATRIBUI VALOR
attr_writer  === #Set  === somente atribui valor SETA
attr_reader === #Get  === SOMENTE LEITURA 

# USANDO :: attr_acessor :propriedade1, :propriedade2, :propriedade3

Economizando codigo ,ao inves de criar assim :: 
#===============================
# PARA PORTA ::

def porta=(value)
        @porta = value
    end

    def porta
        @porta               
    end
#===============================

#===============================
# PARA RETROVISOR::

def retrovisor=(value)
        @retrovisor= value
    end

    def retrovisor
        @retrovisor              
    end
#===============================
#===============================
# PARA PAINEL::

def painel=(value)
        @painel = value
    end

    def painel
        @painel               
    end
#===============================

#===============================
O ATTR_ACESSOR POR DEBAIXO DOS PANOS FAZ ISSO ::

def attr_acessor(*args)
    args.each do |propriedade|
    eval("
        def painel=(value)
        @painel = value
    end

    def painel
        @painel               
    end   
    ")
end
end  

#===============================



=end