import express from "express";
import usuarioController from "./controller/usuario-controller.js";
import tarefaController from "./controller/tarefa-controller.js";

const app = express();
const port = 3000;

usuarioController(app);
tarefaController(app);

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}/`);
});
