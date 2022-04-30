# S - single responsability
- contexto: Unica Responsabilidade
- componentes : tem que ser É um  ...Principal tem quer ter ? (subordinada)

--detalhe: ter coerencia : uma classe é coesa se usar seus atributos nos metodos..ou seja cada metodo precisa de algum atributo da classe.

- funcionalidades : cada  classe com uma só  responsalidade

- exemplo: regras, validacoes,...cada um em classes separadas.

// ---------------------------------------------------------‐----

S ::
"TEM UM" ?? A Entidade TEM UM da prop.
- Responsabilidade Unica
- Nao ter motivos para mudar

---



---

# O :: OpenClose :: Aberto e Fechado
- contexto : Entidades devem estar Abertas para extensões (fazer heranca  ou Composicao e usar a ideal para cada objetivo ou pedindo param no metodo para receber o argumento no main) e fechado para modoficacoes

- uso: para variacoes - abre margem para strategy uma familia que herda um comportamento, posso ter comportamentos variados sem mudar o restante cada comportamento É Um do mesmo.
- exemplo: desconto é o que vai variar ,

O :: open/closed ::

-  Fechado para modificacoes e aberto para extensoes
-  Na SuperClasse disponibilizando metodos abstratos - obrigando as sub classes o implementar
-  Cada nova sub-Entidade implementa o metodo incompleto só assinalado.
-


---
# L :: Lisvov Substitution
contexto : Principio de Substituicao , só subistitui por um que tem o mesmo contrato

- quando sobreescreve um metodo nao respeitando o seu tipo de retorno e no uso tem que verificar o tipo de retorno pra fazer algo
- se tiver que checar tipagem - falta contrato.
- solucao : usar contrato com coerencia nas classes para nao mudar tipos de retorno,
- para usar o conteato tem que ser UM ...
-  pode fazer polimorfismo mas sem mudar o tipo de retorno.

---
# I :: Interface  Segregation
contexto: os clientes nao devem ser forcados a depender de contratos que nao utilizam

- casoComum : cliente - fisico ou juridico

- solucao - cria um metodo identificador
-

---
# D :: Inversao de Dependencia
contexto : dspender só de abstracoes conteatos

---