=begin
    
POLIMORFISMO = REESCREVER FAZENDO DE VARIAS FORMAS


FAZENDO O POLIMORFISMO NO RUBY ::
Criei o metodo mostrar que tem o mesmo nome da classe Pai Carro criei com emsmo nome na classe Filha Golf
RECUPEREI :: carro.mostrar  ...MOSTROU O METODO DA CLASSE PAI CARRO
RECUPEREI :: golf.mostrar  ...MOSTROU O METODO DA CLASSE FILHA GOLF

# PARA MOSTRAR O METODO DO PAI e o METODO DO FILHO Juntos USAMOS O SUPER NO ARQUIVO DO FILHO.  ex:
#usando o SUPER para mostrar o metodo original

    class Golf < Fiesta
    def mostrar
        mostrar_original = super
        puts "este é o metodo mostrar da classe golf --- #{mostrar_original}"
    end
end

# RECUPERAR ::
    golf.mostrar   // Vai mostrar todos os metodos mostrar

# ==========================================================
OVERLOAD = SOBRECARREGAR
NÃO TEM OVERLOAD NO RUBY 
    QUE SERIA 2 METODOS COM MESMO NOME NA MESMA CLASSE , ELE SOBREESCREVE --SE O PRIMEIRO TIVER PARAMETROS E O ULTIMO NÃO --O ULTIMO FEITO É O QUE FICA VALENDO 

# ==========================================================
    PARAMETROS OPCIONAIS E SEM LIMITES
    USAR O ASTERISTICO PARAM  ex (*parametros)  ex::

    def andar(*parametros)
        puts "andar com parametros, opcionais #{parametros} "

        #mostrar parametro por parametro na tela com EACH
        
        parametros.each do |param|
            puts param
        end
    end


end
