

# RECEBENDO DADOS DINAMICOS
> na consulta da operacao criar a variavel e seu valor 
ex: 
query GET_USER($id: ID! $teste: String)

: no usoResolver: passar a viavelParam que quer usar entre as criadas e dar seu valor as criadas na declaracao
user (id: $id teste: $teste) {
    id
    nome
    
  }

  // UsoFRONT : envie o valor do parametroDinamico via Variables envie um json com o valor que deseja consultar.

  //OBS:  Geralmente o campo id ja traz todas as variaveis nao sendo necessario pedir variavel por variavel do objeto, use mais que um campo na consulta dinamica se o campo desejado nao existir no objeto.

exemplo Consulta:
query GET_USER($id: ID! $teste: String) {
  user (id: $id teste: $teste) {
    id
    nome
    
  }
  
}

// Enviando viaFRONT_em_JSON Variavel:
{
  "id": "1",
  "teste": "Reinaldo via FORM" // OBS: Este campo nao existe no tipo nao posso consulta-lo mas posso pega-lo no resolver e fazer algo com ele ... Isto é mais para campos que vc sabe que vai vir mas vc quer usar sem estar no seu objeto ou ate mesmo renomear. fazer um mapper e assim vai.
}

---


