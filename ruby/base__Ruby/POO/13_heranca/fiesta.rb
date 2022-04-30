class Fiesta < Carro
    attr_accessor :cor

    def mostrar_privado
        funcao_privado
    end  
    
    def mostrar_protegido
        funcao_protegido
    end  

    def mostrar_protegido_instanciado
        Carro.new.funcao_protegido
    end  
end