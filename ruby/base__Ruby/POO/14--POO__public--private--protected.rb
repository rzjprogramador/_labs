# PUBLIC :: publico para todas classes

# PRIVATE :: Só acessivel dentro da classe --mas pode ser acessado fora se concatenado a um metodo publico 

# PROTECTED :: Só acessivel dentro da classe e das que a Herdam --mas pode ser acessado fora se concatenado a um metodo publico 

## OBS :: Dentro da classe  Respeita-se a ordem de assinaturas exemplo :
# Se assinar que o comando Sera PUBLIC abaixo dele todos serao PUBLICaté a proxiam assinatura
# Se assinar que o comando Sera PRIVATE abaixo dele todos serao PRIVATE até a proxiam assinatura
# Se assinar que o comando Sera PROTECTED abaixo dele todos serao PROTECTED até a proxiam assinatura


=begin

#  ASSINATURAS em HERANÇAS 
METODO PRIVADO NO METODO HERDADO   :: OK ELE DEIXA ACESSAR ex :
fiesta.mostrar_privado
"Este é um metodo privado pra retornar algo mais"

METODO PROTEGIDO NO METODO HERDADO   :: OK ELE DEIXA ACESSAR TAMBÉM ex :

# no arquivo fiesta
def mostrar_protegido
        funcao_protegido
    end 

    #NO  console :
fiesta.mostrar_privado
"Este é um metodo privado pra retornar algo mais"

 A DIFERENÇA É QUE NO PROTEGIDO ELE PERMITE CRIAR UMA INSTANCIA do METODO PROTEGIDO

    # NO ARQUIVO FIESTA
    def mostrar_protegido_instanciado
        Carro.new.funcao_protegido
    end   
  
    #NO  console :
    fiesta.mostrar_protegido_instanciado
"Este é um metodo PROTEGIDO pra retornar algo mais"

=end