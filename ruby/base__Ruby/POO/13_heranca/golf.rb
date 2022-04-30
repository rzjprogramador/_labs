class Golf < Fiesta
    def mostrar
        mostrar_original = super
        puts "este é o metodo mostrar da classe golf --- #{mostrar_original}"
    end

    def andar(p1,p2,p3)
        puts "andar com parametros #{p1}, #{p2}, #{p3} "
    end

    def andar
        puts "andar sem parametros"
    end

    def andar(*parametros)
        puts "andar com parametros, opcionais #{parametros} "

        #mostrar parametro por parametro na tela
        parametros.each do |param|
            puts param
        end
    end

end