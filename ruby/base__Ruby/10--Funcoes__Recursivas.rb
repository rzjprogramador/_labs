require 'byebug'

# debugger
def recursiva(contador=1)
	puts "Reinaldo"

	return if contador == 10
	recursiva(contador+1)
	
end
recursiva

# CRIAR FUNÇÃO PARA MOSTRAR 10 VEZES O NOME Reinaldo

# DECLARO O CONTADOR = 1 E O QUE QUERO MOSTRAR
# CONDICIONAL COM VAUVULA D ESCAPE SE O CONTADOR FOR IGUAL AO 
# QUE EU QUERO REPETIR 10vz ELE PARA APÓS INCREMENTAR A FUNCAO +1 ATE CHEGAR 
# NO PEDIDO DE 10 VZ