class Abstrata
    def initialize
        raise "Classe não pode ser instanciada, somente herdada e implementada, Interface"   
    end

    def test1
        raise "Metodo NÃO implementado"
    end

    def test2
        "IMPLEMENTADO ..Este é o Metodo test2"
    end

end



=begin
    
Classe ABSTRATA === Porque contem metodos implementados e metodos não implementados é bem abstrata mesmo .

    
# INSTANCIADO TEST1 NÃO VAI DEIXAR POR CAUSA DO RAISE 
O RAISE NAO DEIXA DEVOLVE ESTE ERRO *** RuntimeError Exception:   E A MENSAGEM DE ERRO POR NÓS CONFIGURADA
Klass.new.test1
*** RuntimeError Exception: Metodo NÃO implementado

# INSTANCIANDO O METODO TEST2  VAI DEIXAR PORQUE ESTA SEM O RAISE PRA CUSPIR ERRO

Klass.new.test2
"IMPLEMENTADO ..Este é o Metodo test2"



=end