import 'module-alias/register'
import "reflect-metadata"

import express, { NextFunction, Request, Response } from "express";
// import "express-async-errors";

// TEM QUE IMPORTAR O CONTAINER EM USO DO TSRYNGE
// import '@/core/_generics/shared/container/container_users' 
// import { OBRIGATORIO } from '@/core/_generics/objects/msg' 

// import { routes } from '@/_server/routes'

const app = express();

app.use(express.json());

// app.use(routes);

// app.use( // MIDLE PARA ERROS
//   (error: Error, req: Request, res: Response, next: NextFunction) => {
//     if (error instanceof Error) {
//       return res.status(400).json(error.message);
//     }

//     return res.status(500).json(error);
//   }
// );

app.listen(3333, () => console.log(`SERVER_ON :: 3333`));
