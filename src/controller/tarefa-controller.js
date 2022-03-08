const tarefaController = (app) => {
  
  app.get("/tarefa", (req, res) => {
    res.json({
      Tarefas: [],
    });
  });

  app.post("/tarefa", (req, res) => {
    res.json({
      msg: "Tarefa inserida com sucesso",
    });
  });
};

export default tarefaController;
