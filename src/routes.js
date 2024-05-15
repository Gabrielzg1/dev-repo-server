import { Router } from "express";
import HelloController from "./controllers/HelloController";
import ExampleController from "./controllers/ExampleController";

const routes = new Router();
//Rotas publicas
routes.get("/hello", HelloController.index);

//Rotas privadas
routes.get("/example", ExampleController.index);

export default routes;
