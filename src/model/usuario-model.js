class Usuario{
  constructor(nome, email, senha){
      this.nome = nome
      this.email = email
      this.senha = this._validaSenha(senha)
  }

  _validaSenha = (senha)=>{
      if(senha.length >= 6){
          return senha
      }
      else{
          throw new Error("A senha precisa ter mais de 6 caracteres")
      }
  }

}

export default Usuario