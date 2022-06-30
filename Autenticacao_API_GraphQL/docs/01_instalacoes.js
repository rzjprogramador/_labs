{
  instalacoes_dependencies: `
  yarn init -y 

  contexto: instalar com yarn add

  apollo-server bcryptjs class-validator graphql jsonwebtoken reflect-metadata type-graphql @prisma/client dotenv graphql module-alias vite-tsconfig-paths
  
  `;
}

{
  instalacoes_devDependencies: `
  contexto: instalar com yarn add -D

  @types/bcryptjs @types/jsonwebtoken ts-node-dev typescript @types/node prisma tsconfig-paths vitest
  
  `;
}

{
  add_package_json: `
    "_moduleAliases": {
      "@src/": "./src/"
    },
    "prisma": {
      "seed": "ts-node -r tsconfig-paths/register prisma/seed.ts"
    }
  
  `;
}

{
  scripts_rodar_app: `

    "dev:server": "tsnd --transpile-only --ignore-watch node_modules src/server.ts",
    "build": "rimraf dist && tsc -p tsconfig-build.json",
    "nao": "npx dotenv-cli -e .env -- npx prisma migrate reset --force --skip-generate --preview-feature",
    "dev:rest": "ts-node-dev --respawn --watch 'src/**' --transpile-only --ignore-watch node_modules -r tsconfig-paths/register src/_app_rest/server/express_server/server.ts",
    "vitest": "vitest",
    "pretest": "npx dotenv-cli -e .env.test -- npx prisma migrate reset --force --skip-generate --preview-feature"
  
  `;
}
