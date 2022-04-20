# ERROS NO JS MODULOS
Para usar modulos no Js em 2021 precisa 
- onde for usar importar com a extensao .js
- no package.json adicionar :: "type": "module"
- no script pode usar a lib sucrase com nodemon :: "start": "nodemon -r sucrase/register src/index.js ",
- se for buscar dados de uma api importe o fetch nativo do node-fetch nao precisa de chaves ele é default

> erro quando busca algo default com chaves :: 
SyntaxError: The requested module 'node-fetch' does not provide an export named 'fetch' 
- does not provide an export named :: quer dizer que nao existe esta funcao no modulo provavelmente ela é default.
solucao: chame a funcao do modulo sem as chaves

---




