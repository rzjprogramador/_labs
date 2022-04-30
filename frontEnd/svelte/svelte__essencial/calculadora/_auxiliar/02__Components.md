# Criar Component
> na pasta components criar o Component - convencao SnackCase
no script >> iniciar as propriedades com valor ou tipo
no elemento html >> interpolar a variavel
no <style>   >> estilizar

> no Component Principal deste Contexto importar e invocar o Component filho
acessar suas props nos parametros do component

# Mostrando Components Filhos :
 <slot />  :: no component Pai definir a tag  <slot />

 # Logica- condicional no component
 posso utilizar a classe condicional triplo 
 objetivo :: " Se a classe for triplo mostra triplo senao mostra nada deixa a default"
 aplicando no modo js raiz :: {`botao ${triplo ? 'triplo': ''} 
 aplicar no modo enxuto :: "botao" class:triplo
 deixo a classe padrao "botao" e passo class:<a classe-variavel a aplicar se for true>

