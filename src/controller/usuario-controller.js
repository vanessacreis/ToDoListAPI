import Usuario from "../model/usuario-model.js";

const usuarioController = (app, bd) => {
  app.get("/usuario", (req, res) => {
    const todosUsuarios = bd.usuarios;

    res.json({
      usuarios: todosUsuarios,
      erro: false,
    });
  });

  app.get("/usuario/email/:email", (req, res) => {
    const email = req.params.email;

    const usuarioEncontrado = bd.usuarios.filter(
      (usuario) => usuario.email == email
    );
    res.json({
      usuario: usuarioEncontrado,
      erro: false,
    });
  });

  app.post("/usuario", (req, res) => {
    const body = req.body;
    try {
      const novoUsuario = new Usuario(body.nome, body.email, body.senha);

      bd.usuarios.push(novoUsuario);

      res.json({
        msg: `Usuário ${novoUsuario.nome} inserido com sucesso`,
        usuario: novoUsuario,
        erro: false,
      });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });

  app.delete("/usuario/email/:email", (req, res) => {
    const email = req.params.email;
    const novoDB = bd.usuarios.filter((usuario) => usuario.email !== email);
    bd.usuarios = novoDB;

    res.json({
      msg: `Usuário de email ${email} excluido com sucesso`,
      erro: false,
    });
  });

  app.put("/usuario/email/:email", (req, res) => {
    const email = req.params.email;
    const body = req.body;

    try {
      const usuarioAtualizado = new Usuario(body.nome, body.email, body.senha);
      bd.usuarios = bd.usuarios.map((usuario) => {
        if (usuario.email === email) {
          return usuarioAtualizado;
        }
        return usuario;
      });

      res.json({
        msg: `Usuário ${usuarioAtualizado.email} atualizado com sucesso`,
        usuario: usuarioAtualizado,
        erro: false,
      });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });
};

export default usuarioController;
