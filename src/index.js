import express from "express";
import usuarioController from "./controller/usuario-controller.js";
import tarefaController from "./controller/tarefa-controller.js";
import generalMiddleware from "./middleware/general-middleware.js";
import bd from "./database/database.js";
import database from './database/sqlite-db.js'

const app = express()
const port = 3000

app.use(express.json())

generalMiddleware(app)


usuarioController(app, database)
tarefaController(app, bd)

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})