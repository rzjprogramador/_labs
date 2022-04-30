Criar novo Database pela string de conexao só coloca o nome do banco há existir 
nao precisa cria-lo primeiro pra depois usar na string a string cria na proxima execucao

Restatar server se for mudar algo relacionado ao banco

---
# findByIdAndUpdate() >> localizar por id e atualizar
passar no 1º o id , no 2º o obj com os args disponiveis apra mudar e no 3º o obj senao encontrar cadastrar novo { new: true }
exemplo :
findByIdAndUpdate(id, { author, description, likes: 0}, { new: true })
opcao :: { new: true }  >>> Usado em update - Senao encontrar o id ele vai la e cadastra um novo

---


