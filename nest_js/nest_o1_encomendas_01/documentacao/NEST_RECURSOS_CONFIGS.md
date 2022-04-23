# COMENTARIOS AO INVES DE @FIELD()
doc:( https://docs.nestjs.com/graphql/cli-plugin#comments-introspection)

> ATENCAO SÓ FUNCIONA COM ARQUIVOS COM O SULFIXOS CONFIGURADOS AQUI :
"typeFileNameSuffix": [".input.ts", ".args.ts", ".entity.ts", ".model.ts"],

> PARA NAO FICAR VERBOSO CONFIGURAR PLUGIN DE INSTROSPECT COMMENT EM NEST-CLI.JSON
- Com este plugin habilitado... evita a verbosidade do @Field() 
- e vai compilar no schema o tipo correto do graphql baseado no tipo do ts. 
- Obs: funcioan somente apra tipos scalar primitivos
- Os tipos genericos ou customizados que precisam de uma resolucao no @Field de typefunction

# TIPAGENS
> CAMPOS: No @Field() senao passar nada ele infere como sendo uam string