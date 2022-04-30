/*  
Adapter EmailValidator
Diagrama :: (https://app.diagrams.net/#G1SZmgc_ZbwnTK9H0YVXlmfMsljRKCqVzD)
Diagrama-Aula :: (https://github.com/luizomf/design-patterns-typescript/blob/master/src/structural/adapter/diagramas/Adapter-Class.png)

usar a lib : npm i validator
e a tipagem dela : npm i -D @2types/validator

lib validator
tem a funcao pronta isEmail() -- para usa-la para checar se meu email pe valido pásso meu email para ela ex: isEmail(email)

*/

/*  
------- FLUXO CODIGO DAPTER -- EMIL VALIDATOR ----------------------
Adaptando : client >> adapter >>protocolo 
(cliente entra com protocolo via param da funcao e adapter implementa o  protocolo)
>> adapter ubnico que utiliza e retorna o externo /lib

-----------------------------

criar protocolo :: meu codigo precisa de alguem que sabe validar email
-----------------------------
Meu Adapter :: 
implementa o protocolo 
usa a funcao da lib Externa pedindo algo e retorna o que pediu -pedindo tbm  a funcao com param]
ex: return isEmail(value)
-----------------------------

Protocolo ::
Diz o metodo e o tipo de retorno que ele tea que ter de quem faz a tarefa
// assinatura do metodo  : é um email valido retorna true senao retorna false

-----------------------------
client (Quem vai usar)
funcao e npor params a instanciaDiretaDeProtocolo e o que quer da libAdaptada
Logica : regra de negocio com a funcionalidade vinda do adaptador que trouxe do externo
Na utilizacao na invocacao : passar : clone da classe do adaptador() , o que quer testar da funcao adaptada

*/