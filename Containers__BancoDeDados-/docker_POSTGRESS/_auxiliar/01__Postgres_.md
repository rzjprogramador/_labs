# Importante
Este Docker do Postgres vai criar um Workspace uma Instancia do Postgres
uma especie de agrupador de bancos de dados
... E dentro dele vc vai criar um banco de dados para cada projeto !


# Acessar o Pg-Admin na web
* o mesmo definido no docker compose em 
[Pg - Admin na Web] (http://localhost:15432/browser/)

Tutorial :: https://renatogroffe.medium.com/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4


# Autenticacao ao banco Postgres no PgAdmin
* O mesmo definido em environment :
login :: eu@email.com
senha :: root


# Utilizar
entrar na Pasta dar docker-compose up
entrar na Base de Dados e criar o Database do projeto desejado
Ir no projeto e configurar com este novo Database


# Acesso no DBeaver
// Conectar com esses dados Vai criar o Banco postgres  ::
Database :: postgres
Port: 5440
Username: postgres
Password: postgres



# Criar nava Base de Dados >> DataBase
Para Criar nova Base de Dados clique com a direita no Sidebar de Bancos
Criar / Banco de dados (DataBase)
Para cada projeto crie um Banco de Dados