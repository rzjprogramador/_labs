require 'byebug'

class Carro

    def initialize(nome = "Padron-Default")
        @nome = nome
    end

    def nome=(value)
        @nome = value
    end

    def nome
        @nome               
    end

    def mostrar(marca ="Marca Padrao OPCIONAL DEFAULT SÓ APARECE SE NA INVOCAÇÃO NAO FOR PREENCHIDO")    
        puts "Marca: #{marca} -- Modelo: #{self.nome}"   
    end

end

# debugger

#INSTANCIAR
carro = Carro.new

# RECUPERAR
carro.nome="Palio"
carro.mostrar("Fiat")
carro.mostrar()
carro.mostrar("Fiat")



=begin 

# ORIENTAÇÃO A OBJETOS =  OBJETIVO :: 
#ORGANIZAR OS CODIGOS EM CLASSES E METODOS CRIANDO UM MODELO QUE REPLICA SUAS PROPRIEDADES PARA SEREM ACESSADOS EM NOVOS CLONES

# --CLASS  --INSTANCIA --CONSTRUTOR
    
# Classe é um modelo onde descrevemos as propriedades e Métodos do nosso Objeto (neste caso Objeto Carro)
# Quando criamos uma Estancia :: Passamos essas propriedades e metodos para externos.
# Criar Estancia com new e guardar numa variavel e começar a recuperar seus atributos e metodos

#GET (RETIRAR dados de dentro da classe) e SET (ATRIBUIR dados para dentro da classe)
# (get) GETTERS :: Atributo  SOMENTE LEITURA :: pode recuperar/acessar e somente ver o atributo (get) NÃO PERMITE adicionar valor.
# (set) SETTERS :: Atributo que PERMITE ESCRITA ::PERMITE INSERIR  valor a este atributo (set) Pego por PARAMETRO ou não -- Mas ele sozinho não permite só leitura PRECISA DO GET pra pegar o atributo pra ele.

=end

=begin 

=========== MONTAGEM CLASSE :: =========================

class Nome_classe
    # Construtor do ruby é o initialize

    def initialize(var = "Default Modelo padrao")
        @variavel = variavel
    end

    def GET: nomeAtributo_GET
        @variavel_de_instancia
    end 
    def SET : nomeAtributo_SET (value_OPCIONAL_PARA RECUPERARporPARAM_o_VALOR)
    end

    def metodo
        puts fazer algo
    end
end >> # fecha a classe   

=========================================================

=end


=begin
# =======TODO CODIGO COMENTADO ::==========================

class Carro
    # definido o getter
    def nome=(value)        # Se coloca o = transforma essa funcao em um setter
        @nome = value       # essa @variavel só fica disponivel dentro desse escopo dessa classe
    end

    # definido o setter
    def nome
        @nome               # definindo a @variavel como metodo no setter ela se torna disponivel fora da classe , ao instanciar a classe com new
    end

    # definido metodo da classe
    def mostrar(marca ="Marca Padrao OPCIONAL DEFAULT SÓ APARECE SE NA INVOCAO NAO FOR PREENCHIDO")     # incluindo parametro neste caso :: marca    # Podemos definir um default ou nao 
        puts "Marca: #{marca} -- Modelo: #{self.nome}"    # mostrar o parametro incluindo concatenado que puxa a informacao do setter (setado) @nome --- com self(que seria o this (esta variavel é dessa classe) não precisa usar o @ neste setter pode usar o self no lugar que ja mostra que é do escopo dessa classe)
    end

end

# debugger

carro = Carro.new       # Instanciando a classe para poder ser usada fora 

# INVOCANDO/RECUPERANDO/CHAMANDO A CLASSE AGORA INSTANCIADA PARA APROVEITAR SEUS ATRIBUTOS , PROPRIEDADES E METODOS::

carro.nome="Palio"      # Com a classe instanciada posso usar seus atributos e dos atributos as suas propriedades
# puts carro.nome       # Agora vou usar carro.mostrar ja que temos um metodo
carro.mostrar("Fiat")   # Mostrando da classe instanciada carro , o metodo mostrar com o parametro ...preenchido como Fiat    
carro.mostrar()         # Nao preenchendo o parametro nesta invocacao --ele mostra o que definimos por default no parametro da funcao
carro.mostrar("Fiat")   # Mesmo com o default no parametro ele sobreescreve e mostra o preenchido no parametro aqui

=====================================================

=end