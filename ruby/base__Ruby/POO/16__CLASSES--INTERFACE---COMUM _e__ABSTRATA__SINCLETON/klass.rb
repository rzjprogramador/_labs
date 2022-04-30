# USADA PARA CRIAR CLASSE HERDADA DE ABSTRATA

class Klass < Abstrata
    def initialize;end
end

=begin
# USADA PARA CRIAR INSTANCIA DE INTERFACE ::

class Klass < Interface
    def initialize
    end

    def test1
        "Implementado teste 1"
    end

    def test2
        "Implementado teste 2"
    end

end   


=end








=begin
# Exemplos abaixo se tiver herdando de Interface ---só ver na primeira linha de quem esta herdadno depois do sinal <

 # Conseguimos criar uma instancia de Interface agora sobreescrevendo o initialize com Polimorfismo   
Klass.new
#<Klass:0x000055e8e79f0aa8>

# Implementar para poder recuperar tbm os metodos só sobreescrevelos e recuperar com Klass.new.metodo
# RECUPERANDO NO CONSOLE ::

Klass.new.test1
"Implementado teste 1"

(byebug) Klass.new.test2
"Implementado teste 2"







 
=end