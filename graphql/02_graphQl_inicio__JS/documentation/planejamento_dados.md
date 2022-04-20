# PLANEJAMENTO DADOS
> Relacao Usuario x Pedidos :: 1:N 
- Um para Muitos :: Um USUARIO pode ter muitos PEDIDOS - Um PEDIDO só pode ter Um USUARIO.

>>  1paraMuitos : 
- Quem vai ter algo de outro poem na sua estrutura um link indentificador de referencia ex:id_do_Usado. 
- no que sera muitos((PEDIDO)) se coloca o id do proprietario que tera muitos deste ((USUARIO_ID)), 

- Entao na estrutura dos dados o usuario nao tem o array pedidos, e na estrutura pedido se tem o id do usuario apra fazer a relacao que ele tera pedidos[] 

dadosEncomenda == comentarios
dadosEncomenda PERTENCE ao Usuario,Produto e Pedido 