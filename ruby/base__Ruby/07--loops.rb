require 'byebug'

# Fazendo um loop de 1 até 5

top = 4
now = 0

	puts "while #{now += 1} .. #{top}" while now <= top

# =============================

# Comando BREAK :: Loop com valvula de scape para parar loop

index = 0
loop do 
	puts index
	index += 1

	break if index > 20
	
end

# Comando : NEXT == Loop de 0 a 11 ...e nao mostrar o 5 e o 8 ::

index = 0
loop do 
	index += 1
	next if index == 5 or index == 8
	puts index
	break if index > 10
	
end

# Superando o while com TIMES :: 
# Mostrando 5 vezes -- com Comando : times

5.times{ |index| puts index }

# Fazer o loop 6 vezes com times em mais d euma linha ::

6.times do |index| 
	puts index 
end

# ==============================

# Mostrando só os numeros impares de 0 até 7 com Comando loop FOR

for i in 0..7
	next if i % 2 == 0
	puts i
end

# Mesmo codigo para mostrar impares de 0 a 8 com TIMES no lugar do for

8.times do |i|
	next if i % 2 == 0
	puts i
end

# Para buscar numeros pares colocar o operador diferente ! no lugar da comparacao com 0

9.times do |i|
	next if i % 2 != 0

	puts i
end

#Utiliza ro comando EACH no lugar do for ..para mostrar de 1 até 7 com Range

(1..7).each{|i| puts i} 

# Com 1 ponto a mais no Range vai fazer um amenos ...vai fazer do 1 ate o 6
puts (0..7).class
(1...7).each{|i| puts i}