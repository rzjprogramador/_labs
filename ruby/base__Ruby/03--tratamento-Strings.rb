require 'byebug'

# TRATAMENTO DE STRINGS
j = "este é o valor declarado"
i = "abmas"
h = "    retira   espaços   troca     por ponto"
g = "       retirar espaços no inicio da frase com strip"
f = "deletar a primeira frase ..se der certo com delete deletou a frase deletar"
e = "TRANSFORMA EM MINUSCULA COM DOWNCASE"
d = "Jackson"
c= "Michael "
b = "aniversario"
a = "Praticando Logica Ruby"

# gsub SUBSTITUINDO O 1º TEXTO AQUI SOLICITADO PELO NOVO AQUI DIGITADO
a = a.gsub("Praticando", "Este será o novoTexto no lugar de Praticando")
puts a 

# CONCATENAÇÃO
bb = "Feliz ... #{b} e muitas felicidades"
puts bb

# concatenação com <<  vai concatenar o que esta na var b com o que esta na var a -- dar um puts em ordem de variavel
c << d
puts c

# SUBSTRING RECUPERAR SOMENTE 5 CARACTERES DA VAR a
puts a[0, 5]

# SCAN VAI RECUPERAR PELA REGEX FRASE DESEJADA OU DEFINIDA
puts a.scan(/Ruby/)

# SPLIT RETORNA TUDO SPLITADO UM ARRAY DE LISTA DO JEITO QUE VC ESPECIFICAR
puts a.split(" ")
# retorna : lista da variavel a :: splitada por espaços

#UPERCASE  TRANSFORMANDO VALORES DA VARIAVEL  EM MAIUSCULO
puts bb.upcase

# DOWNCASE  TRANSFORMANDO VALORES DA VARIAVEL  EM MINUSCULAS
puts e.downcase

 # CAPTALIZE DEIXA PRIMEIRA LETRA MAIUSCULA E O RESTO MINUSCULA
 # uTILIDADE: Podemos definir uma Classe em tempo de execução
 puts e.capitalize

 # DELETE -- Deleta a frase especificada no comando
 puts f.delete("deletar")

 # STRIP remove todos os espaços sem colar todas as frases --em outras linguagens este comando é o trim
 puts g.strip
# obs : lstrip  retira espalos da direita // rstrip retira espaços da esquerda

=begin
 GSUB MUDA O QUE VC NAO QUER PELO QUE VC QUER -- DEFININDO O COMANDO ENTRE ()
 Neste comando vamos substituir todos espaços por .ponto
=end

puts h.gsub(" ", ".")

# com INCLUDE? Retornar um Boleano se tiver o dados especificado no OCmando
puts h.include?("espaços")

# INDEX - Retorna a posição de indice do dado especificado no comando
puts h.index("espaços")

# REVERSE - Para mudar inverter um dado de traz para frente
puts i.reverse

# Center Adiciona espaços e deixa a string no centro
puts "hello".center(20)  #=> " hello "

# Replace troca um valor pelo outro
puts j.replace"este é o novo valor"

# Insert -- Inclui um valor emu ma posição da string
puts "abcd".insert(0, 'ZACA') #=> "Xabcd"