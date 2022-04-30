Erro no arquivo Acao.ts 
Esta pedindo na compilacao para explicitar o tipo de criacao e update que sao datas ::
Ele fez isto com todos atruibutos ::  


Unable to infer GraphQL type from TypeScript reflection system. You need to provide explicit type for 'createdAt' of 'Acao' class
Traduzido :
Não é possível inferir o tipo GraphQL do sistema de reflexão TypeScript. Você precisa fornecer um tipo explícito para 'createdAt' da classe 'Acao'


SOLUCAO:: PorEnquanto coloquei restricao falsa no tsconfig
"strict": false,

---
