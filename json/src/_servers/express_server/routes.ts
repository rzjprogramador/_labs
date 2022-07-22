import { InicioController } from '@src/modules/inicio/InicioController'
import JsonController from '@src/modules/json/JsonController'
import { Router } from 'express'

const routes = Router()

// const createUserController = new CreateUserController();
// const getPostsByUserController = new GetPostsByUserController();

// routes.post("/users", createUserController.handle);
// routes.get("/posts/user/:id", getPostsByUserController.handle);

routes.get("/inicio",InicioController)

routes.get("/json/todos", JsonController.getAll)
routes.post("/json/insert", JsonController.insert)
// routes.put("/json", JsonController)
// routes.delete("/json", JsonController)

export { routes }
