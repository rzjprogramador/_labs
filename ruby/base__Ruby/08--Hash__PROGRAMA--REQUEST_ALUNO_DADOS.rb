require 'byebug'

# Hash--UTILIZANDO_PROGRAMA--REQUEST_ALUNO_DADOS

# UTILIZANDO UM HASH COM ARRAY DE ALUNOS

loop do
	puts "Bem vindo ao Programa"
	puts "Digite 0 para sair ou 1 para continuar"
	valor = gets.to_i

	break if(valor == 0)

	#OUTRO LOOP PARA CADASTRAR USUARIOS PARA A LISTA
	alunos = []
	
		3.times do  
			aluno = {}  # CAPTURAR 3 ALUNOS ao inves de fazer um loop ou for
		           
			
		puts "Digite o nome do aluno"
		aluno[:nome] = gets.delete("\n")    #delete("\n") em gets para deleatr a quebra de linha que ele faz sem esse tratramento de string


		puts "Digite o telefone do aluno"
		aluno[:tel] = gets.delete("\n")

		# DEPOIS DE PREENCHIDO JOGAR aluno para dentro do array de alunos
		alunos << aluno

	end
		# MOSTRAR OS ALUNOS
		alunos.each do |aluno|      # |aluno| é a chave do meu each 
			# mostrar alunos capturados --concatenar aluno chave nome e aluno chave tel
			puts "================================================="
			puts "aluno: #{aluno[:nome]}, telefone: #{aluno[:tel]}"
		end
	
end

# METODO :: gets.to_i  PEGA VALOR DIGITADO NA TELA E CONVERTE EM STRING
# VALVULA DE SCAPE DO LOOP break if(valor == 0)  LOGICA SE VALOR FOR IGUAL A 0 ELE PARA O LOOP

