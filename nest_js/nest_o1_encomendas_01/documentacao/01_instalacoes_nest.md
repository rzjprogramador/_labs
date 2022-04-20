# INSTALACOES NEST JS

### INSTALAR NEST JS GLOBAL NA MAQUINA
// caso de erro instale com sudo
sudo npm i -g @nestjs/cli

### atualizar npm
sudo npm install -g npm@8.7.0

# PROJETO
nest new <nomeProjeto ou "ponto" vai criar o projeot com nome da pasta atual>

## RODAR PROJETO 
npm run start
npm run start:dev

No browser em http://localhost:3333/  >>> Vai escrever um HelloWord!

---
> Digitar nest no console vai mostrar todos comandos e opcoes disponiveis

# CRIAR ARQUIVO DE CONFIGURACOES PERSONALIZADAS
CONFIGURACAO
//https://docs.nestjs.com/techniques/configuration#configuration
## USAR O ENVDO DOTENV
npm i --save @nestjs/config

IMPORTE NO APP MODULE O CONFIG MODULE CHAME NO IMPORTS 
import { ConfigModule } from '@nestjs/config';
imports: [ConfigModule.forRoot()],

no forRoot == para a Raiz posso definir o objeto de configuracao ncolocarei meus arquivos env
ConfigModule.forRoot({
      envFilePath: ['.env_exemplo', '.env_exemplo2'],
    }),

---
## Tornar global o forRoot com a propriedade
  isGlobal: true,
// ASSIM POSSO USA-LO EM QUALQUER MODULO DA APP --INJETANDO O ATRIBUTO configService

# RECUPERANDO VARIAVEL DE AMBIENTE :
INJETO EM QUALQUER CONSTRUTOR O ATRIBUTO : private readonly configService: ConfigService
USO DO ATRIBUTO INJETADO COM O NOME DA VARIAVEL .GET()::
this.configService.get('NOME DA VARIAVEL DE AMBIENTE DENTRO DE STRING') exemplo:
`usando o valor :: ${this.configService.get('SERVER_LOCAL')}`;

