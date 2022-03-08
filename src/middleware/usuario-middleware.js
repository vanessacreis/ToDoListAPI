const usuarioMiddleware = (app) => {
  app.use("/usuario", (req, res, next) => {
    if (req.method == "POST") {
      const body = req.body;
      if (!body.senha) {
        res.json({
          erro: true,
          msg: "campo obrigatorio senha não foi enviado",
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

export default usuarioMiddleware;
