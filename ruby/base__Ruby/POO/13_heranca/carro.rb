class Carro

    def initialize(nome = "Modelo padrão")
        @nome = nome
    end

    attr_accessor :nome, :porta, :painel
    attr_writer :pneu
    attr_reader :retrovisor

    def mostrar(marca ="Marca Padrao")    
        puts "Marca: #{marca} -- Modelo: #{self.nome} -- #{funcao_privado} -- #{funcao_protegido}"   
    end

    private

    def funcao_privado
        "Este é um metodo privado pra retornar algo mais"
    end

    def funcao_privado2
        "Este é um metodo privado pra retornar algo mais"
    end


    public

    def funcao_publico
        "Este é um metodo PUBLICO pra retornar algo mais"
    end

    protected

    def funcao_protegido
        "Este é um metodo PROTEGIDO pra retornar algo mais"
    end
end
