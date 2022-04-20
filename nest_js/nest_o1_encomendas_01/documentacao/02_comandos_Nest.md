# IMPORTANTE NA MODULARIZACAO
> doc: (https://docs.nestjs.com/modules)
> 
O MESMO NOME DO SUB-MODULO VAI SER USADO PARA TUDO CRIAR : module, service e controller
Os modulos sao tipo singleton e pode compartilhar ele pode ser usado por qualquer outro modulo.

sintaxe: nest <g "de generate"> <service "que é o recurso"> <nomeEscolhidoDoModulo>

ele fará a importacao e registro como provedor de cada modulo onde ele sera usado. ex: 

> NOME USADO POR RZJ PARA TESTAR DE INICIO : encomenda_test1
FICANDO ASSIM OS COMANDOS DESTE SUB-MODULO DA APP: 

nest g module encomenda_test1
nest g service encomenda_test1
nest g controller encomenda_test1


---

