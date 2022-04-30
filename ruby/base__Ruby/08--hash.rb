# HASH  -- cerquilha # em Portugues
# Verificar no Console Ruby :: irb o tipo do objeto se é hash :: {}.class
# È um Objeto onde guardamos chave e valor ex: meuHash={nome:"Reinaldo", Tel: 123456}

# Formas de Declarar um Hash ::
a = {nome:'Reinaldo', numero: 99}

# Como Utilizar Recuperar um Hash ::
puts a

# Obs: Nao declarar chave de hash em Maiuscula da erro.

# MOSTRAR SOMENTE O VALOR DA CHAVE NOME --OBS: Nao esquecer colocar : porque é um symbolo ex :nome
puts a[:nome]

# MSTRAR SOMENTE O VALOR DA CHAVE NUMERO ::
puts a[:numero]

#Outra forma de declarar Hash --obs ..nao esta no padrao atual Json de hoje mas veja :
# Tem que declarar um hash vazio a{} , e depois com a mesma variavel continuar a declarar colocar chave e valor 
b = {}
b[:rua] = "ContoAreia"
puts b

# Obs: A CHAVE VC PODE USAR QUALQUER TIPO EX 
# simbolo   nome: 'meuvalor-Simbolo'
# inteiro    1111: 'meuvalor-inteiro'
# string     ["nome"] = "meuvalor-string"

# PARA RECUPERAR , MOSTRAR VC USA O MESMO CARÁCTER QUE USOU PARA CRIAR
# EXEMPLO  a[1111]   deve retornar 'meuvalor-inteiro'

# MAIS ACONSELHAVEL UTILIZAR SYMBOLO ou STRING para declaarar Hash

# CONVERTER PARA SYMBOLO com >>>>  .to_sym

c = {}
c["apelido".to_sym] = "Reizao"

puts c[:apelido]
 # obs para acessar nao acessar como string mais vai dar nil nulo , agora acessa por symbolo ex >>> [:apelido]

