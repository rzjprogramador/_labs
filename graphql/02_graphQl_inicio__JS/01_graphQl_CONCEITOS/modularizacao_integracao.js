/* eslint-disable no-unused-vars */

const install_Modularizacao_JS = {
  modularizar: {
    sucrase: {
      install: `npm i -D sucrase`,
      contexto: `habilitar import e export`,
      script_para_rodar: `node -r sucrase/register src/index.js`,
    },
  },
  nodemon: {
    instalacao: `npm i -D nodemon`,
    contexto: `auto reload.`,
    scripts_use: `
      - para JS :: nodemon -r sucrase/register src/index.js
      `,
  },
};
