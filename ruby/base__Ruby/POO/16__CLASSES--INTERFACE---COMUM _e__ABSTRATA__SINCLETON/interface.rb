class Interface
    def initialize
        raise "Classe não pode ser instanciada, somente herdada e implementada, Interface"
    end

    def test1
        raise "Metodo pra ser implementado"
    end

    def test2
        raise "Metodo pra ser implementado"
    end


end






=begin

# raiser (igual try od js ) para disparar um erro se alguem tentar instanciar 
TENTANDO INSTANCIAR NO CONSOLE ::
Interface.new
*** RuntimeError Exception: Classe não pode ser instanciada, somente herdada e implementada, Interface
    

    
=end
