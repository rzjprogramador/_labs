require 'byebug'

def teste
    puts 1+5 -3
end
a = teste

puts a
# CRIAR A FUNCAO / CHAMA-LA PELO NOME E ATRIBUI-LA A UMA VARIAVEL E PARA PRINTAR NA TELA CHAMAR ESSA VARIAVEL 
# OU PODE USAR A FUNCAO TAMBEM CHAMANDO ELA SOMENTE PELO NOME 
# A ULTIMA INSTRUÇÃO DENTRO DA FUNÇÃO JA É O RETURN AUTOAMTICO
# USAMOS O RETURN SOMENTE SE QUISERMOS USAR COMO BREAK DE UM LOOP PARA NAO CONTINUAR AS INSTRUCOES ABABIXO DA FUNCAO PARA APRAR POR ALI

# EXEMPLO FUNCAO COM RETURN 
# Retornar 1 se o nosso contador for igual a 2
# esta resposta pedida tera que vir do parametro na chamada da funcao
# senao vier a resposta esérada ele continua as instrucoes que ainda tem na funcao

def contador2(contador)
    return puts"SIM É IGUAL A 2" if contador == 2
    1 + 420 -3
end

b = contador2(2)
puts b





# CRIAR FUNCOES PARA SEPARAR PARTES DO PROGRAMA

# loop do
# 	puts "Bem vindo ao Programa"
# 	puts "Digite 0 para sair ou 1 para continuar"
# 	valor = gets.to_i

# 	break if(valor == 0)


# 	alunos = []
	
# 		3.times do  
# 			aluno = {}           
			
# 		puts "Digite o nome do aluno"
# 		aluno[:nome] = gets.delete("\n")   

# 		puts "Digite o telefone do aluno"
# 		aluno[:tel] = gets.delete("\n")

# 		alunos << aluno

# 	end
#         alunos.each do |aluno|     
#             puts "================================================="
# 			puts "aluno: #{aluno[:nome]}, telefone: #{aluno[:tel]}"
# 		end
	
# end