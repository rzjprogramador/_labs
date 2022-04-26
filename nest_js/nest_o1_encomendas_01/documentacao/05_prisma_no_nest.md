# NO NEST JS
> GERAR O SERVICO DO PRISMA NO APP PRINCIPAL NA SRC
nest generate service <prima ou db ou nome que preferir>


# USANDO DEFINICOES DE TIPOS E MODELS FEITOS NO PRISMA NO SERVICO COMO TIPAGEM PARA TRAZER DADOS DO BANCO

> OBS: O USER QUE ESTA NA DOC. É O NOME DO MODEL NA IMPLEMENTACAO NOSSA.
  > Usando o model feito no prisma:
   - nas definicoes de tipos do prisma :: procurar por <nome do model> WhereUniqueInput 

AULA : 03:28 #CODIGOFALADO

falta buscar dados do outro model filho
e chamar no controller este servico

---
# ID NO PRISMA
id: Number.parseInt(id),

// para o prisma o id tem que ser inteiro para auto-incrementar e no graphql ser string do ID convertemos para int aqui

---

# TRAZENDO VIA SERVICO :: LA DO PRISMA  :: POR PARAMS UNICO DADO PASSADO
  // ACESSAR : http://localhost:3333/encomenda-test1/deletar-pai/3     >> O ULTIMO NUMERO É DO ID PASSADO

# ERROS : EXCESSAO :  Se nao tiver - retornar o 404 NotFound
    if (!pai) {
      throw new NotFoundException();
    }
    return pai;

