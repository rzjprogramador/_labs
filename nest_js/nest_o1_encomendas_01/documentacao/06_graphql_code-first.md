# TIPAGEM
> MAPEAMENTO DE CAMPOS
type function nos campos nao é preciso quando o tipo for scalar primitivo o graphql ja infere.
Só no caso de for um Int ou Float e no typescript classe for só number preciso informar o ts via type function que sera um Int ou Float.

# OPCIONAIS
Enquanto no ts vc indica que é opcional com o interrogracao ?
no codefirst passe um obejto com nulo verdadeiro em type function do campo ex:  { nullable: true }

# PASSOS

- Apos a tipagem precisamos resolver para o client poder interagir com a entidade

#
Resolver é um provedor :: entao no modulo central do seu moduloCustomizado registre-o como provider

# 
Ao startar o server ele tem que criar no schema automaticamente o que foi configurado em codeFirst com
um comentario de nao editar o arquivo.