const usuarioController = (app) => {
  app.get("/usuario", (req, res) => {
    res.json({
      usuarios: [],
    });
  });

  app.post("/usuario", (req, res) => {
    res.json({
      msg: "Usuario inserido com sucesso",
    });
  });
};

export default usuarioController;
