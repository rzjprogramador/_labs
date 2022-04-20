# RECURSOS PAGINACAO
Obs: OS RECURSOS VEM COM HANDERLINE NA FRENTE SOMENTE QUANDO A FONTE DE DADOS É O JSON-SERVER
EM UMA API NORMAL NORMALMENTE VEM SEM O HANDERLINE NA FRENTE DO RECURSO.

È sempre um ?<recurso=valor> & <configuracaoRecurso=valor>

inicio_recurso: ?
recursos: [ 
  start : 'define o inicio, 
  
  order: 'define a ordem opcoes: [
    desc : 'descrescente do maior para o menor  ex de indexRefs: 10, 9, 8... ', 
    asc: 'crescente do menor para o maior ex de indexRefs: 1, 2, 3'
    ],

   ],

   configura_recurso: [
     contexto: 'estes serao configuracoes que vem apos o & ::',
     limit : 'define o limite',
     sort: 'informe o campo numerico que vai utilizar para order da paginacao ex: sort=CAMPO_NUMERICO_INDEXREF'
   ]

separacao_entre_recursos: 'após o valor inserir &'
exemplo_na_url_sintaxe: '<endpoint>_start=0&_limit=2'
exemplo_na_url_local: 'http://localhost:9999/usuarios?_start=0&_limit=2'
exemplo_url_paginacao_com_limit_e_ordem: 'http://localhost:9999/produtos_encomenda?_start=0&_limit=2&_order=asc&_sort=indexRef'